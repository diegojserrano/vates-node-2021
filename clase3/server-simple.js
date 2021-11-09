let http = require('http') 
let cont = require("./contador")
let express = require("express")

let app = express()


app.get("/", (req, res) => { res.end("Hola, soy una aplicación express") })


app.get("/contar", (req, res) => {
    cont.contar()
    res.end()
 })


app.get("/consultar", (req, res) => { res.end(`Tuvimos ${cont.cantidad()} navegantes`) })


app.listen(8080)

