const http = require("node:http");
const routes = require('./src/Routes.js')

const server = http.createServer(routes);

server.listen(3000,() => {
    console.log("connection successful")
})
