import express from "express";
import apiRouter from "./src/routes/routes.js";

const app  = express()

app.use(express.json())
app.use('/users',apiRouter)

app.listen(3000,() => {
    console.log("Port 3000 connected successfully")
})
