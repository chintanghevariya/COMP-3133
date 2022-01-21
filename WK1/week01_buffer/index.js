console.log("week11 thursday lab example")

console.log(__dirname)
console.log(__filename)

let buf1 =  Buffer.from("Hello")
console.log(buf1) //<Buffer 48 65 6c 6c 6f>
console.log(buf1[0])
console.log(buf1.toString())
console.log(buf1.length)

let str = '👏🤝'
let buf2 = Buffer.from(str)
console.log(buf2.toString())
console.log(buf2.length)
console.log(buf2.toString('utf-16le'))
console.log(buf2)
console.log(buf2.toString('hex'))

for(const c of buf2){
    console.log(c)
}

//😄 = 'smile'

let buf3 = Buffer.alloc(10)
console.log(buf3)

buf3[0] = 65 // 'A' not allowed
buf3[4] = 69
buf3[9] = 66

console.log(buf3)
console.log(buf3.toString())

buf3.write('world',4)
console.log(buf3.toString())

let buf4 = Buffer.concat([buf1, buf3])
console.log(buf4.toString())

buf4 = Buffer.concat([Buffer.from('Hello'), Buffer.from('world')])
console.log(buf4.toString())

buf4.copy(buf1)
console.log(buf1.toString())


