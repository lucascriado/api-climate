// função construtora 

function Person(g, f, h){
    this.name = g
    this.age = f 
    this.city = h 
}

let g = 'Lucas'
let f = 21
let h = 'sjrp'

const value = new Person(g, f, h)

console.log(value)

let phrase = "Eu gosto de programar"

let bundle = phrase.split(" ")

console.log(bundle.includes("Eu"))

console.log(bundle)

let x = bundle.join(" ")

console.log(x)

let array = new Array(10)

console.log(array.length)

// metodos de array 

let phrase2 = 'lucas'

console.log(Array.from(phrase2))

let pack = Array.from("ola")


