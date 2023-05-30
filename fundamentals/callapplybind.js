/* bind */

function thisBind(){
    console.log(this)
}

const obj = {
    exemplo: 'exemplo'
}

thisBind = thisBind.bind(obj)

thisBind()

console.log(obj)

/* call */

const objlist = {
    prop: function Teste(){console.log(this)},
    numero: 5
}

objlist.prop()

console.log(objlist)

const obj2 = {
    hello: 'ola'
}

objlist.prop.call(obj2)

console.log(objlist)