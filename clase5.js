
var Juan = {
    name: 'Juan',
    lastname: 'Gonzalez',
    age: 17
}

var Dario = {
    name: 'Dario',
    lastname: 'Perez',
    age: 18
}
function printNameAndAge(person)
{
    //hello, my name is juan and have 17 years
    //hello, my name is dario and have 18 years
    var { name } = person;
    var { age } = person;
    console.log('Hello, My name is ' + name.toUpperCase() + ' and have ' + age + ' years.');
}
printNameAndAge(Juan);
printNameAndAge(Dario);

//function printNameInCapitalLetters(person)
{
    //var name = person.name;
    //var { name } = person;
    // console.log(name.toUpperCase());

}
//printNameInCapitalLetters(Juan);
//printNameInCapitalLetters(Dario);
//printNameInCapitalLetters( {name: 'pepito'} );
//printNameInCapitalLetters({ lastname: 'Gomez' });

function birthday(person)
{
    return{
        ...person,
        age: person.age + 1
    }
}
    
