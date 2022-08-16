const express = require("express");
const EventEmitter = require("events");

const myEvent = new EventEmitter();

myEvent.on("test-event", () =>{
    console.log('this event is listening');
})

const app = express();
const PORT = 3000;

app.get('/', (req,res) =>{
    myEvent.emit("test-event")
    res.send("Hello World")
})


app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`);
})