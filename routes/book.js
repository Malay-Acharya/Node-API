const express = require("express");
const bookrouter = express.Router();
const connect = require("../database/db")
var ObjectId = require("mongodb").ObjectId

bookrouter.route('/book')
.get(async (req,res) =>{
    const db = await connect();
    const books = await db.collection('book').find().toArray();
    res.json(books)
}).
post(async (req,res) =>{  
    const db = await connect();
    await db.collection('book').insertOne(req.body);
    res.status(201).json({data: "Book is stored"})
})

bookrouter.route("/book/:id")
.get(async (req,res)=>{
    const id = req.params.id;
    const db = await connect();
    const book = await db.collection('book').find({_id : ObjectId(id)}).toArray();
    res.json(book);
}).patch(async (req,res)=>{
    const _id = ObjectId(req.params.id);
    const db = await connect();
    await db.collection('book').updateOne({_id}, {$set: req.body});
    res.json({data: "Book is updated"});
}).delete(async (req,res)=>{
    const _id = ObjectId(req.params.id);
    const db = await connect();
    await db.collection('book').deleteOne({_id})
    res.status(204).json({data: "Book is deleted"});
})


module.exports = bookrouter