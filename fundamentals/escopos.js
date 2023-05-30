/* function Carros() {
    var nomeCarro = "Ferrari"
    console.log(nomeCarro)
}

console.log(nomeCarro)

dont working 
 */

function Carros() {
    return 0
    }
    function CarrosNew(){
        this.nomeCarro = "Ferrari"
        this.log = `olá o nome da variavel é ${this.nomeCarro}`  
}

const CarrosResposta = new CarrosNew()

console.log(CarrosResposta.log)

/* working  */

/* usar o window para acessar as propriedades */