

/////////// import file module

// const { error } = require('console');
const fs = require('fs');

////////// Read file



// fs.readFile('text.txt','utf8',(errorData,filecontent)=>
// {
//     if(errorData){
//         console.log('error und')
//     }
//     else{
//         console.log('file content is =')
//     }
// }

// )


////////// write file

// fs.writeFile('./text1.txt','new text imported',(errorData)=>
// {
// if(errorData){
//    console.log('file content not added')  
// }
// else{
//     console.log('file content is added =')  
// }
// }

// )


//////////// Delete file

// fs.unlink('./text1.txt',(erroData)=>
// {
//     if(erroData){
//         console.log("file content is not deleted")
//     }
//     else{
//          console.log('file content is deleted ')  
//     }
// }
// )


//////////// create file

fs.mkdir('./os',(errorData)=>
{
    if(errorData){
        console.log("can't create file")
    }
    else{
        console.log("file create succesfully")
    }
}
)

