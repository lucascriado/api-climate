function dizOla() {
    return 'olá, ';
}

function dizTudo(x, y){
    console.log(x() + y);
}

dizTudo(dizOla, 'alou alou')