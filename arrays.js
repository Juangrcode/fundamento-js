var juan = {
    nombre: 'Juan',
    apellido: 'Gonzalez',
    edad: 18,
    altura: 1.75,
    quantityOfBooks: 128
}

var cesar = {

    nombre: 'Cesar',
    apellido: 'Urrea',
    edad: 18,
    altura: 1.72,
    quantityOfBooks: 180
}

var clifort = {

    nombre: 'Clifort',
    apellido: 'Collins',
    edad: 19,
    altura: 1.58,
    quantityOfBooks: 56
}

var paula = {

    nombre: 'Paula',
    apellido: 'Benavides',
    edad: 21,
    altura: 1.72,
    quantityOfBooks: 45
}

var natalia = {

    nombre: 'Natalia',
    apellido: 'Lizcano',
    edad: 18,
    altura: 1.82,
    quantityOfBooks: 123
}

var jhonatan = {

    nombre: 'Jhonatan',
    apellido: 'Lizcano',
    edad: 19,
    altura: 1.93,
    quantityOfBooks: 89

}

const isHigh = person => person.altura > 1.8
const isLow = person => person.altura < 1.8
var persons = [juan, cesar, clifort, paula, natalia, jhonatan]

var personsHigh = persons.filter(isHigh)
var personsLow = persons.filter(isLow)
//var personsHigh = persons.filter(function (person) {
//    return person.altura > 1.8
//})

const passHeightTocm = person => ({...person,altura: person.altura * 100})

var personsCms = persons.map(passHeightTocm)


//var acum = 0

//for (var i = 0; i < persons.length; i++) {
//    acum = acum + persons[i].quantityOfBooks
//}
const reducer = (acum, {quantityOfBooks}) => acum + quantityOfBooks


var totalOfBooks = persons.reduce(reducer, 0)


console.log(`In total all have ${totalOfBooks} books`)