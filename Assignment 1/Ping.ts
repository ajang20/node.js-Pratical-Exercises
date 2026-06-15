import type {IncomingMessage,ServerResponse} from "node:http"
const Ping = (req:IncomingMessage,res:ServerResponse)  => {
    
    res.writeHead(200);
    res.end(JSON.stringify({ status: "Alive", time: Date.now() }));
  
}

module.exports = Ping

