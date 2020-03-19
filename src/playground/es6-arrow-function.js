function square(x) {
    return x * x;
};

console.log(square(7));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;


console.log(squareArrow(9));

// CZELEN:
// use arrow functions:
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

const name = 'Mike Smith';

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName(name));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameArrow(name));