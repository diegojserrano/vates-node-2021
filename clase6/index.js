
const express = require('express')
const routerPersonas = require('./router-personas')


let app = express()

app.use("/persona", routerPersonas.router)

app.get("/", (req, res) => {
    res.end("Hola")
})
app.listen(8080)


/*
GET /persona : listado de todas
GET /persona/id: los datos de una
POST /persona/id: inserta una nueva persona con id
DELETE /persona/id: borra una persona
PUT /persona/id: modificar una nueva persona con id

*/