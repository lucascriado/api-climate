let variavel = "this a string!"

function nameFuction (a) {
    let num1 = 10, num2 = 10, soma = num1 + num2
    return 0 
}

variavel = nameFuction
console.log(nameFuction())

let anom = function () {
     return 'Sou o retorno de uma função!'
}

console.log(anom)

console.log(anom())

/* exemplo de arrow function, de forma muito mais otimizada */

let arrowF = () => "this a return." 

console.log(arrowF())

/* função imediata ou exemplo de IIFE */

let returnImed = (function(){
    return "hello world!"
})()

console.log(returnImed)

function sum(a, b) {
    const soma = a+b
    return soma
}

/* w/ arrow function */

let sum2 = (a, b) => a+b 

console.log(sum(1,2))

console.log(sum2(3, 1))
