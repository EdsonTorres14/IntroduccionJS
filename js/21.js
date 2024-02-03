// Optional Chaining o encademaniento opcional

const alumno = {
    nombre: 'Juan',
    clase: 'Programación',
    aprobado: true
}


setTimeout(() => {
    alumno.examenes = {
        examen1: 100,
        examen2: 100,
        examen3: 100
    }
    console.log(alumno.examenes?.examen1)
}, 3000);



console.log('Hola Mundo')

