/* hoisting /=> elevação ou içamento */
/* o uso de var pode ocasionar no içamento por isso 
acaba não sendo interessante seyu uso por motivos de segurança */

foo = 20
console.log(foo)
var foo

/* erro */
/* 
foo1 = 20
console.log(foo)
let foo1 */

/* erro */
/* 
foo2 = 20
console.log(foo)
const foo2 */
