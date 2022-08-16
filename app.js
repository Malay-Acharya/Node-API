const http = require("http");
const fs= require("fs")

const PORT = 3000;

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.readFile("pages/home.html", "utf8", (err, data) =>{
            if (err) throw err;
            res.write(data)
            res.end()
        })
    }
    else if(req.url === "/create-file"){
        res.writeHead(200, {"Content-Type":"text/html"});
        const data = "<h1>Test data updated</h1>"
        fs.writeFile("temp/test.html", data, (err, data) =>{
            if (err) throw err;
            res.write("File created")
            res.end()
        })
    }
    else if(req.url === "/append-file"){
        res.writeHead(200, {"Content-Type":"text/html"});
        const data = "<h1>Test data updated</h1>"
        fs.appendFile("temp/test.html", data, (err, data) =>{
            if (err) throw err;
            res.write("File Appended")
            res.end()
        })
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.readFile("pages/about.html", "utf8", (err, data) =>{
            if (err) throw err;
            res.write(data)
            res.end()
        })
    }else{
        res.writeHead(404, {"Content-Type":"text/html"});
        fs.readFile("pages/404.html", "utf8", (err, data) =>{
            if (err) throw err;
            res.write(data)
            res.end()
        })
    }
    
});

console.log(`server running on PORT ${PORT}`);
server.listen(PORT);




