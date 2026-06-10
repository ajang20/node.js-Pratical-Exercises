const http = require("node:http")

const serverB = http.createServer((req, res) => {
  //destructure the url

  const { url, method } = req;
  //setHeaders
  res.setHeader("Content-Type", "application/json");

  //check for the method & path
  if ((url === "/ping" && method === "GET")) {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "Alive", time: Date.now() }));
  }
});

serverB.listen(4000,() => {
    console.log("ServerB is lisetning:")
})