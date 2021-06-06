class Animal{
  eat= () =>console.log('Estoy comiendo')
}
class Dog extends Animal {
  weight = 20;
  age = 8;
  bark = () =>console.log('Guau Guau Guau')
}

puppy = new Dog()
puppy.bark()
puppy.eat()