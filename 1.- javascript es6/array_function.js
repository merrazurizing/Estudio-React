var numbers = [1,2,3]
// le suma 3 a cada elemento de la array
const plus3 = numbers.map(num=>num+3)
console.log(plus3)

// aca con una funcion
const plus4fuction = num => num+4
const plus4 = numbers.map(plus4fuction)
console.log(plus4)
