import { createServer } from "node:http";
import { handleGet, handlePost } from "./src/services.js";
const PORT = 3000;

const server = createServer(async (req, res) => {
  const { url, method } = req;
  res.setHeader("Content-Type", "text/plain");

  if (method === "GET" && url === "/") {
    await handleGet(req, res);
  } else if (method === "POST" && url === "/") {
    await handlePost(req, res);
  } else {
    res.writeHead(404);
    res.end("content Page not found");
  }
});

server.listen(PORT, () => {
  console.log(`Listening on Port : ${PORT}`);
});
