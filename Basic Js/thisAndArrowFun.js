// * -- Use of this in object --*
const user1 = {
    name: "Ishaan",
    age: 21,
    about: function () {
        console.log(`${this.name} is ${this.age} years old.`);
        console.log(this); // it will return current context. (means - what is current value { current value of name - ishaan, age - 21})
    }
}
user1.about() // OP - Ishaan is 21 years old.

// -- update the value --
user1.name = 'Mohit'
user1.age = '22'
user1.about() // OP - Mohit is 22 years old. (Here value is updated) but here value is different(means - what is current value { current value of name - mohit, age - 22})

// * -- this doesn't work on arrow function --*
const user2 = {
    name: "Ishaan",
    age: 21,
    about: () => {
        console.log(`${this.name} is ${this.age} years old.`);
        console.log(this); // it will return current context.
    }
}

user2.about() // OP - undefined is undefined years old.

// -- Print this in different envirolment - 

console.log(this) // {} empty object

function checkThis() {
    console.log(this);
}
// checkThis(); // got global properties.

const checkThisValue = function checkThis() {
    console.log(this);
}
// checkThisValue(); // same got global properties.

const thisValue = () => {
    console.log(this);
}
thisValue(); // {} empty object

// * ----- Notes ------ *
// this doesn't work on arrow function.
// this use for current sate (current context). Also it helps when we update the data on object.
// this support block scope.
// On node 'this' is empty object but in browser 'this' has lots of properties which is aviable in globally.
// * diff between normal function and arrow function is when we this we got some properties, but is arrow fun we got a empty object. 
// We can use normal function as a method on our object, But arrow function can't possible. 