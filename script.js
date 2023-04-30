const input = document.querySelector("input");
const button = document.querySelector("button");

const place = document.querySelector("#place");
const degress = document.querySelector("#degrees");
const img = document.querySelector("img");
const wind = document.querySelector("#wind");
const content = document.querySelector(".content");

/* const criar variaveis /  document.querySelector busca variavel dentro do html => () */

button.addEventListener("click", () => {
/* 
o button se tornou uma variavel que esta dentro do event listener com o comando de click
ou seja ele está aguardando esse comando */
    if(!input.value) return;
    getDataApi() 
    /* 
    aguardando o usuário clicar no campo de input que foi definido sua variavel lá em cima
    e depois joga ele para a função que vem após o return */
});

async function getDataApi() {
    /* até aqui só foi criada a função */
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        input.value
      )}&units=metric&appid=09c0b3265ef7fb159fdf346790c1bd9d`;
}