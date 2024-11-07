import { serve } from "https://deno.land/std@0.150.0/http/server.ts";

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const filePath = url.pathname === "/" ? "/index.html" : url.pathname;
  try {
    const file = await Deno.readFile(`./dist${filePath}`);
    return new Response(file, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch (error) {
    return new Response("404 Not Found", { status: 404 });
  }
};

serve(handler);