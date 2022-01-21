const fs = require('fs')

//Async
fs.readFile("input.txt", (err, data) => {
    if(err)
    {
        console.log(`Error : ${err}`)
    }else{
        console.log(data.toString('utf-8'))
        //console.log(data.toString('utf-8', 0, 5)) //Sampl
        //console.log(data.toString('utf-8', 7, 17)) //Data Input
        console.log(data[0])
    }
})

console.log("--END 1---")

var data = fs.readFileSync('input.txt', 'utf8');
console.log(`Data : ${data}`)

console.log("--END 2---")
//UTF8 , UTF16 


fs.writeFile("output.txt", "Hello World", (err) => {
    if(err){
        console.log(`Write Error: ${err})`)
    }else{
        console.log("Write Success")
    }
})

fs.appendFile("output.txt", "Hello World - 2", (err) => {
    if(err){
        console.log(`Write Error: ${err})`)
    }else{
        console.log("Write Success")
    }
})

console.log("Data Using OPEN()")
var dataBuffer =  Buffer.alloc(10)
console.log(dataBuffer)

fs.open("input.txt", "r", (err, fd) => {
    fs.read(fd, dataBuffer, 0, dataBuffer.length, 5 ,(err, bytesRead) => {
        console.log("*** START ***")
        console.log(dataBuffer.toString())
        console.log("*** END ***")
    })
})

