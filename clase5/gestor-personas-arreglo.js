
personas = []

function agregar(nueva) {
    personas.push(nueva)
}

function todas() {
    return personas
}

function una(id) {
    encontrada = personas.filter( p => p.id == id)
    if (encontrada) return encontrada[0]
    return null
}

exports.agregar = agregar
exports.todas = todas
exports.una = una
