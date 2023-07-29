// ---------- Array methods -----------
let fruits = ["apple", "mango", "grapes"];
console.log(fruits); // OP - ['apple', 'mango', 'grapes']

// 01) Array length
console.log(fruits.length); // OP - 3

// 02) Array toString()
console.log(fruits.toString()); // OP - apple,mango,grapes

// ----- pop and push is faster than shift and unshift --------

// 03) Array push()  || (at the end added)
fruits.push("banana", "green_apple"); // You can add one or multiple value
console.log(fruits); // OP - ['apple', 'mango', 'grapes', 'banana', 'green_apple']

// 04) Array pop() || (pop from the end)
console.log(fruits.pop()); // OP - green apple (Only one can be pop at a time)

// 05) Array unshift()
// Unshift add the element from first
fruits.unshift("green_apple"); // we can add one or more than one.
console.log(fruits);
// OP - ['green_apple', 'apple', 'mango', 'grapes', 'banana']

// 06) Array shift()
// shift remove the element from the first
fruits.shift();
console.log(fruits);
// OP - ['apple', 'mango', 'grapes', 'banana']

// 07) Array concat()
const classGirls = ["Rashi", "Rohini"];
const classBoys = ["Rohit", "Shaam"];

const classTotal = classGirls.concat(classBoys);
console.log(classTotal);
// Op - ['Rashi', 'Rohini', 'Rohit', 'Shaam']

// Array splice()
// Array slice()
let arraySlice = fruits.slice(0, 2); // - 0 and 1 index will be display
console.log(arraySlice);
// OP - ['apple', 'mango']

// ---------- Most Important array methods ---------

// ----- 01 forEach ----
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

// -------- 02 Map Methods ------
const square = (number) => {
  return number * number;
};

const squareNumber = numbers.map(square);
console.log(squareNumber);
// Output - [4, 36, 64, 49]

// ---------- 03 Filter method

const isEven = (number) => {
  return number % 2 === 0;
};
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// ----------- 04reduce ------
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