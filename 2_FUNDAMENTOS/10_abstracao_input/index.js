const inquirer = require("inquirer")

inquirer.prompt([
    {
        name: "nota_1",
        message: "Nota da Primeira Prova:",
    },
    {
        name: "nota_2",
        message: "Nota da Segunda Prova:"
    }
])
.then((respostas) => {
    console.log(`A media das duas provas é ${(parseInt(respostas.nota_1) + parseInt(respostas.nota_2)) / 2}`)    
}).catch(err => console.log(err))