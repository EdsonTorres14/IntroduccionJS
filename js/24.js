const heading = document.querySelector('.heading')

// heading.textContent = 'Nuevo Heading'
// heading.classList.remove('text-4xl')

const inputNombre = document.querySelector('#nombre')

console.log(inputNombre)

inputNombre.value = 'Valor por default'


const enlaces = document.querySelectorAll('.navegacion a')

console.log(enlaces)

//  enlaces[0].textContent = 'Nuevo texto para enlace'

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Texto')