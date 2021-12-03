const express = require('express');
const app = express();
const router = express.Router()
const path = require('path')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

//Padrão
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

const basepath = path.join(__dirname, '../views')

router.get('/pc', (req, res) => {
   
    res.render(`${basepath}/pc`)
})

router.get("/alexa", (req, res) => {

    res.render(`${basepath}/alexa`)
})
router.get("/televisao", (req, res) => {

    res.render(`${basepath}/televisao`)
})

module.exports = router