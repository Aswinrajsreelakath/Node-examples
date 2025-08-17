
const fs=require("fs").promises

const FILE_NAME="file1.txt";
const FILE_NAME1="file.txt";
const ENCODING="utf8"

fs.readFile(FILE_NAME1,ENCODING).then(data=>{
    fs.readFile(FILE_NAME,ENCODING).then(data1=>{
        fs.readFile(data + data1,ENCODING).then(result =>{
            console.log("final result",result);
            
        })
    })
})
