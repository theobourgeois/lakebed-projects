#!/usr/bin/env node
// lbui — a local web UI wrapping the lakebed CLI.
// Zero dependencies: node built-ins only. Serves index.html and a JSON API,
// and shells out to `npx lakebed ...` for the real work.

const http = require("node:http");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const { spawn, execFile } = require("node:child_process");

const ROOT = process.env.LBUI_ROOT || path.resolve(__dirname, "..");
const SELF = path.basename(__dirname); // "lbui" — hidden from list, banned as a name
const CONFIG_PATH = path.join(__dirname, "config.json");
const UI_PORT = Number(process.argv.includes("--port")
  ? process.argv[process.argv.indexOf("--port") + 1]
  : process.env.LBUI_PORT || 4400);

const MAX_LOG_LINES = 800;
const NAME_RE = /^[a-z0-9][a-z0-9-]{0,63}$/;

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let config = { ports: {} };
try { config = { ports: {}, ...JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8")) }; } catch {}
function saveConfig() {
  fsp.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2)).catch(() => {});
}

// name -> { proc, port, since, lines: [] }
const devs = new Map();
// name -> { kind: "deploy"|"domain"|"create", lines: [], done, ok, startedAt }
const jobs = new Map();
let authUser = null;
let authChecked = false;

function pushLine(buf, chunk) {
  const parts = String(chunk).split(/\r?\n/);
  for (const p of parts) {
    if (p.trim() === "") continue;
    buf.push(p);
  }
  if (buf.length > MAX_LOG_LINES) buf.splice(0, buf.length - MAX_LOG_LINES);
}

// ---------------------------------------------------------------------------
// lakebed helpers
// ---------------------------------------------------------------------------

function refreshAuth() {
  execFile("npx", ["lakebed", "auth", "status", "--json"], { cwd: ROOT, timeout: 30000 }, (err, stdout) => {
    authChecked = true;
    if (err) return;
    try {
      const data = JSON.parse(stdout);
      authUser = data.authenticated ? data.user : null;
    } catch {}
  });
}

async function listProjects() {
  const entries = await fsp.readdir(ROOT, { withFileTypes: true });
  const projects = [];
  for (const e of entries) {
    if (!e.isDirectory() || e.name.startsWith(".") || e.name === SELF) continue;
    const dir = path.join(ROOT, e.name);
    let deploy = null;
    try {
      const d = JSON.parse(await fsp.readFile(path.join(dir, ".lakebed", "deploy.json"), "utf8"));
      deploy = { url: d.url || null, deployId: d.deployId || null };
    } catch {
      try {
        const d = JSON.parse(await fsp.readFile(path.join(dir, "lakebed.json"), "utf8"));
        deploy = { url: d.url || null, deployId: d.deployId || null };
      } catch {}
    }
    let mtime = 0;
    try { mtime = (await fsp.stat(dir)).mtimeMs; } catch {}
    const dev = devs.get(e.name);
    const job = jobs.get(e.name);
    projects.push({
      name: e.name,
      deploy,
      mtime,
      port: config.ports[e.name] || null,
      running: dev ? { port: dev.port, since: dev.since } : null,
      job: job && !job.done ? { kind: job.kind, startedAt: job.startedAt } : null,
      lastJob: job && job.done ? { kind: job.kind, ok: job.ok } : null,
    });
  }
  projects.sort((a, b) => b.mtime - a.mtime);
  return projects;
}

function validateName(name) {
  if (typeof name !== "string" || !NAME_RE.test(name)) {
    return "Names must be lowercase letters, digits and hyphens.";
  }
  if (name.toLowerCase() === SELF) return `"${SELF}" is reserved for this UI.`;
  return null;
}

function projectDir(name) {
  const dir = path.resolve(ROOT, name);
  if (!dir.startsWith(ROOT + path.sep)) throw new Error("bad path");
  return dir;
}

function nextFreePort() {
  const used = new Set(Object.values(config.ports));
  for (const d of devs.values()) used.add(d.port);
  let p = 3000;
  while (used.has(p) || p === UI_PORT) p++;
  return p;
}

function runJob(name, kind, args, cwd) {
  const job = { kind, lines: [], done: false, ok: false, startedAt: Date.now() };
  jobs.set(name, job);
  pushLine(job.lines, `$ npx lakebed ${args.join(" ")}`);
  const proc = spawn("npx", ["lakebed", ...args], { cwd, env: process.env });
  proc.stdout.on("data", (d) => pushLine(job.lines, d));
  proc.stderr.on("data", (d) => pushLine(job.lines, d));
  proc.on("close", (code) => {
    job.done = true;
    job.ok = code === 0;
    pushLine(job.lines, code === 0 ? "✓ done" : `✗ exited with code ${code}`);
  });
  proc.on("error", (err) => {
    job.done = true;
    job.ok = false;
    pushLine(job.lines, `✗ ${err.message}`);
  });
  return job;
}

// ---------------------------------------------------------------------------
// API handlers
// ---------------------------------------------------------------------------

const handlers = {
  async "GET /api/state"() {
    return {
      root: ROOT,
      user: authUser,
      authChecked,
      uiPort: UI_PORT,
      projects: await listProjects(),
      createJob: jobs.has("@create") && !jobs.get("@create").done
        ? { startedAt: jobs.get("@create").startedAt } : null,
    };
  },

  async "GET /api/logs"(req, url) {
    const name = url.searchParams.get("name");
    const kind = url.searchParams.get("kind") || "dev";
    if (kind === "dev") {
      const dev = devs.get(name);
      return { lines: dev ? dev.lines : [] };
    }
    const job = jobs.get(name);
    return { lines: job ? job.lines : [], done: job ? job.done : true, ok: job ? job.ok : true };
  },

  async "POST /api/create"(req) {
    const { name } = req.body;
    const err = validateName(name);
    if (err) throw httpError(400, err);
    const dir = projectDir(name);
    if (fs.existsSync(dir)) throw httpError(409, `"${name}" already exists.`);
    if (jobs.has("@create") && !jobs.get("@create").done) throw httpError(409, "Another project is being created.");
    runJob("@create", "create", ["new", name], ROOT);
    return { ok: true };
  },

  async "POST /api/dev/start"(req) {
    const { name, port } = req.body;
    const dir = projectDir(name);
    if (!fs.existsSync(dir)) throw httpError(404, "No such project.");
    if (devs.has(name)) throw httpError(409, "Already running.");
    const p = Number(port) || config.ports[name] || nextFreePort();
    if (p === UI_PORT) throw httpError(400, `Port ${UI_PORT} is used by lbui itself.`);
    for (const [other, d] of devs) {
      if (d.port === p) throw httpError(409, `Port ${p} is in use by "${other}".`);
    }
    config.ports[name] = p;
    saveConfig();
    const entry = { port: p, since: Date.now(), lines: [] };
    pushLine(entry.lines, `$ npx lakebed dev ${name} --port ${p}`);
    const proc = spawn("npx", ["lakebed", "dev", dir, "--port", String(p)], {
      cwd: ROOT, env: process.env, detached: true,
    });
    entry.proc = proc;
    proc.stdout.on("data", (d) => pushLine(entry.lines, d));
    proc.stderr.on("data", (d) => pushLine(entry.lines, d));
    proc.on("close", (code) => {
      pushLine(entry.lines, `— dev server exited (code ${code}) —`);
      if (devs.get(name) === entry) devs.delete(name);
    });
    proc.on("error", (err) => {
      pushLine(entry.lines, `✗ ${err.message}`);
      if (devs.get(name) === entry) devs.delete(name);
    });
    devs.set(name, entry);
    return { ok: true, port: p };
  },

  async "POST /api/dev/stop"(req) {
    const { name } = req.body;
    const dev = devs.get(name);
    if (!dev) return { ok: true };
    try { process.kill(-dev.proc.pid, "SIGTERM"); } catch { try { dev.proc.kill("SIGTERM"); } catch {} }
    devs.delete(name);
    return { ok: true };
  },

  async "POST /api/port"(req) {
    const { name, port } = req.body;
    const p = Number(port);
    if (!Number.isInteger(p) || p < 1024 || p > 65535) throw httpError(400, "Port must be 1024–65535.");
    config.ports[name] = p;
    saveConfig();
    return { ok: true };
  },

  async "POST /api/deploy"(req) {
    const { name } = req.body;
    const dir = projectDir(name);
    if (!fs.existsSync(dir)) throw httpError(404, "No such project.");
    if (jobs.has(name) && !jobs.get(name).done) throw httpError(409, "A task is already running for this project.");
    runJob(name, "deploy", ["deploy", dir], ROOT);
    return { ok: true };
  },

  async "POST /api/domain"(req) {
    const { name, subdomain } = req.body;
    const dir = projectDir(name);
    if (!fs.existsSync(dir)) throw httpError(404, "No such project.");
    const sub = String(subdomain || "").trim().toLowerCase().replace(/\.lakebed\.app$/, "");
    if (!/^[a-z0-9][a-z0-9-]{0,62}$/.test(sub)) throw httpError(400, "Invalid subdomain.");
    if (jobs.has(name) && !jobs.get(name).done) throw httpError(409, "A task is already running for this project.");
    runJob(name, "domain", ["domains", "add", `${sub}.lakebed.app`], dir);
    return { ok: true };
  },

  async "POST /api/rename"(req) {
    const { name, newName } = req.body;
    const err = validateName(newName);
    if (err) throw httpError(400, err);
    const from = projectDir(name);
    const to = projectDir(newName);
    if (!fs.existsSync(from)) throw httpError(404, "No such project.");
    if (fs.existsSync(to)) throw httpError(409, `"${newName}" already exists.`);
    if (devs.has(name)) throw httpError(409, "Stop the dev server before renaming.");
    await fsp.rename(from, to);
    if (config.ports[name]) { config.ports[newName] = config.ports[name]; delete config.ports[name]; saveConfig(); }
    return { ok: true };
  },

  async "POST /api/open"(req) {
    const { name } = req.body;
    const dir = projectDir(name);
    if (!fs.existsSync(dir)) throw httpError(404, "No such project.");
    // Prefer the Cursor CLI; fall back to opening the .app by name.
    const bin = process.env.CURSOR_BIN
      || ["/usr/local/bin/cursor", "/opt/homebrew/bin/cursor"].find((p) => fs.existsSync(p))
      || "cursor";
    spawn(bin, [dir], { detached: true, stdio: "ignore" }).unref();
    return { ok: true };
  },
};

function httpError(status, message) {
  const e = new Error(message);
  e.status = status;
  return e;
}

// ---------------------------------------------------------------------------
// HTTP server
// ---------------------------------------------------------------------------

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${UI_PORT}`);
  const key = `${req.method} ${url.pathname}`;

  if (key === "GET /" || key === "GET /index.html") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    fs.createReadStream(path.join(__dirname, "index.html")).pipe(res);
    return;
  }

  const handler = handlers[key];
  if (!handler) {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "not found" }));
    return;
  }

  try {
    if (req.method === "POST") {
      let body = "";
      for await (const chunk of req) {
        body += chunk;
        if (body.length > 1e6) throw httpError(413, "Body too large.");
      }
      req.body = body ? JSON.parse(body) : {};
    }
    const result = await handler(req, url);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(result));
  } catch (err) {
    res.writeHead(err.status || 500, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(UI_PORT, "127.0.0.1", () => {
  const url = `http://localhost:${UI_PORT}`;
  console.log(`lbui — managing ${ROOT}`);
  console.log(`→ ${url}`);
  refreshAuth();
  setInterval(refreshAuth, 5 * 60 * 1000);
  if (!process.argv.includes("--no-open")) execFile("open", [url], () => {});
});

function shutdown() {
  for (const [, dev] of devs) {
    try { process.kill(-dev.proc.pid, "SIGTERM"); } catch { try { dev.proc.kill("SIGTERM"); } catch {} }
  }
  process.exit(0);
}
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
