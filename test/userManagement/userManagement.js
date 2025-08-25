//user management using name {array}

const express=require("express")
const port= 4000;
const app=express()

let users=["tony","stark","thor"]

app.get('/getAllUsers',(req,res)=>{
res.send(`users are ${users}`)
})
app.post('/insertUser',(req,res)=>{
    let name=req.query.name

    if(!name){
        res.send("invalid input")
    }
    else if (users.includes(name)){
    res.send(`${name} is already exist`)
    }
    else{
        users.push(name)
        res.send(`${name} is added to the users Array`)
    }
})
app.delete("/deleteUser", (req, res) => {
  let name = req.query.name;

  if (!name) {
    return res.status(400).send("Please provide a name to delete");
  }

  let index = users.indexOf(name);

  if (index === -1) {
    return res.status(404).send(`${name} is not found`);
  }

  users.splice(index, 1);
  res.status(200).send(`${name} has been deleted successfully`);
});


app.put('/updateName',(req,res)=>{
    let name = req.query.name
    let newName=req.query.newName
    let index= users.indexOf(name)
if(!name){
    res.send("invalid input,Please Enter valid input")
}
else if(!newName)
{
    res.send("invalid input,Please Enter valid input");
}

else if(index ===-1){
    res.send("user mot found")
}
else{
    users[index]=newName
    res.send(`${name} is updated to ${newName}`)
}
})


app.listen(port,(err)=>{
    if(err){
        console.log("Error found");  
    }
    else{
        console.log("server start" ,port);
        
    }
})