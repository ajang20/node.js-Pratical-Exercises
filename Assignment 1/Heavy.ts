import type {IncomingMessage, ServerResponse} from "node:http"

const { Worker } = require("node:worker_threads");
const http = require("node:http");

const Heavy = (req: IncomingMessage, res: ServerResponse) => {
  const worker = new Worker("./worker.ts");

  worker.on("message", (data:number) => {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        sucess: true,
        time: data,
        message: "Heavy task completed",
      }),
    );
  });

  worker.on("error", (err:Error) => {
    res.writeHead(500);
    res.end(JSON.stringify({ status: "Worker Error", message: err.message }));
  });

  worker.on("exit", (code:number) => {
    if (code != 0) console.log(`Worker exited with code ${code}`);
  });
};

module.exports = Heavy;
