const express = require("express");
const bookrouter = express.Router();
const connect = require("../database/db")

bookrouter.route('/book')
.get(async (req,res) =>{
    const db = await connect();
    const books = await db.collection('book').find().toArray();
    res.json(books)
}).
post(async (req,res) =>{  
    const db = await connect();
    await db.collection('book').insertOne(req.body);
    res.json({data: "Book is stored"})
})

bookrouter.route("/book/:id")
.get((req,res)=>{
    res.send(`single book of id : ${req.params.id}`)
}).patch((req,res)=>{
    res.send(`single book of id : ${req.params.id}`)
}).delete((req,res)=>{
    res.send(`single book of id : ${req.params.id}`)
})


module.exports = bookrouter