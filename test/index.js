const express= require("express")
const port=4000;
const app=express()


app.get('/',(req,res)=>{
    res.send("server started")
})

app.get('/greet',(req,res)=>{
    res.send("hello Wolrd")
})
app.get('/greetName',(req,res)=>{
    let abc=req.query.name
    res.send(`hello ${abc} ,welcome to my web`)
})

app.get('/square',(req,res)=>{
    let num=parseInt(req.query.num)
    let sqr=num*num
    res.send(`square of ${num} is ${sqr}`)
})
app.get('/sum',(req,res)=>{
    let num1=parseInt(req.query.num1)
    let num2=parseInt(req.query.num2)
   let sum =num1 + num2
    res.send(`sum of ${num1} and ${num2} is ${sum}`)
})

app.get('/welcome',(req,res)=>{
    let a="hello"
    let b= "To My web wolrd"
    let space=" "
   let fname=req.query.fname;
    res.send(a+space+fname+space+b)
})
app.listen(port,(err)=>{
    if(err){
        console.log("error found");
        
    }
    else{
        console.log("srever started successfully",port);

        
    }
})