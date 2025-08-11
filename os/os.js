//os module

const os=require('os')

console.log(os.type(),('type'))
console.log(os.platform(),('platform'))
console.log(os.totalmem(),('totalmem'))

//// path module

const path=require('path')
const fileNmae="text.txt"
console.log(path.join(__dirname,fileNmae),"file")