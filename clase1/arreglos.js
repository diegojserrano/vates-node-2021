
// Programar una función que llene un vector con números aleatorios.
// La función debe recibir como parámetro la cantidad de números y debe retornar el vector

function generar_arreglo_aleatorio(n) {
    let v = []

    for (i = 0; i < n; i++)
        v[i] = Math.random()
    return v
}


// Luego programar otra función que reciba un vector y retorne el mayor valor encontrado
function mayor(v) {

    let may = v[0]

    for (let i = 1; i < v.length; i++)
        if (v[i] > may)
            may = v[i]

    return may
}


// Finalmente programar otra función que reciba un vector y muestre todos aquellos números
// que sean mayores que 0.5
function mostrar_arreglo(v) {
    for(let i = 0; i < v.length; i++)
        console.log(v[i])
}


function mostrar_mayores(v, minimo) {
    for(let i = 0; i < v.length; i++)
        if (v[i] > minimo)
            console.log(v[i])
}



v = generar_arreglo_aleatorio(10)
console.log("Todos")
mostrar_arreglo(v)
console.log("Mayores a 0.5")
mostrar_mayores(v, 0.5)
console.log("El mayor es: ")
console.log(mayor(v))
