import express from 'express'
import { getAll,getById,create,updateById,deleteById } from '../services/services.js'

const apiRouter = express.Router()
apiRouter.get('/',getAll)
apiRouter.get("/:id",getById)
apiRouter.post("/",create)
apiRouter.put("/:id",updateById)
apiRouter.delete("/:id",deleteById)

export default apiRouter