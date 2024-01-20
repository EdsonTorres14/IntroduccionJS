const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Hace que las propiedades existentes no se puedan escribir ni configurar
// Object.freeze(producto);

// Sella un objeto, previniendo que puedan añadirse nuevas propiedades al mismo
// Object.seal(producto);


// Rescribir un valor 
producto.nombre = 'Monitor curvo';
producto.imagen = 'imagen.jpg';

// Eliminar 
// delete producto.disponible;
// const { disponible, precio, ...producto2 } = producto;



console.log(producto);