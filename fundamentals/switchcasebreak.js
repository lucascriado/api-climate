const item = 5 

switch(item) {
    case 1: 
        console.log('item 1-sessão')
        break
    case 2: 
        console.log('item 1-sessão')
        break
    case 3: 
        console.log('item 1-sessão')
        break
    /* caso nao exista break, e  nem 'ações' para o case ele será executado para o proximo */
    case 5:
    case 4: 
        console.log('item 1-sessão')
        break
    default:
        console.log('item 1-sessão')
}