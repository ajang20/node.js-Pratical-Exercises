import express from "express"
import { getAll,getUsers } from "./services.js"

const apiRouter = express.Router()
apiRouter.get("/",getAll)
apiRouter.get("/users",getUsers)

export default apiRouter
