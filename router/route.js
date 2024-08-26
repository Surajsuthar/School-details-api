const express = require("express")
const {addSchool,getSchool} = require("../controller/school")
const route = express.Router()

route.post("/addSchool",addSchool)
route.post("/listSchool",getSchool)

module.exports = route