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


// conectivos && / ||