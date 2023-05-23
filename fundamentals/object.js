/* dot object */

const objectNull = {
    prop1: "olá mundo, eu sou uma propriedade!",
    metodo1: teste1 = () => "isso é um retorno!"
}

console.log(objectNull.prop1)
console.log(objectNull.metodo1())

/* bracket object */

const objectOther = {
    prop2: "olá mundo, eu sou uma propriedade!",
    metodo2: teste1 = () => "isso é um retorno!"
}

console.log(objectOther['prop2'])
console.log(objectOther['metodo2']())