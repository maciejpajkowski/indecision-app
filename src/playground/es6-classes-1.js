class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi! I\'m ' + this.name + '!';
        return `Hi! I am ${this.name}!`; // tylda pozwala wstrzykiwać JS do stringa
    }
    getDescription() {
        return `My name is ${this.name}, I am ${this.age} year(s) old. `;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}


// const me = new Student('Maciej Pajkowski', 25, 'Sociology');
// console.log(me.getDescription());
const me = new Traveler('Maciej Pajkowski', 25, 'Warsaw');
console.log(me.getGreeting());

// const other = new Student();
// console.log(other.getDescription());
const other = new Traveler();
console.log(other.getGreeting());