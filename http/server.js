const http=require("http")

const server=http.createServer((req,res)=>{

res.writeHead(200,{'content-type':'text/plain'});
res.end("this is our first server is calling")

})
const port=3000;
server.listen(port,()=>{

    console.log("server is running");
    
})



