var fs = require('fs')

var readStream = fs.createReadStream('input_stream.txt')
var msg = ''

//Data Event
readStream.on('data', (rawData) => {
    console.log(`Data : ${rawData.toString()}`)
    msg += rawData.toString()
})

//Error Event
readStream.on('error', (err) => {
    console.log(`Error: ${err}`)
})

//End Event
readStream.on('end', () => {
    console.log(`Message: ${msg}`)
    console.log("Read Strem End")
})

// readStream.push('Hello - 1' )
// readStream.push('Hello - 2' )

var writeStream = fs.createWriteStream('output_stream.txt')

//finish event
writeStream.on('error',(err)=>{
    console.log(`error: ${err}`)
})

writeStream.write("chintan")
writeStream.write("rutik")