var person = {
  firstName: "Matias",
  lastName: "Errazuriz",
  age : 27,
  eyeColor:  "Negros"
};

//Envez de usar person.age , asi se hace mas rapido. Se usan variables directamente
const {firstName,age} =person
console.log(firstName)
console.log(age)


let a, b, remain;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...remain] = [10, 20, 30, 40, 50];
console.log(remain);
