import ServerResponse = require("node:http");
import nodeHttp = require("node:http");

const http = require("node:http");
const Heavy = require("./Heavy.ts");
const Ping = require("./Ping.ts");

const Handler = (req: nodeHttp.IncomingMessage, res:nodeHttp.ServerResponse) => {
  //getting url & method
  const { url, method } = req;

  //setting Header
  res.setHeader("Content-Type", "application/json");

  if (url === "/heavy" && method === "GET") {
    Heavy(req, res);
  } else if (url === "/ping" && method === "GET") {
    Ping(req, res);
  }
};

const server = http.createServer(Handler);
const serverB = http.createServer(Handler);

server.listen(3000, () => {
  console.log("ServerA is connected Successfully:");
});

serverB.listen(4000, () => {
  console.log("ServerB is lisetning:");
});
