var name = "matias"
var namecopy = name
console.log('name',name)
console.log('namecopy',namecopy )

// Namecopy no cambio
var name = 'Marie'
console.log('name',name)
console.log('namecopy',namecopy )

const user = {
  name: "Matias"
}

//const usercopy =user
// ahora se hace puntero
const usercopy = {...user}
console.log('user',user)
console.log('usercopy',usercopy )

user.name= "Marie "
console.log('user',user)
console.log('usercopy',usercopy )