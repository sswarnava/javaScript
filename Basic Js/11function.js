// ------ Function in js
function happyBirthday(number1, number2) {
  console.log("Happy Birthday to you........");
}
happyBirthday();
// Output : Happy Birthday to you........

// Return a value
function add(number1, number2) {
  return number1 + number2;
}
let totalAdd = add(5, 9);
console.log(totalAdd); // OP - 14

// ----- Function expression (same work as a normal function)
const myNewFunction = function () {
  console.log("Hello World");
};
myNewFunction(); // OP - Hello World

// ----- Arrow Function (same work as a normal function)
const myNewFun1 = () => {
  console.log("Hello World From arrow Fun");
};
myNewFun1(); // OP - Hello World From arrow Fun
