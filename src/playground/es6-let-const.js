var nameVar = 'Maciek';
var nameVar = 'Mike'; // var can be completely redefined
console.log('nameVar:', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'; // let cannot be completely redefined
console.log('nameLet', nameLet);

const nameConst = 'Frank'; // const cannot be changed at all
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Maciej Pajkowski';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
    // let & const are accessible only withing the curly braces block scope
}

console.log(firstName);