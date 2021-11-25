const express = require('express');
const app = express();
const exphbs = require('express-handlebars')

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.get("/dashboard", (req, res) => {
    
    const itens = ["Item a", "Item b", "Item c"]
    
    res.render("dashboard", {itens})
})

app.get("/post", (req,res) => {

    const post = {
        title: "Aprender Node.js",
        category: "JavaScript",
        body: "Esse artigo vai te ajudar a aprender Node.js................................................................",
        comments: 4
    }

    res.render("blogpost", {post})
})

app.get("/", function(req, res) {
    const user = {
        name: "Ewerton",
        surname: "Júnior",
        age: "18"
    }

    const auth = true;

    const approved = false;
    
    const texto = "Teste"
    
    
    res.render("home", {user: user, texto, auth, approved})
})

app.listen(3000, () => {
    console.log("Servidor on!!!!")
})
