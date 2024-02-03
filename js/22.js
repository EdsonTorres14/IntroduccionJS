// Scope

// Determina visibilidad y disponibilidad de las variables en diferentes partes de un progrma por ejemplo : (función o if)

let precio = 300

function unaFuncion() {
    let precio = 100
    console.log(precio)
}

unaFuncion()
console.log(precio)