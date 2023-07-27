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