const fs = require('fs')

const title = 'empid, fnm, lnm, salary'
fs.writeFileSync('employee.csv',title)
fs.appendFileSync('employee.csv', '\n1, Pritesh,patel,6000.00')
fs.appendFileSync('employee.csv', '\n1, rutik,patel,5000.00')
fs.appendFileSync('employee.csv', '\n1, chintan,patel,9000.00')

function write_data(id, fnm, lnm, salary)
{
    fs.appendFileSync('employee.csv', `\n${id},${fnm},${lnm},${salary}`)
}

write_data(2, 'chintan', 'patel', 150000.00)