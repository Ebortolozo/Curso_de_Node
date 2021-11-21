const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer.prompt([
    {
        name: "nome",
        message: "Qual é o seu nome?\n",
    },
    {
        name: "idade",
        message: "Qual é a sua idade?\n"
    }
])
.then((respostas) => {
    console.log(chalk.bgYellow.black(`O seu nome é ${respostas.nome} e você tem ${respostas.idade} anos!!!`))
}).catch(err => console.log(err))