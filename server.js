const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res)=>{
  if(req.url === "/" || req.url === "/index.html"){
    let filePath = path.join(__dirname, "index.html")
    fs.readFile(filePath, "utf8", (err, data)=>{
    res.writeHead(200, {"Content_Type":"text/html"})
    res.end(data)
  })
  }
  if(req.url === "/about" || req.url === "/about.html"){
    let filePath = path.join(__dirname, "about.html")
    fs.readFile(filePath, "utf8", (err, data)=>{
    res.writeHead(200, {"Content_Type":"text/html"})
    res.end(data)
  })
  }
  if(req.url === "/contact" || req.url === "/contact.html"){
    let filePath = path.join(__dirname, "contact.html")
    fs.readFile(filePath, "utf8", (err, data)=>{
    res.writeHead(200, {"Content_Type":"text/html"})
    res.end(data)
  })
  }
})

const port = 4000

server.listen(port, ()=>{
  console.log(`server running on ${port}`);
})