import {createServer,IncomingMessage,ServerResponse} from "node:http"
import { registerUser,loginUser,logoutUser } from "./services/postRequests"

const PORT = 3000

const server = createServer((req:IncomingMessage,res:ServerResponse) => {
const {url,method} = req
const segments :string[] | undefined = url?.split("/")
if(!segments) return
console.log(segments)

res.setHeader("Content-Type","application/json")

switch(method){
  case "POST":
    if ( segments[1] ==='users'){
       registerUser(req,res)
    }
     if ( segments[1] ==='login'){
       loginUser(req,res)
    }
    if ( segments[1] ==='logout'){
       logoutUser(req,res)
    }

}
})

server.listen(PORT,() => {
  console.log(`Listening on ${PORT}`)
})