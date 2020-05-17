class person{
  constructor(name, lastname, age ,height){
    this.name = name
    this.lastname = lastname
    this.age = age
    this.height = height
  }
  greet(){
    console.log(`Hello, I call ${this.name} ${this.lastname} and have ${this.age} years`)
  }
  IAmTall(){
    return this.height >= 1.8
  }
}

class developer extends person{
  constructor(name, lastname, age, height){
    super(name, lastname, age, height)
  }
  greet(){
    console.log(`Hello, I call ${this.name} ${this.lastname} and i am a developer`)
  }
}

developer.prototype.greet = function() {
  console.log(`Hello, I call ${this.name} ${this.lastname} and i am a developer`)
}




//var juan = new person('Juan', 'Gonzalez', 17, 1.8)
//var andres = new person('Andrecito', 'Lopez', 20, 1.84)
//var vale = new person('Valentina', 'Gonzalez', 20, 1.6)

