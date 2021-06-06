// Funciona Bien usando var
/*
function fruitColor(fruit){
  switch(fruit){
    case "Manzana":
      var color = "rojo"
      return color
    case "Banana":
      var color = "Amarillo"
      return color
    default:
      return "Otro color"
  }
}
*/

// Asi no funciona , dice color ya a sido declaro 
/*
function fruitColor(fruit){
  switch(fruit){
    case "Manzana":
      let color = "rojo"
      return color
    case "Banana":
      let color = "Amarillo"
      return color
    default:
      return "Otro color"
  }
}
*/

// poniendo los {} let funciona bien 
function fruitColor(fruit){
  switch(fruit){
    case "Manzana":{
      let color = "rojo"
      return color
    }
    case "Banana":{
      let color = "Amarillo"
      return color
    }
    default:
      return "Otro color"
  }
}

console.log(fruitColor("Manzana"))
console.log(fruitColor("Banana"))
console.log(fruitColor("Piña"))
