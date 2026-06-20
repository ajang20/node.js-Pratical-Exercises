import fs from "node:fs/promises"
import path from "node:path";
import type { Register,LoginResponse } from "./Types";

export const ReadData = async (urlPath: string | undefined) => {
    try{
        if( urlPath === "users"){
      const readFilePath = path.join(__dirname,"../../data/users.json")
      const raw = await fs.readFile(readFilePath,"utf-8")
      return JSON.parse(raw.toString())
        }

        else if (urlPath === "login"){
      const readFilePath = path.join(__dirname,"../../data/sessions.json")
      const raw = await fs.readFile(readFilePath,"utf-8")
      return JSON.parse(raw.toString())
        }
    }
    catch(err){
        if (err instanceof Error){
            console.error("Error occured",err.message)
        }
        else{
           console.error("Error occured",err)
        }
    }
}

//register 
export const WriteData = async(data:Register | LoginResponse ,urlPath:string | undefined) => {

if(urlPath === "users"){
const existing = await ReadData("users")
existing.push(data)
const writePath = path.join(__dirname,"../../data/users.json")
await fs.writeFile(writePath,JSON.stringify(existing,null,2))
}

else if (urlPath === "login"){
const existing = await ReadData("login")
existing.push(data)
const writePath = path.join(__dirname,"../../data/sessions.json")
await fs.writeFile(writePath,JSON.stringify(existing,null,2))
}
return []
}


