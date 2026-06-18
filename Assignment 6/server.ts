import type {IncomingMessage,ServerResponse} from "node:http"
const http = require("node:http");


function recursive() {
  setImmediate(recursive);
}
recursive();

http
  .createServer((req:IncomingMessage, res:ServerResponse) => {
    res.writeHead(200,{"Content-Type":"Text/plain"})
    res.end("hello");
  })
  .listen(3000,()=> {console.log("port connected successfully")});
