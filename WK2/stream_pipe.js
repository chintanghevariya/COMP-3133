const fs = require('fs')
const zlib = require('zlib')

var readStream = fs.createReadStream('input_stream.txt')
var writeStream = fs.createWriteStream('output_stream.txt')

//Copying
readStream.pipe(writeStream)

//ZIP
readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('input_stream.txt.gz'))

