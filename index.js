
const http=require('http')

//create server
const server=http.createServer((req,res)=>{

    //get the url of the reqst
    const url=req.url;
    res.setHeader('Content-Type','text/html')
  
    //routing
    if(url==='/'){
        res.write('<h1>home</h1>');
        res.write('<p> welcome to our world</p>');
    }
    else if(url==='/about')
    {
        res.write('<h1>About</h1>')
        res.write('<p>welcome to about page</p>')
    }
    else if(url==='/contact')
    {
res.write('<h1>Contact us</h1> ')
res.write("welcome to contact us page")
    }
    else{
        res.write("<h1>404 is not found</h1>")

    }
    res.end();
})

server.listen(4000,()=>{
    console.log("server is running");
    
})