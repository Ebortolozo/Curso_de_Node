const express = require('express');
const app = express();
const exphbs = require('express-handlebars')

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", function(req, res) {
    res.render("home")
})

app.listen(3000, () => {
    console.log("Servidor on!!!!")
})
