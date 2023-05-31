const prompt = require('prompt-sync')();

arrayBundle = new Array(0)

do {
    let n = prompt("Você quer adicionar, remover, ver a lista ou sair ")
    if (n == 'sair') {
        console.log('Você optou por sair, sendo assim, estamos saindo dessa sessão')
        break
    } else {
        switch(n) {
            case 'adicionar': 
                let c = prompt("Escreva o que deseja adicionar ")
                arrayBundle.push(c)
                console.log(`O item : ${c}, foi adicionado a lista veja ele na opção : 'ver a lista'`)
                break
            case 'remover': 
                arrayBundle.pop()
                console.log(`Foi removido um item da lista, veja a lista pela opção 'ver a lista'`)
                break
            case 'ver a lista': 
                console.log('Ok, listando todos os itens abaixo : ')
                console.log(arrayBundle)
                break  
        }   
    } 
} while (n = 'x'); 

