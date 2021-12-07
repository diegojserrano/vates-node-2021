const config = require("./config").config
let mariadb = require("mariadb")


function agregar(nueva) {
    personas.push(nueva)
}

async function todas() {
    let conn = await mariadb.createConnection(config);
    let resultados = await conn.query("select * from personas2")
    return resultados;
}

function una(id) {
    encontrada = personas.filter( p => p.id == id)
    if (encontrada) return encontrada[0]
    return null
}

exports.agregar = agregar
exports.todas = todas
exports.una = una
