const express = require('express');
const app = express();
const exphbs = require('express-handlebars')

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", function(req, res) {
    const user = {
        name: "Ewerton",
        surname: "Júnior",
        age: "18"
    }

    const texto = "Teste"
    
    
    res.render("home", {user: user, texto})
})

app.listen(3000, () => {
    console.log("Servidor on!!!!")
})
