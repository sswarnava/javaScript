// if else condition
// Which condition is ture that code will execute. Other code will skip

// ----Types------
// 001) Only if condition (Here we have only one condition)
let age = 19;
if (age > 18) {
  console.log("Your are above 18 years");
}
// OP - Your are above 18 years

// 002) if-else condition (Here we have two condition , if condition and else condition)
age = 19;
if (age > 18) {
  console.log("Your are above 18 years");
} else {
  console.log("Your are not above 18 years");
}
// OP - Your are above 18 years (because age is 19, it's greaterThan 18)
// Here if part is executed
age = 17;
if (age > 18) {
  console.log("Your are above 18 years");
} else {
  console.log("Your are not above 18 years");
}
// OP - Your are not above 18 years (because age is 17, it's lessThan 18)
// Here else part is executed

//003) if else-if else condition (Here we have minimum three condition , if condition and else-if condition and else condition)
age = 18;
if (age > 18) {
  console.log("Your are above 18 years");
} else if (age == 18) {
  console.log("Your are 18 years");
} else {
  console.log("Your are not above 18 years");
}
// OP - Your are 18 years (Age value is now 18)
// Here else if part is executed

// ------- Another Short Conditional Operator ---------
// Ternary operator - Can say single line Conditional operator.
let kidAge = 8;
let drink = kidAge < 5 ? "Milk" : "Cofee"; // Logic - if kidAge is bellow 5 output or return will be milk and kidAge is greater than 5 then will returen Cofee.
console.log(drink); // OP - Cofee
