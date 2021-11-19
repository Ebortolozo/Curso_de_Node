// ler nome e idade

console.log(process.argv)

const argc = process.argv.slice(2)

const nome = argc[0].split("=")[1]

console.log(nome)

const idade = argc[1].split("=")[1]

console.log(idade)

console.log(`O meu nome é ${nome} e tenho ${idade} anos!!!`)

