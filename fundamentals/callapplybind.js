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
    prop: function Teste(){return 0},
    numero = 5
}