const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')


heading.addEventListener('click', () => {
    // const numero = 2
    // if(numero === 10){
    //     heading.textContent = 'Mi número es 10'
    // } else {
    //     heading.textContent = 'Mi número es diferente'
    // }

    heading.textContent = 'Nuevo heading al dar click'
})

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target)
        enlace.textContent = 'Nuevo nombre'
    })
})