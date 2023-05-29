
function arrowReload (){
    this.nome1 = 'hello1' 
    this.nome2= 'hello2'
} 

const arrowP = new arrowReload()

console.log(arrowP.nome2)

let arrowFeload = () => this.nome5 = 'hello9' ; this.nome7 = 'hello10'

/* console.log(arrowReload().nome2) /* dont working */ 

/* const arrowFeload1 = new arrowFeload() */ /* is not a constructer */

/* working */

function Ventilador(y, x, e){
    this.velmax = x;
    this.on = true;
}

const ventilador1 = new Ventilador('oi', 'oi1', 'oi2')

console.log(ventilador1.velmax)

function Car(a, b, c){
    this.make = a
    this.model = b
    this.year = c
}

const contructorCar = new Car('tesla1', 'tesla2', 'tesla3')

console.log(contructorCar.make)

ventilador1.ligaDesliga = function() {
    this.on ? this.on = false : this.on = true  
}

/* prototype function? */

console.log(ventilador1.on)

ventilador1.ligaDesliga()

console.log(ventilador1.on)

ventilador1.ligaDesliga()

console.log(ventilador1.on)
