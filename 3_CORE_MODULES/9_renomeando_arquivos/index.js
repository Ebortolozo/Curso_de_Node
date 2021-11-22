const fs = require("fs");

const arqantigo = "arquivo.txt"
const arqnovo = "novo.txt"

fs.rename(arqantigo, arqnovo, function (err) {
    if(err){
        console.log(err)
        return;
    }

    console.log(`O arquivo ${arqantigo} foi renomeado para ${arqnovo}`)
})
