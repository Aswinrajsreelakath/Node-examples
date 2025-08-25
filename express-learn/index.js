const express=require('express')

const app=express();


app.get('/',(req,res)=>{
res.send("hi Aswin RAj Sreelakath")
})

app.get('/square',(req,res)=>{
let num=parseInt(req.query.num)
let square=num*num;

res.send(square)
})


app.get ('/sum',(req,res)=>{
    let num1 = parseInt(req.query.num1);
})

app.get('/concate',(req,res)=>{
let name1=req.query.name1;
let name2 = req.query.name2;
let name=(name1) +name2
res.send('concate'+name)

})

app.listen(3000)