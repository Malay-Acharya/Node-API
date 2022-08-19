const express = require("express");
const bookrouter = require("./book");
const router = express.Router()
const path = require("path")


router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, "../pages/home.html"))
})

router.use(bookrouter)

router.all("/*", (req,res) =>{
    res.sendFile(path.join(__dirname, "../pages/404.html"))
})




module.exports = router