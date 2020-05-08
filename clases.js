function person(name, lastname){
  this.name = name
  this.lastname = lastname
  this.age = 20
}

person.prototype.greet = function (){
  console.log(`Hello, I call ${this.name} ${this.lastname} and have ${this.age}`)
}

var juan = new person('Juan', 'Gonzalez')
var andres = new person('Andres', 'Lopez')
var vale = new person('Valentina', 'Gonzalez')
