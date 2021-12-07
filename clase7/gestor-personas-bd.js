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

async function una(id) {
    let conn = await mariadb.createConnection(config);
    let resultados = await conn.query("select * from personas2 where documento = ?", [id])
    return resultados;
}

exports.agregar = agregar
exports.todas = todas
exports.una = una
