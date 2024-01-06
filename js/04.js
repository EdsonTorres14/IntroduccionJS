// Objetos 
// Una coleccion de propiedades asociados entre un nombre y clave

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// console.log(typeof producto);
// console.log(producto);
// console.table(producto);

// console.log(producto.nombre)
// console.log(producto['nombre'])

//Destructuring
const { nombre } = producto

// console.log(nombre);

const autenticado = true
const usuario = "Juan"


// Cuando llave y varible son iguales se puede omitir 
const nuevoObjeto = {
    autenticado,
    usuario : usuario
}

console.log(nuevoObjeto)