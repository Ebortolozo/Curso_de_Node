const express = require('express');
const app = express();
const exphbs = require('express-handlebars')

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

app.get("/dashboard", (req, res) => {
    
    const itens = ["Item a", "Item b", "Item c"]
    
    res.render("dashboard", {itens})
})

app.get("/blog", (req, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "JavaScript",
            body: "Esse artigo vai te ajudar a aprender Node.js...",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Esse artigo vai te ajudar a aprender PHP...",
            comments: 2
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Esse artigo vai te ajudar a aprender Python...",
            comments: 10
        }
    ]

    res.render("blog", { posts })
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
