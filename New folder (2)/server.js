import express from "express"
import apiRouter from "./src/routes.js"
import { requestLogger } from "./src/services.js"


const PORT = 3000
const app = express()

app.use(express.json())
app.use(requestLogger)
app.use("/",apiRouter)

app.listen(PORT,() => {
    console.log(`Listening on Port : ${PORT}`)
})