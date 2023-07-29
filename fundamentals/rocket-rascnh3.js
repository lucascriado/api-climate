const person = {
    name: 'lucas',
    age: 13
}

delete person.name

console.log(person)

const vlr = true 

const vlrup = !!vlr

console.log(vlrup)

function xlr(x) {
    let xl = Array.from(x)
    console.log(xl.length)
    if (xl.length = 0){
        throw 'valor vazio'
    }
     
}

try {
    xlr('')
} catch (e) {
    console.log(e)
}