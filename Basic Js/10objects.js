// -- how to create objects
// We can store all type's of data in a object
const person = {
  name: "Harshit",
  age: 22,
  hobbies: ["guitar", "sleeping"],
};

// -- person is the full object
console.log(person);
// Output {name: 'Harshit', age: 22, hobbies: Array(2)}

// -- how to access data from obiects
console.log(person.name); // OP - Harshit (dot notation)
console.log(person["name"]); // OP - Harshit (Both are same) bracket notation
console.log(person.age); // OP - 22
console.log(person.hobbies); // OP - ["guitar", "sleeping"]
console.log(person.hobbies[1]); // OP - sleeping

// -- how to add key value pair to objects
person.gender = "male"; // (dot notation)
// person.[gender] = "male"; Both will be work same (bracket notation)
console.log(person);
// OP - {name: 'Harshit', age: 22, hobbies: Array(2), gender: 'male'}

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
