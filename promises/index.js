
const fs = require("fs").promises
const http = require("http");
const port = 3200;
const FILENAME = "file1.txt";
const ENCODING = "Utf8";

const server = http.createServer((req, res) => {
  const url = req.url;
  


  if (url.includes("readFile")) {
    fs.readFile(FILENAME, ENCODING)
      .then((data1) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err);
      })
      .finally(() => {
        res.end("finally");
      });
  }
  else if(url.includes("writeFile")){
    fs.writeFile("sample.txt","Hi King, This for you").then((data)=>{
        res.end(data,"writen successfully")
    })
 
}else if(url.includes("deleteFile")){
    fs.unlink("sample.txt").then((data)=>{
        res.end(data,"deleted Succesfully")
    }).catch((err)=>{
        res.end("error",err)
    })
}else if(url.includes("rename")){
    fs.rename("sample.txt","samplecod.txt")
}



});


server.listen(port,(err)=>{
    if(err){
        console.log('err');
        
    }
    else{
        console.log("run successfully");
        
    }
})
