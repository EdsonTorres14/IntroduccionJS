// Template Strings o concatenación

const cliente = "Juan"
const saldo = 400

// console.log('El cliente : ' + cliente);
// console.log('El cliente : ' , cliente);
console.log(`El cliente : ${cliente}  tiene un saldo ${saldo}`);


const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(`El producto ${producto.nombre} tiene un precio de ${producto.precio}`);