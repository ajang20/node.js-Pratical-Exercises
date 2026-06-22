import { ReadData,WriteData } from "./helpers.js"
import crypto from "node:crypto"

export const getTodo = async(req,res) => {
const data = await ReadData()
const {status} =req.query 

if(status){
    const items = data.filter( item => item.status === status)
    console.log(items)
    return res.status(200).json({sucess:true,data:items})
}
res.status(200).json(data)
}

export const postTodo = async(req,res) => {
const data = await ReadData()

const body = req.body
if(!body.task || !body.status){
return res.status(409).json({success:false,message:"Enter both task and status"})
}
const newItem = {
    id:crypto.randomUUID(),
    ...body
}

data.push(newItem)
await WriteData(data)

res.status(201).json({success:true,data:newItem})
}