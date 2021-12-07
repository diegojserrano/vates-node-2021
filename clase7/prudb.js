let mariadb = require('mariadb')








async function listar_personas(apellido) {
    let conn = await mariadb.createConnection(config);
    let resultados = await conn.query("select * from personas2 where apellido like ?",[apellido])
    resultados.forEach(element => {
        console.log(element)
    });
}



listar_personas('LOZANO')