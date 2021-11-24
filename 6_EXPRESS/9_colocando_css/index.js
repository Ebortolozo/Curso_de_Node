const { RSA_X931_PADDING } = require('constants');
const express = require('express');
const app = express();
const port = 3000
const path = require('path')
const users = require('./users')

const basepath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//arquivos estaticos 
app.use(express.static("public"))

app.get("/users/add", (req, res) => {
    res.sendFile(`${basepath}/userform.html`)
})

app.post("/users/save", (req, res) => {

    const name = req.body.name
    const age = req.body.age

    res.sendFile(`${basepath}/userform.html`)
    console.log(`O usuario se chama ${name} e tem ${age} anos!`)

})


app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura de tabela users, resgatar um usuario do banco
    console.log(`Aqui jás o usuario: ${id}`)

    res.sendFile(`${basepath}/users.html`)
})

app.use("/users", users)

app.get('/', (req, res) => {
    res.sendFile(basepath + '/index.html')
})

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}`);

})

