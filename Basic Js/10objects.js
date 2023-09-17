// * ------- how to create objects ------ *
// ----- We can store all type's of data in an object
// -- object literals

const person = {
  name: "Harshit",
  age: 22,
  hobbies: ["guitar", "sleeping"],
};

// -- person is the whole object
console.log(person); // Output {name: 'Harshit', age: 22, hobbies: Array(2)}

// -- how to access data from obiects
console.log(person.name); // OP - Harshit (dot notation)
console.log(person["name"]); // OP - Harshit (bracket notation) (recomended)

console.log(person.age); // OP - 22
console.log(person.hobbies); // OP - ["guitar", "sleeping"]
console.log(person.hobbies[1]); // OP - sleeping

// -- how to add key value pair to objects
person.gender = "male"; // (dot notation)
// person.[gender] = "male"; Both will be work same (bracket notation) recomended
console.log(person); // OP - {name: 'Harshit', age: 22, hobbies: Array(2), gender: 'male'}

// -- for in loop to acess object
for (let key in person) {
  console.log(person[key]);
}
// Output {name: 'Harshit', age: 22, hobbies: Array(2)}

// -- computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
  [key1]: value1,
  [key2]: value2,
};
console.log(obj);
// OP -
// objkey1: "myvalue1"
// objkey2: "myvalue2"

// -- Object destuructring
const car = {
  brandName: "audi",
  carName: "A6",
};

const { brandName, carName } = car; // Name should be same as object keyname
console.log(brandName); // OP - audi

// -- objects inside array
const users = [
  { userId: 1, fullName: "abc" },
  { userId: 2, fullName: "mno" },
  { userId: 3, fullName: "xyz" },
];
for (let user of users) {
  console.log(user["fullName"]);
}
// OP - abc
// mno
// xyz

// ---- combine 2 objects
const object1 = { a: 1, b: 2, c: 3 }
const object2 = { x: 7, y: 8, z: 9 }

const finalObject1 = Object.assign({}, object1, object2)
console.log(finalObject1); // OP - { a: 1, b: 2, c: 3, x: 7, y: 8, z: 9 }

// Recomended
const finalObject2 = { ...object1, ...object2 }
console.log(finalObject2); // OP - { a: 1, b: 2, c: 3, x: 7, y: 8, z: 9 }


// * ----- Notes ------- *
// 01) If we have objects like - 
const fullName = {
  "full name": "Ishaan M"
}
// console.log(fullName.full name);   -- we cant's acess using . operation.
console.log(fullName["full name"]); // we have to use bracket notation. 
// OP - Ishaan M

// 02) acess a symbol data we have to use bracket notation.
let mySym = Symbol('key1')
const mySymAcess = { [mySym]: "mykey1" } // mySym is a symbol data type.
console.log(mySymAcess[mySym]) // OP - mykey1
console.log(mySymAcess) // OP - { [Symbol(key1)]: 'mykey1' }

// 03) Using spread operator we can combine more than one objects.
// 04) bracket notation is one importent concept.
// 05) objects key is also a string. 