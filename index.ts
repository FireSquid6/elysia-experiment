import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

new Elysia()
  .use(
    staticPlugin({
      assets: "static",
      prefix: "/",
    }),
  )
  .listen(3000);

console.log("Server running at http://localhost:8080");
