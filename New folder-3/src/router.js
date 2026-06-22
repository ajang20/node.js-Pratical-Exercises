import express from "express"
import { getTodo,postTodo } from "./services.js"

const apiRouter = express.Router()
apiRouter.get("/",getTodo)
apiRouter.post('/',postTodo)

export default apiRouter
