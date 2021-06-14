const math = {}


const add = (x1, x2) => x1 + x2

const substract = (x1, x2) => x1 - x2

const multiply = (x1, x2) => x1 * x2
const divide = (x1, x2) => x2 == 0
    ? console.log('no se puede dividir por 0')
    : x1 / x2


math.add = add
math.substract = substract
math.multiply = multiply
math.divide = divide



const hello = name => console.log('hola ,', name)

//module.exports me permite exportar funciones, objetos
module.exports = math


//exports me permite exportar solo un parámetro
/*
exports.add = add
exports.substract = substract
exports.multiply = multiply
exports.divide = divide
*/