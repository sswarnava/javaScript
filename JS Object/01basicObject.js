// ------- Basic Object
// javaScript variables can also contain many values.
// Objects are variables too. But objects can contain many values.
// Object values are written as name : value pairs (name and value separated by a colon).

let person1 = { firstName: "Swarnava", lastName: "Mudi", age: 20, eyeColor: "black" };
console.log(typeof (person1)); // OP - object
console.log(person1); // OP - {firstName: 'Swarnava', lastName: 'Mudi', age: 20, eyeColor: 'black'}
console.log(person1.firstName); // OP - Swarnava

// It is a common practice to declare objects with the const keyword.
const person2 = { firstName: "Ishaan", lastName: "Mudi", age: 22, eyeColor: "black" };
console.log(person2); // OP - {firstName: 'Ishaan', lastName: 'Mudi', age: 22, eyeColor: 'black'}
console.log(person2.lastName); // OP - Mudi

// ------- Using an Object Literal
// This is the easiest way to create a JavaScript Object.
const person3 = {
    firstName: "Rohit",
    lastName: "Gupta"
};
// ----------- OR
    // const person3 = {}
    // person3.firstName = "Rohit";
    // person3.lastName = "Gupta";


// --------- Create a single object, with the keyword new.
const person4 = new Object();
person4.firstName = "Ramu";
person4.lastName = "Gupta";