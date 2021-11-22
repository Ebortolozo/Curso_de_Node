const path = require('path')


// Path absoluto
console.log(path.resolve("teste.txt"))

//formar path 
const midFolder = "relatorios"
const fileName = "junior.exe"

const finalPath = path.join("/", "arquivos", midFolder, fileName)

console.log(finalPath)