// Eventos del DOM - Submit

const fornulario = document.querySelector('#formulario')

fornulario.addEventListener('submit', e => {
    e.preventDefault()

    // Prevenir alertas duplicadas
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()

    
    //Generar alerta
    const alerta = document.createElement('DIV')
    alerta.textContent = 'Todos los campos son obligatorios'
    alerta.classList.add('alerta', 'bg-red-500', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')

    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    if (nombre === '' || password === '') {
        fornulario.appendChild(alerta)

        setTimeout(() => {
            alerta.remove()
        }, 3000)
        return
    }

})