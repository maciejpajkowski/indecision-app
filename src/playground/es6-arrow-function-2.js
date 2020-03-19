// arguments object - no logner bound with arrow functions

const add = (a,b) => {
    return a + b;
};
console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: 'Maciej',
    cities: ['Warsaw', 'Krakow', 'Gdansk'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// CZELEN:

const multiplier = {
    // numbers - array of numbers that we want to multiply
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
    numbers: [11,21,13],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());