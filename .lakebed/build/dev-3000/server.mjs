// ../../.npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/server.js
function capsule(definition) {
  return definition;
}
function query(handler) {
  return handler;
}
function mutation(handler) {
  return handler;
}
function endpoint(route, handler) {
  return {
    handler,
    kind: "endpoint",
    method: String(route?.method ?? "").toUpperCase(),
    path: String(route?.path ?? "")
  };
}
function response(body, { headers = {}, status = 200 } = {}) {
  return {
    body,
    headers,
    kind: "response",
    status
  };
}
function text(value, options = {}) {
  return response(String(value ?? ""), {
    ...options,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      ...options.headers ?? {}
    }
  });
}
function field(kind) {
  return {
    kind,
    defaultValue: void 0,
    default(value) {
      return {
        ...this,
        defaultValue: value
      };
    }
  };
}
function table(fields) {
  return {
    kind: "table",
    fields
  };
}
function string() {
  return field("string");
}
function boolean() {
  return field("boolean");
}

// lakebed-source:shared/todo.ts
function cleanTodoText(value) {
  return value.trim().slice(0, 160);
}

// lakebed-source:server/index.ts
var server_default = capsule({
  name: "image-editor",
  schema: {
    todos: table({
      text: string(),
      done: boolean().default(false),
      ownerId: string()
    })
  },
  queries: {
    todos: query(
      (ctx) => ctx.db.todos.where("ownerId", ctx.auth.userId).orderBy("createdAt", "desc").all()
    )
  },
  mutations: {
    addTodo: mutation((ctx, text2) => {
      const cleanText = cleanTodoText(text2);
      if (!cleanText) {
        return;
      }
      ctx.db.todos.insert({ text: cleanText, ownerId: ctx.auth.userId });
    })
  },
  endpoints: {
    status: endpoint({ method: "GET", path: "/api/status" }, () => text("ok"))
  }
});
export {
  server_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLm5wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL3NlcnZlci50cyIsICJsYWtlYmVkLXNvdXJjZTpzaGFyZWQvdG9kby50cyIsICJsYWtlYmVkLXNvdXJjZTpzZXJ2ZXIvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImV4cG9ydCB0eXBlIFRvZG8gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgZG9uZTogYm9vbGVhbjtcbiAgb3duZXJJZDogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5Ub2RvVGV4dCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlLnRyaW0oKS5zbGljZSgwLCAxNjApO1xufVxuIiwgImltcG9ydCB7IGJvb2xlYW4sIGNhcHN1bGUsIGVuZHBvaW50LCBtdXRhdGlvbiwgcXVlcnksIHN0cmluZywgdGFibGUsIHRleHQgfSBmcm9tIFwibGFrZWJlZC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGNsZWFuVG9kb1RleHQgfSBmcm9tIFwiLi4vc2hhcmVkL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2Fwc3VsZSh7XG4gIG5hbWU6IFwiaW1hZ2UtZWRpdG9yXCIsXG5cbiAgc2NoZW1hOiB7XG4gICAgdG9kb3M6IHRhYmxlKHtcbiAgICAgIHRleHQ6IHN0cmluZygpLFxuICAgICAgZG9uZTogYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICAgICAgb3duZXJJZDogc3RyaW5nKClcbiAgICB9KVxuICB9LFxuXG4gIHF1ZXJpZXM6IHtcbiAgICB0b2RvczogcXVlcnkoKGN0eCkgPT5cbiAgICAgIGN0eC5kYi50b2Rvc1xuICAgICAgICAud2hlcmUoXCJvd25lcklkXCIsIGN0eC5hdXRoLnVzZXJJZClcbiAgICAgICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXG4gICAgICAgIC5hbGwoKVxuICAgIClcbiAgfSxcblxuICBtdXRhdGlvbnM6IHtcbiAgICBhZGRUb2RvOiBtdXRhdGlvbigoY3R4LCB0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNsZWFuVGV4dCA9IGNsZWFuVG9kb1RleHQodGV4dCk7XG4gICAgICBpZiAoIWNsZWFuVGV4dCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN0eC5kYi50b2Rvcy5pbnNlcnQoeyB0ZXh0OiBjbGVhblRleHQsIG93bmVySWQ6IGN0eC5hdXRoLnVzZXJJZCB9KTtcbiAgICB9KVxuICB9LFxuXG4gIGVuZHBvaW50czoge1xuICAgIHN0YXR1czogZW5kcG9pbnQoeyBtZXRob2Q6IFwiR0VUXCIsIHBhdGg6IFwiL2FwaS9zdGF0dXNcIiB9LCAoKSA9PiB0ZXh0KFwib2tcIikpXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQTRGTSxTQUFVLFFBQVcsWUFBYTtBQUN0QyxTQUFPO0FBQ1Q7QUFFTSxTQUFVLE1BQWUsU0FBd0M7QUFDckUsU0FBTztBQUNUO0FBRU0sU0FBVSxTQUNkLFNBQXdEO0FBRXhELFNBQU87QUFDVDtBQUVNLFNBQVUsU0FDZCxPQUNBLFNBQWlGO0FBRWpGLFNBQU87SUFDTDtJQUNBLE1BQU07SUFDTixRQUFRLE9BQU8sT0FBTyxVQUFVLEVBQUUsRUFBRSxZQUFXO0lBQy9DLE1BQU0sT0FBTyxPQUFPLFFBQVEsRUFBRTs7QUFFbEM7QUFFQSxTQUFTLFNBQVMsTUFBYyxFQUFFLFVBQVUsQ0FBQSxHQUFJLFNBQVMsSUFBRyxJQUE4QixDQUFBLEdBQUU7QUFDMUYsU0FBTztJQUNMO0lBQ0E7SUFDQSxNQUFNO0lBQ047O0FBRUo7QUFZTSxTQUFVLEtBQUssT0FBZ0IsVUFBbUMsQ0FBQSxHQUFFO0FBQ3hFLFNBQU8sU0FBUyxPQUFPLFNBQVMsRUFBRSxHQUFHO0lBQ25DLEdBQUc7SUFDSCxTQUFTO01BQ1AsZ0JBQWdCO01BQ2hCLEdBQUksUUFBUSxXQUFXLENBQUE7O0dBRTFCO0FBQ0g7QUFpQkEsU0FBUyxNQUFTLE1BQVk7QUFDNUIsU0FBTztJQUNMO0lBQ0EsY0FBYztJQUNkLFFBQVEsT0FBUTtBQUNkLGFBQU87UUFDTCxHQUFHO1FBQ0gsY0FBYzs7SUFFbEI7O0FBRUo7QUFFTSxTQUFVLE1BQU0sUUFBa0M7QUFDdEQsU0FBTztJQUNMLE1BQU07SUFDTjs7QUFFSjtBQUVNLFNBQVUsU0FBTTtBQUNwQixTQUFPLE1BQU0sUUFBUTtBQUN2QjtBQUVNLFNBQVUsVUFBTztBQUNyQixTQUFPLE1BQU0sU0FBUztBQUN4Qjs7O0FDbkxPLFNBQVMsY0FBYyxPQUF1QjtBQUNuRCxTQUFPLE1BQU0sS0FBSyxFQUFFLE1BQU0sR0FBRyxHQUFHO0FBQ2xDOzs7QUNSQSxJQUFPLGlCQUFRLFFBQVE7QUFBQSxFQUNyQixNQUFNO0FBQUEsRUFFTixRQUFRO0FBQUEsSUFDTixPQUFPLE1BQU07QUFBQSxNQUNYLE1BQU0sT0FBTztBQUFBLE1BQ2IsTUFBTSxRQUFRLEVBQUUsUUFBUSxLQUFLO0FBQUEsTUFDN0IsU0FBUyxPQUFPO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUFNLENBQUMsUUFDWixJQUFJLEdBQUcsTUFDSixNQUFNLFdBQVcsSUFBSSxLQUFLLE1BQU0sRUFDaEMsUUFBUSxhQUFhLE1BQU0sRUFDM0IsSUFBSTtBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFFQSxXQUFXO0FBQUEsSUFDVCxTQUFTLFNBQVMsQ0FBQyxLQUFLQSxVQUFpQjtBQUN2QyxZQUFNLFlBQVksY0FBY0EsS0FBSTtBQUNwQyxVQUFJLENBQUMsV0FBVztBQUNkO0FBQUEsTUFDRjtBQUVBLFVBQUksR0FBRyxNQUFNLE9BQU8sRUFBRSxNQUFNLFdBQVcsU0FBUyxJQUFJLEtBQUssT0FBTyxDQUFDO0FBQUEsSUFDbkUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLFdBQVc7QUFBQSxJQUNULFFBQVEsU0FBUyxFQUFFLFFBQVEsT0FBTyxNQUFNLGNBQWMsR0FBRyxNQUFNLEtBQUssSUFBSSxDQUFDO0FBQUEsRUFDM0U7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJ0ZXh0Il0KfQo=
