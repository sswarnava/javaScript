// Variable - 3 types - var, let, const

// Declare a variable
var number1 = 10; // var is normal variable. (Not recomended).
let number2 = 20; // let is advance type variable with extra freature (ex- block scope). (Recomended)
const number3 = 30; // const use for constent. (Recomended)

// Use the variable
console.log(number1);
// Output - 10

console.log(number2);
// Output - 20

console.log(number3);
// Output - 30

console.log(number1 + number2 + number3);
// Output - 60
// We can use different variable in an operation.

// change the value of the variable
number1 = 110;
number2 = 220;
// number3 = 330; -- But we can't change the value because it's a constent variable.

console.log(number1, number2);
// Output - 110 220

// Rules for naming variables 
// 01) can't start with number 
// ex- 01number (invalid)
// ex- number01 (valid)

// 02) space is invalid
// ex - first name (invalid)

// 03) vou can use only undersore _ or dollar symbol
// ex- _firstName 0r first_name or firstName_ (valid)
// ex- $firstName 0r first$name or firstName$ (valid)

// 04) start with small letter and use camelCase
// ex- firstName or lastName
