const fs = require('fs')

console.log("---START---")
//Read Async
fs.readFile('input.txt', (err,data)=>{
    if(err){
        console.log(err)
        return
    }
    //will excute after reading file
    console.log("1 : "+data.toString())
})

console.log("----END----")


//Read Sync
console.log("---START---2")
var data = fs.readFileSync("input.txt")
console.log(data.toString())
console.log("---END----2")

//Write Data Async
var str = "hello world again"
fs.writeFile('output.txt',str,(err)=>{
    console.log("data written success..")
})

//Write data Sync
//fs.writeFileSymc()

//Append data to file Async
str = "\nhello world again using fs.appendFile()"
fs.appendFile('output.txt',str,()=>{
    console.log("data appended successflly...")
})

//Append Sync
//fs.appendFileSync()

fs.unlink('output_1.txt',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("file deleted successfully...")
})

//get stat of files/directory
fs.stat("./",(err,stat)=>{
    if(err){
        console.log(err)
        return
    }
    //console.log(stat)
    console.log(`isDirectory : ${stat.isDirectory()}`)
    console.log(`isFile : ${stat.isFile()}`)
})

//create new directrory
fs.mkdir('test', (err)=>{
    console.log("directory successfully created")
})

//remove directory
//  fs.rmdirSync('test')