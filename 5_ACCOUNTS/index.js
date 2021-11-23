// Modulos Externos
const inquirer = require("inquirer")
const chalk = require("chalk")

// Modulos Internos
const fs = require("fs")

operation()

function operation() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "O que você deseja fazer?",
            choices: [
                "Criar Conta",
                "Consultar Saldo",
                "Depositar",
                "Sacar",
                "Sair"
            ]
        }
    ]).then(answers => {

        const action = answers["action"]

        if(action === "Criar Conta") {
            createAccount()
        }

    })
    .catch(err => console.error(err))
}


// Criação da conta

function createAccount() {
    console.log(chalk.bgGreen.black("Obrigado por escolher o nosso Banco!"))
    console.log(chalk.green("Defina uma das opções a seguir"))

    buildAccount()
}

function buildAccount() {

    inquirer
        .prompt([
            {
                name: "accountName",
                message: "Digite um nome para a sua conta:",
            },
        ])
        .then(answers => {
            const accountName = answers['accountName']
            
            console.info(answers["accountName"])

            if (!fs.existsSync("accounts")){
                fs.mkdirSync("accounts")
            }

            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(
                    chalk.bgRed.black("Esta conta já existe, escolha outro nome!")
                )
                buildAccount(accountName)
                return
            }

            fs.writeFileSync(
                `accounts/${accountName}.json`,
                '{"balance":0}',
                function (err) {
                    console.log(err)
                },

            )
            
            console.log(chalk.green("Parabéns, sua conta foi criada!"))
            operation()
        })
}