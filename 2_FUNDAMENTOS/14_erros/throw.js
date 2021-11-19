const x = "10"

//Checar se x é numero

if(!Number.isInteger(x)) {
    throw new Error("O valor de x não é um numero inteiro!!!")
}

console.log("Continuando o codigo!!!")