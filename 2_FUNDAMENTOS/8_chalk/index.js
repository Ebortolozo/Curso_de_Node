const chalk = require("chalk")
const minimist = require("minimist")


const args = minimist(process.argv.slice(2))

const nota = parseInt(args["nota"])

console.log(nota)

if (nota >= 7) {
    console.log(chalk.green("Parabens, você está Aprovado!!!"))
} else {
    console.log(chalk.bgRedBright.black("Você está de recuperação =("))
}


