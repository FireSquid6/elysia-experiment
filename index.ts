import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

new Elysia()
  .use(html())
  .get("*", ({ params }) => {
    const route: string = params["*"];
    const split = route.split(".");
    if (route.split.length > 1 && split[split.length - 1] !== "html") {
      const filepath = "./build/" + route;
      console.log(filepath);
      return Bun.file(filepath);
    }

    return `<h1>Hello: ${route}</h1>`;
  })
  .listen(3000);

console.log("Server running at http://localhost:3000");
