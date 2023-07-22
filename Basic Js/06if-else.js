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

// 06) ----------- Nested if else -------------
let a = 5;
// IF a is true it will exacute the if block
if (a == 5) {
  // IF b is true it will exacute the if block
  let b = 4;
  if (b == 4) {
    let c = 3;
    if (c == 3) {
      let d = 2;
      if (d == 2) {
        console.log("Nested if block");
        // OP - Nested if block
      }
    }
  }
} else {
}

// 05 ----------------- Switch case ----------------
let dayIs = + prompt("Enter one number 1 to 4");
// Prompt is to take input from user.
// + use to convert string to number.

switch (dayIs) {
  case 1:
    console.log("Today is Sunday");
    break;
  case 2:
    console.log("Today is Monday");
    break;
  case 3:
    console.log("Today is Tuesday");
    break;
  case 4:
    console.log("Today is Wednesday");
    break;

  default:
    console.log("Wrong input");
    break;
}

//input is 4
// output - Today is Wednesday
