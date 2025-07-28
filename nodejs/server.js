
const http=require('http');

let server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/about') {
        res.end("this is my about us page")
    }
    res.end("hello world")
})

server.listen(4000,()=>{
    console.log("server running on port 4000")
})