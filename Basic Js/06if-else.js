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
// 0004) Ternary operator - Can say single line Conditional operator.
let kidAge = 8;
let drink = kidAge < 5 ? "Milk" : "Cofee"; // Logic - if kidAge is bellow 5 output or return will be milk and kidAge is greater than 5 then will returen Cofee.
console.log(drink); // OP - Cofee

//------------ And operator && --------------
age = 43;
// && - andSymbol use to check more than 2 condition, and it should match the condition after that it will return true. If one of the condition does't match, that time it will return false.
if (age >= 18 && age <= 60) {
  console.log("You can drive the car");
} else {
  console.log("You can't drive the car");
}

//------------ Or operator || --------------
// If any one conditon will true then it will return us ture.
// (or opertor || ) aither condition 1 or condition 2 is true then it will return true value(if-block). otherwise it will return false value(else-block).
if (age >= 18 || age <= 60) {
  console.log("You can drive the car");
} else {
  console.log("You can't drive the car");
}
