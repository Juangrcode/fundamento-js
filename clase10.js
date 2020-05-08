var counter = 0;

const rains = () => Math.random() < 0.25

function times1(times) {
    return times === 1 ? 'time' : 'times';
}
do {
    counter++
} while (!rains())

console.log(`I was to see if to be rains ${counter} ${times1(counter)}`)