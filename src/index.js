const express = require("express")
const route = require("./router/route")
const app = express()
const PORT = process.env.PORT || 5002

app.use(express.json())
app.use("/api/v1",route)
app.use("/",(req,res) =>{
    res.send("It's on")
})

app.listen(PORT,()=>{
    console.log("server is on!")
})