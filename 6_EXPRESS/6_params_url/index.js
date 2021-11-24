const { RSA_X931_PADDING } = require('constants');
const express = require('express');
const app = express();
const port = 3000
const path = require('path')

const basepath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura de tabela users, resgatar um usuario do banco
    console.log(`Aqui jás o usuario: ${id}`)

    res.sendFile(`${basepath}/users.html`)
})


app.get('/', (req, res) => {
    res.sendFile(basepath + '/index.html')
})

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}`);

})