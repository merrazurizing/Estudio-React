var age = 13
if(true){
    var age= 98
    console.log('Adentro :',age)
}
console.log('Afuera :',age)

// LET
// adentro 98 y afuera 13
let age2 = 13 
if(true){
    let age2= 98
    console.log('Adentro :',age2)
}
console.log('Afuera :',age2)

// COSNT
// no puedo darle valor ,pero si cambiarle atributos (este caso nombre)

const user = {}
user.name = "mike"
console.log(user)

// Puedo Pushearle a una const array
const arr = ["orange"]
arr.push("apple")
console.log(arr)