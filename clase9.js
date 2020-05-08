var juan = {
    name: 'Juan',
    lastname: 'Gonzalez',
    age: 17,
    weight: 55
}

console.log(`At the beginnig of the year ${juan.name} weigh ${juan.weight} kg`);

//function increaseOfWeight(person){
//    return person.weight += 200
//}
const INCREASE_WEIGHT = 0.3;
const DAY_OF_THE_YEAR = 365;

const increaseOfWeight = person => person.weight += INCREASE_WEIGHT
const slimDown = person => person.weight -= INCREASE_WEIGHT
const eatALot = () => Math.random() < 0.3
const doSport = () => Math.random() < 0.4

const META = juan.weight - 3;
var days = 0;

while (juan.weight > META) {
    if (eatALot()) {
        increaseOfWeight(juan)
        //aumentar de weight
    }
    if (doSport()) {
        slimDown(juan)
        //adelgazar
    }
    days += 1;
}
console.log(`They passed ${days} days until ${juan.name} slim down 3kg`);

//for (var i = 1; i <= DAY_OF_THE_YEAR; i++) {
//    var random = Math.random()

//    if (random < 0.25) {
//        increaseOfWeight(juan)
//    } else if (random < 0.5) {
//        slimDown(juan)
//    }
//}

//console.log(`At the end of the year ${juan.name} weight ${juan.weight.toFixed(1)} kg`)