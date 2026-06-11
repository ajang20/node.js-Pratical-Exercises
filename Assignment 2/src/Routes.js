const health = require("./Health.js");
const env = require("./getEnv.js");
const kill = require("./kill.js");

const routes = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const { url, method } = req;

  if (url === "/health" && method === "GET") {
    return health(req, res);
  } else if (url === "/env" && method === "GET") {
    return env(req, res);
  } else if (url === "/kill" && method === "GET") {
    return kill(req, res);
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Not found!" }));
};

module.exports = routes;
