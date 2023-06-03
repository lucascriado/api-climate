/* listagem de um array, e utilizando o metódo splice para remover, 
especificandoo ( 1° numero vai ser o indice e até quanto esse indice vai (aonde vai ser o corte) ) */

const arrayList = [ 1,2,3,4,5 ]

console.log(arrayList)

arrayList.splice(3)

console.log(arrayList)


/* --- */

/* listagem de um array, e utilizando o metódo splice para remover, 
especificandoo ( 1° numero vai ser o indice, 2° vai ser o quanto será deletado ) */

console.log(arrayList)

arrayList.splice(3, 1)

console.log(arrayList)

arrayList.splice(3, 1)

console.log(arrayList)

/* --- */

/* listando e preenchendo o array */

const arrayBundle = new Array(10)

console.log(arrayBundle)

arrayBundle.fill(5)

console.log(arrayBundle)

/* --- */

/* listando e preenchendo o array atré os lugares indicados por dois números */

const arrayBundle2 = new Array(10)

arrayBundle2.fill(5, 0, 2)

console.log(arrayBundle2)

const arrayBundle3 = new Array(10)

arrayBundle3.fill(5, 0, 6)

console.log(arrayBundle3)

/* --- */

