

const fs= require('fs');
const os=require('os')
//asynchronous
// console.log("start")
// fs.writeFile('text.txt',"This is my content new content",(err)=>{
//     if(err) console.log(err)
//     console.log("file creted successfully")
// })
// console.log("end")

//synchronous

// console.log("start")
// fs.writeFileSync('text.txt',"This is my content new content")
// console.log("end")

// fs.readFile('text.txt','utf-8',(err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// })

// console.log(os.arch())
// Write a script that logs the current date and time to a file ( log.txt ).

let date=new Date();
console.log(date)

fs.writeFile('log.txt',date.toLocaleDateString()+date.toLocaleTimeString(),(err)=>{
    if(err) console.log(err)
    console.log("file creted successfully")
})