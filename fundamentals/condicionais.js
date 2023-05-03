let fruit = "apple"

if(fruit === "apple"){
    console.log("fruit ok")
} else {
    console.log("fruit not ok")
}

fruit = "applee"

if(fruit === "apple"){
    console.log("fruit ok")
} else {
    console.log("fruit not ok")
}

fruit = "apple"

/* right */

if(fruit === "apple"){
    console.log("fruit ok")
} else if (fruit === "apple"){
    console.log("fruit ok")
}

/* wrong */

if(fruit === "apple"){
    console.log("fruit ok")
} if (fruit === "apple"){
    console.log("fruit ok")
}


// conectivos && / ||/* 
/* quando temos o conectivo 'ou' pode ter uma verdadeira para ser verdadeiro 
quando temos o conectivo 'e' tem que ser todas verdadeiras */ 

const num1 = 10,
num2 = 20

if((num1 === 10) && (num2 == 20))
    /* nesse caso é esperado que de certo por conta que ambas são verdadeiras */
    console.log('deu certo!')
else {
    console.log('deu errado!')
}

const num3 = 5, 
num4 = 3

if((num3 === 10) && (num4 == 20))
    /* nesse caso é esperado que de false por conta que ambas não são verdadeiras */
    console.log('deu certo!')
else {
    console.log('deu errado!')
}

const num7 = 1, num8 = 0
if((num7 === 1) || (num7 === 1)) {
    console.log("deu certo!")
} else {
    console.log('deu errado!')
}

const num9 = 0, num10 = 0
if((num9 === 1) || (num10 === 1)) {
    console.log("deu certo!")
} else {
    console.log('deu errado!')
}
