// Array o Arreglos 

const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS']

//  Agrega al final del arreglo
// tecnologias.push('Git')

// Agrega al principio del arreglo
// tecnologias.unshift('Git 2')


// Sin mutar el arreglo original

// const nuevoArreglo = ['Git 2', ...tecnologias, 'Git']

// Elimina un elemento del final del arreglo
// tecnologias.pop()

// Elimina del inicio del arreglo
// tecnologias.shift()

//Elimina el resto de los elementos después de la posición que le mandes
// tecnologias.splice(2, 1)


//Tech crea variable temporal mientras se ejecuta el filter

// Ejecuta cada elemento de cada arreglo y lo imprime en consola
tecnologias.filter( function(tech){
    console.log(tech)
})
console.log(tecnologias);

// Quita el HTML en el arreglo y retorna todos los diferentes
const tecnologias2 = tecnologias.filter( function(tech){
    // console.log(tech)
    return tech != 'HTML'
})

console.log(tecnologias2);
