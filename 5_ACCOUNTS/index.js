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
        } else if(action === "Consultar Saldo") {
            consultarSaldo()
        } else if(action === "Depositar") {
            deposit()
        } else if(action === "Sacar") {
            withdraw()
        } else if(action === "Sair") {
            console.clear()
            console.log(chalk.bgBlue.black("Obrigado por usar o Accounts"));
            process.exit()
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
                buildAccount()
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


// Função deposit()

function deposit() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual é o nome da sua conta?"
        }
    ])
    .then(answer => {
        const accountName = answer["accountName"]
        
        if(!verifyAccount(accountName)){
            if(accountName === "Voltar" || accountName === "voltar"){
                console.clear()
                return operation()
            }else{
                return deposit()
            }    
        }
        inquirer.prompt([
            {
                name: "amount",
                message: "Quanto Você deseja depositar?"
            },
        ]).then(answers => {
            const amount = answers["amount"]
            addAmount(accountName, amount)
            
        })  
    })
}    
    

function verifyAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRedBright.black("A conta informada não existe!"))
        console.log(chalk.yellow("Se não tiver uma conta digite 'Voltar'"))
        return false
        }else {
            return true
        }
    }


function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if(!amount) {
        console.log(chalk.bgRedBright.black("Ocorreu um erro, tente novamente mais tarde!"))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err) {
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi depositado o valor de ${amount} na sua conta!`)) 
    operation()
}

function getAccount(accountName) {
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: "r",
    })
    return JSON.parse(accountJson)
}


function consultarSaldo() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?"
        }
    ]).then(answer => {
        const accountName = answer["accountName"]

        //verificação de nome da sua conta
        
        if(!verifyAccount(accountName)){
            if(accountName === "Voltar" || accountName === "voltar"){
                console.clear()
                return operation()
            }else{
                return consultarSaldo()
            }    
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(
            `Olá, o saldo da sua conta é de R$${accountData.balance}`
        ),
        )
        operation()

    })
    .catch(error => {console.error(error)})
}



// sacar valor da conta do usuario

function withdraw() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then(answer => {
        
        const accountName = answer["accountName"]

        if(!verifyAccount(accountName)){
            if(accountName === "Voltar" || accountName === "voltar"){
                console.clear()
                return operation()
            }else{
                return withdraw()
            }    
        }

        inquirer.prompt([
            {
                name: "Amount",
                message: 'Quanto você deseja sacar?'
            }
        ]).then(answers => {

            const amount = answers["Amount"]
            

            removeAmount(accountName, amount)


        }).catch(error => {console.error(error)})
        
    }).catch(error => {console.error(error)})
}



//função removedora de dinheiro

function removeAmount(accountName, amount) {
    
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(
            chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde!")
        )
        return withdraw()
    }

    if(accountData.balance < amount) {
        console.log(chalk.bgRed.black("Valor Indisponivel!"))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err) {
            console.error(err)
        },
    )

    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`))
    operation()
}