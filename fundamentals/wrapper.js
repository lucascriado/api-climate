let objlist = ( 'test1', 'test2', 'test3' )

console.log(objlist.length)

/* *importante* o new trasnforma tudo p/ objeto <== */ 
teste7 = new String("Teste 2")

console.log(typeof teste7)

teste10 = new Number(2)

console.log(typeof teste10)

/* usar o valueOf pra pegar o valor transformado em objeto e voltar ele ao normal */
teste8 = teste7.valueOf()
console.log(typeof teste8)

teste12 = teste10.valueOf()
console.log(typeof teste12)

console.log(teste7)

const str1 = String("Teste 1")
const str2 = new String("Teste 2")

console.log(str1.length)
console.log(str2.length)
console.log(`str ${str1} str2 ${str2}`) 

num77 = 10 / 3
num88 = num77.toFixed(2)
num87 = num77.toFixed(3)
console.log(num88)
console.log(num87)