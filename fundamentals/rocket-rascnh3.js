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

for(i=0; i<=10; i++){
    if(true){
        console.log(`o numero agora é ${i}`)
    }else{
        console.log('algo de errado')
    }
}

const objxr = {
    prop1 : "banana",
    prop2 : "maça",
    prop3 : "fruta",
}

const arrxr = [
    "banana",
    "maça",
    "legume",
]

for(let receive of arrxr){
    console.log(receive)
}

for(let rec in objxr){
    console.log(rec)
    console.log(objxr[rec])
}





