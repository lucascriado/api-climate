/* function Carros() {
    var nomeCarro = "Ferrari"
    console.log(nomeCarro)
}

console.log(nomeCarro)

dont working 
 */

function Carros() {
    this.nomeCarro = "Ferrari"
}

const CarrosResposta = new Carros()

console.log(CarrosResposta.nomeCarro)

/* working  */

/* usar o window para acessar as propriedades */