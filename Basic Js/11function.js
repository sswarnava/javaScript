// * ------ Function in js -------- *
function happyBirthday(number1, number2) {
  console.log("Happy Birthday to you........");
}
happyBirthday(); // Output : Happy Birthday to you........ (function call)
console.log(happyBirthday); // OP- [Function: happyBirthday] just function content

let happyBitdayfun = happyBirthday() // Output : Happy Birthday to you........ (we colled the function that way it's console the output.)

console.log(happyBitdayfun) // OP - undefiend

// Return a value
function add(number1, number2) {
  return number1 + number2;
}
// * Here we have to store the return output. if we not store the function under a variable we cna't get the value or return value.
let totalAdd = add(5, 9);
console.log(totalAdd); // OP - 14

// * ------- Function expression (same work as a normal function) ------- *
const myNewFunction = function () {
  console.log("Hello World");
};
myNewFunction(); // OP - Hello World

// * ----- Arrow Function (same work as a normal function) ------ * 
const myNewFun1 = () => {
  console.log("Hello World From arrow Fun");
};
myNewFun1(); // OP - Hello World From arrow Fun

// * ------- defalut parameter --------- * 
function addTwoNumber( num1 = 6, num2 = 4) { return num1+num2 }
let addResult = addTwoNumber() // Here I forgot to give the value, but function use defalut parameter (6  and 4) 
console.log(addResult) // OP = 10

addResult = addTwoNumber(10) // nam1 = 10 num2 = 4 (I Forgot to give the num2 value.)
console.log(addResult) // OP = 14

// * ------- Notes ------- *
// function keyword use to create a normal function.
// console log use for only console the output.
// if we use return then it will return the output. This time we have to store the function in a variable. 
// functionForAdd vs functionForAdd() - First one return full funtion as it is, secound one use for call the function.
// default paremeter use to set a defalult vlaue in a function, if user forget to give the actual value than it use by defalult.
// arrow function is the one of importent concept. 
