// Minimal S3 helpers via Signature V4 (no AWS SDK).
// Large images POST to /assets/upload; the server PutObjects with
// UNSIGNED-PAYLOAD. Tiny assets may still be stored as inline data URLs.

import type { ServerContext } from "lakebed/server";
import { MAX_INLINE_SRC_BYTES } from "../shared/types";

export { MAX_INLINE_SRC_BYTES };
export const CLOUD_FRONT_URL = "https://d2p6q917mww4yf.cloudfront.net";
const KEY_PREFIX = "image-editor";

const encoder = new TextEncoder();

function requireEnv(ctx: ServerContext, key: string): string {
  const value = ctx.env[key];
  if (typeof value !== "string" || !value) {
    throw new Error(`Missing server env: ${key}`);
  }
  return value;
}

function toHex(buffer: ArrayBuffer): string {
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function sha256Hex(data: Uint8Array | string): Promise<string> {
  const bytes = typeof data === "string" ? encoder.encode(data) : data;
  return toHex(await crypto.subtle.digest("SHA-256", bytes));
}

async function hmac(key: ArrayBuffer | Uint8Array, data: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, [
    "sign"
  ]);
  return crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(data));
}

/** AWS SigV4 URI encode (path segment / query). */
function uriEncode(value: string, encodeSlash = true): string {
  const encoded = encodeURIComponent(value).replace(/[!'()*]/g, (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase()}`);
  return encodeSlash ? encoded : encoded.replace(/%2F/gi, "/");
}

/** Keep S3 keys URL-safe — guest ids like "guest:local" break unsigned paths. */
function safeSegment(value: string): string {
  const cleaned = String(value)
    .replace(/[^a-zA-Z0-9._-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 80);
  return cleaned || "x";
}

function contentTypeExt(contentType: string): string {
  const type = contentType.toLowerCase();
  if (type === "image/jpeg" || type === "image/jpg") return "jpg";
  if (type === "image/webp") return "webp";
  if (type === "image/gif") return "gif";
  return "png";
}

function decodeDataUrl(src: string): { contentType: string; body: Uint8Array; ext: string } {
  const match = /^data:(image\/[a-z0-9.+-]+);base64,([\s\S]+)$/i.exec(src);
  if (!match) {
    throw new Error("Image must be a data URL");
  }
  const contentType = match[1].toLowerCase();
  const binary = atob(match[2].replace(/\s/g, ""));
  const body = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    body[i] = binary.charCodeAt(i);
  }
  return { contentType, body, ext: contentTypeExt(contentType) };
}

function amzDate(now: Date): { amzDate: string; dateStamp: string } {
  const iso = now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  return { amzDate: iso, dateStamp: iso.slice(0, 8) };
}

function objectKey(userId: string, projectId: string, ext: string): string {
  const id =
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  return `${KEY_PREFIX}/${safeSegment(userId)}/${safeSegment(projectId)}/${id}.${ext}`;
}

function canonicalUri(key: string): string {
  return `/${key.split("/").map((part) => uriEncode(part)).join("/")}`;
}

function awsConfig(ctx: ServerContext) {
  const accessKey = requireEnv(ctx, "AWS_ACCESS_KEY_ID");
  const secretKey = requireEnv(ctx, "AWS_SECRET_ACCESS_KEY");
  const bucket = requireEnv(ctx, "AWS_BUCKET");
  const region = typeof ctx.env.AWS_REGION === "string" && ctx.env.AWS_REGION ? ctx.env.AWS_REGION : "us-east-2";
  return { accessKey, secretKey, bucket, region };
}

export function hasAwsEnv(ctx: ServerContext): boolean {
  return (
    typeof ctx.env.AWS_ACCESS_KEY_ID === "string" &&
    !!ctx.env.AWS_ACCESS_KEY_ID &&
    typeof ctx.env.AWS_SECRET_ACCESS_KEY === "string" &&
    !!ctx.env.AWS_SECRET_ACCESS_KEY &&
    typeof ctx.env.AWS_BUCKET === "string" &&
    !!ctx.env.AWS_BUCKET
  );
}

async function signingKey(secretKey: string, dateStamp: string, region: string): Promise<ArrayBuffer> {
  const kDate = await hmac(encoder.encode(`AWS4${secretKey}`), dateStamp);
  const kRegion = await hmac(kDate, region);
  const kService = await hmac(kRegion, "s3");
  return hmac(kService, "aws4_request");
}

/** Browser uploads directly to S3; server only signs (no image bytes on Lakebed). */
export async function createPresignedPut(
  ctx: ServerContext,
  projectId: string,
  contentType: string
): Promise<{ uploadUrl: string; publicUrl: string; key: string }> {
  const type = String(contentType || "").toLowerCase();
  if (!type.startsWith("image/")) throw new Error("Content type must be an image");

  const { accessKey, secretKey, bucket, region } = awsConfig(ctx);
  const key = objectKey(ctx.auth.userId, projectId, contentTypeExt(type));
  const host = `${bucket}.s3.${region}.amazonaws.com`;
  const uri = canonicalUri(key);
  const { amzDate: amz, dateStamp } = amzDate(new Date());
  const expires = 900;
  const credential = `${accessKey}/${dateStamp}/${region}/s3/aws4_request`;

  const query: Record<string, string> = {
    "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
    "X-Amz-Credential": credential,
    "X-Amz-Date": amz,
    "X-Amz-Expires": String(expires),
    "X-Amz-SignedHeaders": "content-type;host",
    "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD"
  };
  const canonicalQuery = Object.keys(query)
    .sort()
    .map((k) => `${uriEncode(k)}=${uriEncode(query[k])}`)
    .join("&");

  const canonicalHeaders = `content-type:${type}\nhost:${host}\n`;
  const canonicalRequest = [
    "PUT",
    uri,
    canonicalQuery,
    canonicalHeaders,
    "content-type;host",
    "UNSIGNED-PAYLOAD"
  ].join("\n");

  const credentialScope = `${dateStamp}/${region}/s3/aws4_request`;
  const stringToSign = ["AWS4-HMAC-SHA256", amz, credentialScope, await sha256Hex(canonicalRequest)].join(
    "\n"
  );
  const signature = toHex(await hmac(await signingKey(secretKey, dateStamp, region), stringToSign));
  const uploadUrl = `https://${host}${uri}?${canonicalQuery}&X-Amz-Signature=${signature}`;
  return { uploadUrl, publicUrl: `${CLOUD_FRONT_URL}/${key}`, key };
}

/** Server-side PutObject with UNSIGNED-PAYLOAD (no body hash — safe for large files). */
export async function putObjectBytes(
  ctx: ServerContext,
  projectId: string,
  contentType: string,
  body: Uint8Array
): Promise<string> {
  const type = String(contentType || "").toLowerCase();
  if (!type.startsWith("image/")) throw new Error("Content type must be an image");
  if (body.byteLength < 1) throw new Error("Empty image body");
  if (body.byteLength > 12_000_000) throw new Error("Image is too large");

  const { accessKey, secretKey, bucket, region } = awsConfig(ctx);
  const key = objectKey(ctx.auth.userId, projectId, contentTypeExt(type));
  const host = `${bucket}.s3.${region}.amazonaws.com`;
  const uri = canonicalUri(key);
  const url = `https://${host}${uri}`;
  const { amzDate: amz, dateStamp } = amzDate(new Date());
  const payloadHash = "UNSIGNED-PAYLOAD";

  const canonicalHeaders =
    `content-type:${type}\n` +
    `host:${host}\n` +
    `x-amz-content-sha256:${payloadHash}\n` +
    `x-amz-date:${amz}\n`;
  const signedHeaders = "content-type;host;x-amz-content-sha256;x-amz-date";
  const canonicalRequest = ["PUT", uri, "", canonicalHeaders, signedHeaders, payloadHash].join("\n");

  const credentialScope = `${dateStamp}/${region}/s3/aws4_request`;
  const stringToSign = ["AWS4-HMAC-SHA256", amz, credentialScope, await sha256Hex(canonicalRequest)].join(
    "\n"
  );
  const signature = toHex(await hmac(await signingKey(secretKey, dateStamp, region), stringToSign));
  const authorization =
    `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, ` +
    `SignedHeaders=${signedHeaders}, Signature=${signature}`;

  ctx.log.info("Uploading image to S3", { key, bytes: body.byteLength, contentType: type });

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": type,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amz,
      Authorization: authorization
    },
    body
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    ctx.log.error("S3 upload failed", { status: response.status, detail: detail.slice(0, 500), key });
    throw new Error(`S3 upload failed (${response.status}): ${detail.slice(0, 200)}`);
  }

  const publicUrl = `${CLOUD_FRONT_URL}/${key}`;
  ctx.log.info("S3 upload ok", { url: publicUrl });
  return publicUrl;
}

/** Server-side upload for small data URLs only (blank layers / tiny images). */
export async function uploadImageDataUrl(
  ctx: ServerContext,
  projectId: string,
  src: string
): Promise<string> {
  const { contentType, body } = decodeDataUrl(src);
  if (body.byteLength > MAX_INLINE_SRC_BYTES) {
    throw new Error("Image is too large for server upload; use /assets/upload");
  }
  return putObjectBytes(ctx, projectId, contentType, body);
}

