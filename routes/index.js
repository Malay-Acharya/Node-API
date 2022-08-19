const express = require("express");
const bookrouter = require("./book");
const router = express.Router()
const path = require("path")


router.get('/', (req,res) =>{
    res.render("home", {name: "malay"})
})

router.use(bookrouter)

router.all("/*", (req,res) =>{
    res.sendFile(path.join(__dirname, "../pages/404.html"))
})




module.exports = router