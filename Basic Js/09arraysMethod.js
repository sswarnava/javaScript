// * ---------- Array methods ----------- * 
let fruits = ["apple", "mango", "grapes"];
console.log(fruits); // OP - ['apple', 'mango', 'grapes']

// -- 01) Array length
console.log(fruits.length); // OP - 3

// -- 02) Array toString()
console.log(fruits.toString()); // OP - apple,mango,grapes

// -- 03) Array push()  || (at the end added)
fruits.push("banana", "green_apple"); // You can add one or multiple value
console.log(fruits); // OP - ['apple', 'mango', 'grapes', 'banana', 'green_apple']

// -- 04) Array pop() || [pop from the end]
console.log(fruits.pop()); // OP - green apple (Only one can be pop at a time)

// -- 05) Array shift() [ shift remove the element from the first ]
fruits.shift();
console.log(fruits); // OP - ['apple', 'mango', 'grapes', 'banana']

// -- 06) Array unshift()  [Unshift add the element from first]
fruits.unshift("green_apple"); // we can add one or more than one.
console.log(fruits); // OP - ['green_apple', 'apple', 'mango', 'grapes', 'banana']

// -- 07) Array concat()
const classGirls = ["Rashi", "Rohini"];
const classBoys = ["Rohit", "Shaam"];
const classTotal = classGirls.concat(classBoys);
console.log(classTotal); // Op - ['Rashi', 'Rohini', 'Rohit', 'Shaam']

// -- 08) Array slice()
let myNum1 = [1, 2, 3, 4, 5, 6]
let arraySlice = myNum1.slice(0, 3); 
console.log(arraySlice); // OP - [ 1, 2, 3, 4, 5, 6 ]
console.log(myNum1); // OP - [ 1, 2, 3 ]

// -- 09 Array splice() [splice method modify the original array]
let arraySplice = myNum1.splice(0, 3);
console.log(arraySplice); // OP - [ 1, 2, 3 ]
console.log(myNum1); // OP - [ 4, 5, 6 ] 


// * ---------- advance array methods --------- *

// ----- 01) using forEach to acess the array item ----
const numbers = [2, 6, 8, 7];

function multipleBy2(number, index) {
  console.log(`index is ${index} number is ${number * 2}`);
}

numbers.forEach(multipleBy2);
// Output ---
// index is 0 number is 4
// index is 1 number is 12
// index is 2 number is 16
// index is 3 number is 14

// forEach takes two input one is value and another is index position.

// -------- 02) Using Map Methods acess the array item ------
const square = (number) => {
  return number * number;
};

const squareNumber = numbers.map(square);
console.log(squareNumber); // Output - [4, 36, 64, 49]

// ---------- 03) Using Filter method ----
const isEven = (number) => {
  return number % 2 === 0;
};
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// ----------- 04) reduce ------
const newNumbers = [1, 2, 3, 4, 5];
const sum = newNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);
// Accumulator, CurrentValue, return
//     1              2           3
//     3              3           6
//     6              4           10
//    10              5           15
// Output is - 15

// * ----- Notes ------ *
// pop and push is faster than shift and unshift
// splice methhod modify the original array
// map use to acess the array data.
// array.push() || array.pop() || array.length || array.slice || array.splice etc.
// array.reduse also one importent. and filter also.