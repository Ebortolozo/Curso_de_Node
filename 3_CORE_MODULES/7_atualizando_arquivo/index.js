const fs = require("fs")
const http = require("http")

const port = 3000


const server = http.createServer((req, res) => {
    var urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader("Content-type", "text/html")

    if(!name) {
        fs.readFile("mensagem.html", function(err, data) {
            res.writeHead(200, {"Content-type": "text/html"})
            res.write(data)
            return res.end()
        })
    }else {

        const namenewLine = name + "\r\n"

        fs.appendFile("Arquivo.txt", namenewLine, function(err, data) {
            res.writeHead(302, {
                Location: "/"
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})