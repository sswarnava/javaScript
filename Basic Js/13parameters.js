// -- 01 default parameters

function addTwo(a, b = 3) {
  // bydefalut b value is 3, If user forget to provide b value then it will take automaticly dafalut value.
  return a + b;
}
let ans = addTwo(4, 5);
console.log(ans); // OP - 9

ans = addTwo(7); // Here will give only one value so it will take defalut value of b and then add and return the value.
console.log(ans); // OP - 10

// -- 02 rest parameter
function restPara(a, b, ...c) {
  console.log(`a is ${a}`); // OP - a is 1
  console.log(`b is ${b}`); // OP - b is 2
  console.log(`c is ${c}`); // op - c is 3,4,5,6,7,8,9
  // rest parameter use to store many value in a one variable, Or we can say rest of the value will be store in any valiable
}
restPara(1, 2, 3, 4, 5, 6, 7, 8, 9);

// --Another example using spred Operator.
function addAll(...numbers) {
  console.log(numbers);
  console.log(Array.isArray(numbers)); // true

  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  console.log(total); // OP - 15
}
addAll(1, 2, 3, 4, 5);
