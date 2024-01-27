// Iteradores js

const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git']

const vuejs = tecnologias[0]
const js = tecnologias[1]
const node = tecnologias[2]
const html = tecnologias[3]
const css = tecnologias[4]


// foreach (Unicamente itera sobre los elementos)
const arrayForEach = tecnologias.forEach(function (tech) {
    return tech;
});

// map (Itera sobre los elementos pero crea un nuevo arreglo)
const arrayMap = tecnologias.map(function (tech) {
    return tech;
});

console.log(arrayForEach);
console.log(arrayMap);


// console.log(vuejs)
// console.log(js)
// console.log(node)
// console.log(html)
// console.log(css)

