const express = require("express");
const bookrouter = require("./book");
const router = express.Router()

router.get('/', (req,res) =>{
    res.send("Hello World")
})

router.use(bookrouter)

router.all("/*", (req,res) =>{
    res.send("Page not found")
})




module.exports = router