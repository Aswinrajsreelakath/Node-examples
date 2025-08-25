const express =require('express')
const port = 4000;
const app=express()
app.use(express.json());

let users = [
  { name: "maya", age:26,},
  { name: "seetha",age:27},
  { name: "anu", age:28},
];

app.get('/getAllUsers',(req,res)=>{
    res.send(JSON.stringify(users))
})
app.post('/insertUser',(req,res)=>{

    let name=req.qury.name
    let age= parseInt(req.query.age)

    if(!name){res.send("invalid input, Please type valid input")}
else if(!age){res.send("invalid input, Please type valid input")}

let exist=users.find(str => str.name == name)
if(exist){res.send("the user is already exist")}
else{
    users.push({name,age})
res.send(`insert successfully ${name} \n updated users ${JSON.stringify(users)}`)
}

})
app.delete('/deleteUser',(req,res)=>{
    let name= req.query.name

if(!name)
    {
      res.send("invalid input, Please type valid input");
   return
    }
let index=users.findIndex(str => str.name==name)
if(index==-1){
  res.send(" user not found, enter valid name");
    
}
else{
    users.splice(index,1)
    res.send(`${name} user deleted successfuly`)
}
})

app.delete('/deleteArr',(req,res)=>{
    let arr= req.body.arr

    for(let name of arr){
       
if (!name) {
  res.send("invalid input, Please type valid input");
  return;
}
let index = users.findIndex((str) => str.name == name);
if (index == -1) {
  res.write(" user not found, enter valid name");
} else {
  users.splice(index, 1);
  res.write(`${name} user deleted successfuly`);
}
    }
    res.end()
}
)


app.put('/updateUser',(req,res)=>{
    let name=req.query.name
    let newName=req.query.newName
    let index=users.findIndex(str => str.name==name)

    if(!name){
        res.send("invalid input")
    }
    else if(!newName){
        res.send('invalid input')
    }
   
    else if(index==-1){
        res.send('user not found')
    }
    else{
        users[index].name=newName
res.send(`${name} is updated successfully = ${newName}`);
    }

})
app.delete('/deleteAll',(req,res)=>{
    users.length=0
    res.send("successfully deletedd all users")

})


app.get('/check',(req,res)=>{
    let name= req.body.name
    let index=users.findIndex(str => str.name==name)

    if(index==-1){
         res.send("user not found");
    }
    else{
        res.send(`${name} founded`)
    }
})




app.listen(port,(err)=>{
if(err){
    console.log("Error found");
    
}
else{
    console.log("server started",port);
    
}
})
