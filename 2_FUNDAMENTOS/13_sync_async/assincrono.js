const fs = require("fs")

console.log("Início")

fs.writeFile("arquivo2.txt", "Teste2", function(err) {
    setTimeout(() => {
        console.log("Arquivo Criado!!!")
    }, 1000);
})

console.log("Fim")