const express = require("express")
const route = require("./router/route")
const app = express()
const PORT = process.env.PORT || 5002

app.use(express.json())
app.use("/api/v1",route)

app.listen(PORT,()=>{
    console.log("server is on!")
})