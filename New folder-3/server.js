import express from "express"
import apiRouter from "./src/router.js"


const app = express()
const PORT = 3000

app.use(express.json())
app.use("/todo",apiRouter)

app.listen(PORT,() => {
    console.log(`Listening on port : ${PORT}`)
})