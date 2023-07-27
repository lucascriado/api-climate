function sum(x, y){
    let v = x + y   
    return v
}

// arrow function
let value = (x, y) => {
    let g = x + y
    return g 
} 

console.log(`${value(1,8)}`)

console.log(`a soma é ${sum(1,7)}`)

//calback
let benk = (name) => {
    console.log('estamos iniciando o callback')
    return name()
}

benk(
    () => {
        console.log('estamos dentro do callback')
    }
)

