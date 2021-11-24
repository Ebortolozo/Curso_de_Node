const express = require('express');
const app = express();
const port = 3000
const path = require('path')

const basepath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {
    req.authStatus = false;

    if(req.authStatus) {
        console.log('Autorizado pode passar')
        next();
    } else  {
        console.log("Parado ai amigâo!")
        next()
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(basepath + '/index.html')
})

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}`);

})