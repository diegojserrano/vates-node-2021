const { application } = require('express')
const express = require('express')
const gestor = require('./gestor-personas-bd')

let app = express.Router()

app.use(express.json())

app.get("/", async (req, res) => {
    res.end(JSON.stringify(await gestor.todas()))
})

app.get("/:id", (req, res) => {
    // Si vuelve null debería enviarse un 404
    res.end(JSON.stringify(gestor.una(req.params.id)))
})

app.post("/:id/:nombre/:apellido", (req, res) => {
    res.end(`intenta agregar persona numero ${req.params.id} llamada ${req.params.nombre} ${req.params.apellido}`)
})

app.post("/:id", (req, res) => {
    nueva = req.body
    nueva.id = req.params.id
    gestor.agregar(nueva)
    res.end(`agregada`)
})



exports.router = app