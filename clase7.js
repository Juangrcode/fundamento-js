var Juan = {
    name: 'Juan',
    lastname: 'Gonzalez',
    age: 28,
    engineer: false,
    cook: false,
    singer: true,
    dj: false,
    guitarist: false,
    drone: false
}
var andres = {
    name: 'Andres',
    lastname: 'Gomez',
    age: 17
}

const FULL_AGE = 18;


function isOldOfAge(person)
{
    return person.age >= FULL_AGE;
}
function printIfIsOlderOfAge(person)
{
    if (isOldOfAge(person))
    {
        console.log(`${person.name.toUpperCase()}` + ` ${person.lastname.toUpperCase()} is ` + ' older of age' )
    }
    else{
        console.log(`${person.name.toUpperCase()}` + ` ${person.lastname.toUpperCase()} is ` + ' less of age')
    }
}
printIfIsOlderOfAge(Juan)
printIfIsOlderOfAge(andres)

function printProfetional(person)
{
    console.log(`${person.name} es:`);

    if (person.engineer) {
        console.log('engineer');
    } else{
        console.log('dont is engineer')
    }
    if (person.cook) {
        console.log('cook');
    }

    if (person.singer) {
        console.log('singer');
    }

    if (person.dj) {
        console.log('dj');
    }

    if (person.guitarist) {
        console.log('guitarist');
    }

    if (person.drone) {
        console.log('drone');
    }
}


printProfetional(Juan);

