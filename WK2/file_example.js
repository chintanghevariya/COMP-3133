var fs = require('fs')

//r - read only
//r+ - Read + Write
//w - Write only
//w+ - Write + Read
//a - Appende 
//rs - Read Sync 
//wx - Write and error if file not found
fs.open('data.txt', 'a+', (err, fd) => {
    //var buf = Buffer.alloc(1024)
    var buf = Buffer.alloc(10)

    if(err){
        console.log(err)
        return
    }

    //Read
    fs.read(fd, buf, 0, buf.length, 0, (err, n, data) => {
        if(err){
            console.log(err)
            return
        }

        console.log(buf.toString())
        console.log(err, n, data.toString())
    })

    //Write
    var str = Buffer.from("Full Stack Development - II")
    fs.write(fd, str, (err, n, data)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("Write success....")
        console.log(err, n, data.toString())

        fs.close(fd, () => {
            console.log("File Closed...")
        })
    })
})