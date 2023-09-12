// --------- 3 types of Variable in js ( var, let, const) --------------

// -------- Declare a variable --------
var number1 = 10; // var is normal variable. (Not recomended).
let number2 = 20; // let is advance type variable with extra freature (ex- block scope). (Recomended)
const number3 = 30; // const use for constent. (Recomended)

// ------- Lets Use and display the output the variable ---------
console.log(number1); // Output - 10
console.log(number2); // Output - 20
console.log(number3); // Output - 30
console.log(number1 + number2 + number3); // Output: 60  ( We can use multiple variable in an operation)

// ------- Lets try to change the value of the variable (Assign the new value) ------
number1 = 110;
number2 = 220;
// number3 = 330; ( But we can't change the value because it's a constent variable. )
console.log(number1, number2); // Output - 110 220

// ----------- Rules for naming variables ------------
//    01) Can't start with number. ( ex- 01number (invalid) || ex- number01 (valid) )
//    02) Space is invalid. ( ex - first name (invalid) )
//    03) Special Symbol's are not allowed.
//    04) Can use only undersore ( _ ) || dollar ( $ ) symbol. ( ex _firstName || first_name || firstName_ || $firstName || first$name || firstName$ )
//    04) start with small letter and use camelCase ( ex- firstName or lastName )

// --------- Notes -------
// 1) How to declear a variable.
// 2) How to acess and display the output.
// 3) Basic rule for naming.
// 4) Don't use var. We will use let and const
// 5) We can't change the const value , (only one time we can assign)
// 6) camelCase is recomended for declear a variable.