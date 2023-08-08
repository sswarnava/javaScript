// -----new Keyword
// function createUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// }
// const user1 = new createUser('harshit', 19);
// console.log(user1); // OP - {firstName: 'harshit', age: 19}

// new keyword
//      1. empty object this = {}
//      2. return this


// One example
function creatUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
};

creatUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`
}

// Here we just call and pass the data.
const newUser1 = new creatUser('Ishaan', 21);
console.log(newUser1); // OP - {firstName: 'Ishaan', age: 21}

const user1Info = newUser1.about();
console.log(user1Info); // OP - Ishaan is 21 years old