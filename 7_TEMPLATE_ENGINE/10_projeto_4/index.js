const express = require('express');
const app = express();
const produtos = require("./produtos")
const exphbs = require('express-handlebars')
const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.use("/produto", produtos)

app.get('/', (req, res) => {

    const produtosListados = [
        {
            nome: "Pc da Nasa",
            descricao: "Computador potente 3 portas.",
            preco: 2600,
        },
        {
            nome: "Alexa",
            descricao: "Diga 'Ok google' e ela responderá qualquer pergunta.",
            preco: 650,
        },
        {
            nome: "Televisão Amoled",
            descricao: "300 polegadas quase um cinema",
            preco: 6599,
        },
    ]
    res.render("homepage", {produtosListados})
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})