const express = require("express");
const bookrouter = express.Router()

bookrouter.route('/book').
post((req,res) =>{
    res.json({data: "Book is stored"})
}).get((req,res) =>{
    res.send("All books")
})

bookrouter.get("/book/:id", (req,res)=>{
    res.send(`single book of id : ${req.params.id}`)
})


module.exports = bookrouter