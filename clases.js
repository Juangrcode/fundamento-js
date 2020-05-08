class person{
  constructor(name, lastname, age ,height){
    this.name = name
    this.lastname = lastname
    this.age = age
    this.height = height
  }
}

function IAmTall({height}){
  
  return height >= 1.8
}

person.prototype.greet = function (){
  console.log(`Hello, I call ${this.name} ${this.lastname} and have ${this.age}`)
}

var juan = new person('Juan', 'Gonzalez', 17, 1.8)
var andres = new person('Andrecito', 'Lopez', 20, 1.84)
var vale = new person('Valentina', 'Gonzalez', 20, 1.6)


var box = [juan, andres, vale]


var personsHigh = box.filter(IAmTall)
console.log(personsHigh)