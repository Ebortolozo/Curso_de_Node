//Inicializando o Projeto
const express = require('express');
const app = express()
const port = 5000
const path = require('path')
const users = require('./users/olamundo')
// Rota para os HTML
const basepath = path.join(__dirname, 'templates')

//arquivos estaticos 
app.use(express.static("public"))


//requisições
app.use("/users", users)

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/inicial.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basepath}/404.html`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})