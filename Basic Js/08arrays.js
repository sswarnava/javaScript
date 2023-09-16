// * ---------- Arrays ---------------- *
let fruits = ["apple", "mango", "grapes"]; // we can access entire arrays at a time using array name. ex- fruits
console.log(fruits); // OP - ['apple', 'mango', 'grapes']

let number = [1, 2, 3, 4];
console.log(number); //OP - [1, 2, 3, 4]

let miexdDatatype = [1, 2, 4, "Hello", "car"];
console.log(miexdDatatype); //OP - [1, 2, 4 'Hello', 'car']

// ---- We access arrays using index number also. First array index is 0 and secound is index 1 and third index is 2 and so on in a same order.
// let fruits = ["apple", "mango", "grapes"];
// indexPosition    0        1         2

console.log(fruits[0]); // OP - apple
console.log(fruits[1]); // OP - mango
console.log(fruits[2]); // OP - grapes

// * ----- Get the value using for loop ----- *
fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// OP -
// Banana
// Orange
// Apple
// Mango

// -- Get the value using while loop --
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
// OP - will be same
// Banana
// Orange
// Apple
// Mango

// --- Get the value using do while loop ---
i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);
// OP - will be same
// Banana
// Orange
// Apple
// Mango

// ---- typeof Array
console.log(typeof fruits); // OP - object (So array is object)
// ---- If you want to check specificaly, is it array or not than use sy - Array.isArray(array_name)
console.log(Array.isArray(fruits)); // OP - true (Means it is array)

// ---- We can change the value of any index position in our array.
fruits[1] = "banana";
console.log(fruits); // OP - ['apple', 'banana', 'grapes']

// ---- We can change the entire value of an arrays. (clone)
fruits = ["a", "b", "c"];
let myNewFruit = fruits;
console.log(myNewFruit); // OP - [ 'a', 'b', 'c' ]
console.log(fruits); // OP - [ 'a', 'b', 'c' ]
// *----  Array follow shallow copy. means heap memory concept. If i change myNewArrays it will chage the value in both (newArray and as well as [myNewFruit].) array dont make copy, array point derictly reference.

// * ------- Another method for Clone an Array ---------- *
let array1 = ["item1", "item2", "item3"];
console.log(array1); // OP - ['item1', 'item2', 'item3']

let array2 = array1.slice(0);
console.log(array2); // OP - ['item1', 'item2', 'item3']

// Here both are different array1 and array2, means slice follow deep copy. (pass just a copy.)
// if i change array2 it will not reflect in array1 and same for array1 also (beacuse here pass only array copy)

array1.push("item4"); // push use to add a array item in last.
console.log(array1); // OP - ['item1', 'item2', 'item3', 'item4']
console.log(array2); // OP - ['item1', 'item2', 'item3']
// Here I pushed a new item in array1 but array2 not change. But array2 copy from array1, and both are different value. (it's follow deep copy)

// ----- Another way to copy array using concat method: -----
let array3 = [].concat(array2);
array3.push("item4");
console.log(array3);

// ----- Another way copy array using spread operator: ----- (recomended)
let array4 = [...array3];
array4.push("item5");
console.log(array4);
// OP - ['item1', 'item2', 'item3', 'item4', 'item5']
// Another syntex - let newArray = [...array1, ...array2, ...array3] || OP - [1,2,3,4,5,6,7,8,9] in a single line. 

// * -------- array destructuring ------------ *
const myArray = ["value1", "value2"];

// ---- We can use this simple way But we don't use it beacause if 100 arrays are present we can't do like that-
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console. log("value of myVar1", myVar1);
// console. log("value of myVar2", myVar2);

// Mostly we use this type of array destructuring
let [myVar1, myVar2] = myArray; // So here value1 will store myvar1 and same for value2 will store in myvar2
console.log(myVar1); // OP - value1

// * ----------- Notes ----------*
// arrays can store same data type value or different data type value in a same array.
// arrays can be acess using array name  
// can be acess using index posintion.
// can be acess using different loop.
// typeof array is object
// array follow shallow copy in genaral.
// using slice method to clone an array, that time follow deep copy.
// using spread clone an array is the best method.
// destructuring is an one useful method to acess.