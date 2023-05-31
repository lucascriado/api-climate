const prompt = require('prompt-sync')();

listArrray = [ 'banana', 'maça', 'pera' ]

console.log(typeof listArrray)

arrayList = new Array('teste1', 'teste2')

console.log(typeof arrayList)

/* como transferir um array */
const transferArray = Array.from(listArrray)

console.log(transferArray)

arrayBundle = new Array(1)

person = 'ok'

arrayBundle.push(person)

console.log(arrayBundle)

let counts = 0 

do {
    let n = prompt("Enter a number")
    console.log(typeof n)
    arrayBundle.push(n)
    console.log(arrayBundle)
    counts++     
} while (counts < 10); 
