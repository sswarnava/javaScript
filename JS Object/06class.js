// ---- Intro of Class
class createUser {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    about() { return `${this.firstName} is ${this.age} years old` };
}

const user1 = new createUser('Ishaan', 21);
console.log(user1)
// Using class it is to easy to do this same work.


// ---- It is doing same but without class and constructor 
// function creatUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// };

// creatUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old`
// }

// const newUser1 = new creatUser('Ishaan', 21);



// -------- super class and sub class using extends

// Super class
class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() { return `${this.name} is eating` }
};

const animal1 = new animal("tom", 2);
console.log(animal1.eat()); // OP - tom is eating

// We went same kind of a another class called dog
// We don't went to copy same animal class code so we can extends it from animal super class
// -- Sub class
class dog extends animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    dogInfo() { return `${this.name} Age is ${this.age}` }
    runSpeed() { return `${this.name} speed is ${this.speed} kmph` }
};
const myDog1 = new dog("pop", 2, 12);

console.log(myDog1.eat()); // OP - pop is eating
console.log(myDog1.dogInfo()); // OP - pop Age is 2
console.log(myDog1.runSpeed()); // OP - pop speed is 12 kmph
