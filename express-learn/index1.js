const express =require("express");
const app = express();
let PORT =4500;

app.use(express.json())

app.get('/',(req,res)=>{
res.send("check \n quare \n");
})

if(isNaN(num)){
    res.send(`${num},is num`)
}
app.get('/sqr',(req,res)=>{
    let num=parseInt(req.query.num)
    let sqr=num*num

    res.send(sqr)
})


app.listen(PORT,()=>{
    console.log("server run started");
    
})