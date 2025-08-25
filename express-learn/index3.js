const express = require('express');;
const app= express();
const port =3500;
app.use(express.json())

let names=['sona','sony']

app.get("/getAllNames",(req,res)=>{
    res.json(names);
})

app.post("/insertName",(req,res)=>{
let name=req.query.name;
if(!name){
    return res.send("Enter valid name")
}
let index=name.indexOf(name);
if(index== -1){
       res.send("name is already exist");

}
else{

     names.push(name);
     res.send("insert successs" + name);

}
})
app.delete("/deleteName",(req,res)=>{
let name=req.query.name;
let index=name.indexOf(name);
if(index==-1){
   res.send("name not exit")

} else{
    name.splice(index,1)
    res.send(name,'delete succesfully')
}
})

app.put("/updateName",(req,res)=>{
let oldName=req.query.name;
let newNmae=req.query.newame
let index= names.indexOf(oldName)
if(index==-1){
    res.send("User not existing")
}else{
    names[index]=newNmae;
    res.send("update succesfully")
}
})

app.listen(3500)