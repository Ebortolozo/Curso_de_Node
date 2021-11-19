const fs = require("fs")

console.log("início")

fs.writeFileSync("arquivo.txt", "Teste")

console.log("fim")