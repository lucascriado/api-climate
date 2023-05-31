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

/* add / por tras */
arrayBundle.push(person)

/* add / pela frente */
person2 = 'ok2'

arrayBundle.unshift(person2)

console.log(arrayBundle)

let counts = 0 

do {
    let n = prompt("Enter a number")
        console.log(typeof n)
        arrayBundle.push(n)
        console.log(arrayBundle)
        counts++     
} while (counts < 10); 

const item = 5 

let n = prompt("Enter Add, Remove, List and Exit")
switch(n) {
    case 'Add': 
        console.log('item 1-sessão')
        break
    case 'Remove': 
        console.log('item 1-sessão')
        break
    case 'List': 
        console.log('item 1-sessão')
        break
    /* caso nao exista break, e  nem 'ações' para o case ele será executado para o proximo */
    case 'Exit': 
        console.log('item 1-sessão')
        break    
}

