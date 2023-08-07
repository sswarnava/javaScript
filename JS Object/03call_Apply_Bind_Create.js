// ---- The JavaScript call() Method
const user = {
    fullInfo: function () {
        console.log(this.firstName, this.age)
    }
}
const user1 = {
    firstName: "Rohan",
    age: 15,

}
const user2 = {
    firstName: "Mohit",
    age: 18,
}
user.fullInfo.call(user1); // OP - Rohan 15
user.fullInfo.call(user2); // OP - Mohit 18

// In a normal object and method where we have to assign a modhod with a property 
// Example property means (about) but in call method we can do same work but without assign a property. 
// Using call method we can call directly whitout any property. So this is the advantage.                 

// function personInfo() {  // -- It's a method
//     let personInfo = `Person Full Name is ${this.firstName} ${this.lastName}`;
//     return personInfo;
// }
// const person1 = {
//     firstName: "Rohit",
//     lastName: "Joshi",
//     about: personInfo // -- It's a propaerty
// }

// ---- The call() Method with Arguments
const person = {
    fullInfo: function (hobby, city) {
        console.log(this.firstName, this.age, hobby, city)
    }
}
const person1 = {
    firstName: "Rohit",
    age: 19,
}
person.fullInfo.call(person1, "guiter", "kolkata"); // OP - Rohit 19 guiter kolkata


// ------ Apply Method
// It is an example of apply method. 
// Call and apply both allmost same, Just we have to pass arguments in a array form in apply method
person.fullInfo.apply(person1, ["guiter", "kolkata"]); // OP - Rohit 19 guiter kolkata


// ------- Bind Method
// It is an example of bind method.
// bind is like a function. We store in a variable and leter we will can use this function.
const bindFunction = person.fullInfo.bind(person1, "guiter", "kolkata");
bindFunction();
// OP - Rohit 19 guiter kolkata
