const express = require("express");
const routes = require("./routes/index")
const bodyParser = require("body-parser");
const connect = require("./database/db")

const app = express();

app.use(bodyParser.json())
app.use(routes);
app.set('view engine', 'pug')

const PORT = 3000;

connect.then(()=>{app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`);
})});