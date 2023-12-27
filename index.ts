import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';


new Elysia()
  .use(staticPlugin(
    {
      assets: "static",
      prefix: "/",
    }
  ))
  .listen(8080);

console.log("Server running at http://localhost:8080");
