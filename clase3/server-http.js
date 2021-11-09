let http = require('http') 
let cont = require("./contador")


let server = http.createServer((request, response) => {

    if (request.url == "/contar") {
        cont.contar()
        response.end("Petición contada")

    } else if (request.url == "/consultar") {
        response.end(`Tuvimos ${cont.cantidad()} navegantes`)
    } else 
        response.end("Navegue /contar o /consultar")

})


server.listen(8080)




