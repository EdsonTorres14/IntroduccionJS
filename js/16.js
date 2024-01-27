const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git']
const numeros = [10, 20, 30]

// Includes 
let resultado = tecnologias.includes('Git')


// FindIndex permite opbeter indice del arrglo
resultado = tecnologias.findIndex(tech => tech === 'Git')

// Some Devuelve true si la condicion de un arrglo cumple almenos una
resultado = numeros.some(numero => numero > 35)

//Find encuentra concidencia 
resultado = numeros.find(numero => numero === 5)

//Every todos deben de cumplir
resultado = numeros.every(numero => numero > 1)

//Reduce
resultado = numeros.reduce( (total, numero) => numero + total, 0)

//Filter
resultado = tecnologias.filter(tech => tech === 'Vue.js')

console.log(resultado)