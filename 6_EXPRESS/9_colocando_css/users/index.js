const express = require('express');
const router = express.Router()
const path = require('path')


const basepath = path.join(__dirname, '../templates')

router.use(
    express.urlencoded({
        extended: true,
    }),
)

router.use(express.json())

router.get("/add", (req, res) => {
    res.sendFile(`${basepath}/userform.html`)
})

router.post("/save", (req, res) => {

    const name = req.body.name
    const age = req.body.age

    res.sendFile(`${basepath}/userform.html`)
    console.log(`O usuario se chama ${name} e tem ${age} anos!`)

})


router.get('/:id', (req, res) => {
    const id = req.params.id

    //leitura de tabela users, resgatar um usuario do banco
    console.log(`Aqui jás o usuario: ${id}`)

    res.sendFile(`${basepath}/users.html`)
})


module.exports = router