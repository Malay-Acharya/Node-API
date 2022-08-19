const express = require("express");
const routes = require("./routes/index")

const app = express();

app.use(routes);

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`);
})