// ---------- Arrays ----------------
let fruits = ["apple", "mango", "grapes"];
// we can access entire arrays at a time using array name. ex- fruits
console.log(fruits);
// OP - ['apple', 'mango', 'grapes']

let number = [1, 2, 3, 4];
console.log(number);
//OP - [1, 2, 3, 4]

let miexdDatatype = [1, 2, 4, "Hello", "car"];
console.log(miexdDatatype);
//OP - [1, 2, 4 'Hello', 'car']

// We access arrays using index number also. First array index is 0 and secound is index 1 and third index is 2 and so on in a same order.
// let fruits = ["apple", "mango", "grapes"];
// indexPosition    0        1         2

console.log(fruits[0]); // OP - apple
console.log(fruits[1]); // OP - mango
console.log(fruits[2]); // OP - grapes

// We can change the value of any index position in our array.
fruits[1] = "banana";
console.log(fruits);
// OP - ['apple', 'banana', 'grapes']

// We can change the entire value of our arrays.
fruits = ["a", "b", "c"];
let myNewArrays = fruits;
console.log(myNewArrays);

// typeof Array to check it's a array or not
console.log(typeof fruits); // OP - object (So array is object)
// If you want to check specificaly it is array or not than use- Array.isArray(array_name)
console.log(Array.isArray(fruits)); // OP - true (Means it is array)

// ------- Clone Array ----------
let array1 = ["item1", "item2", "item3"];
console.log(array1);
// OP - ['item1', 'item2', 'item3']

let array2 = array1.slice(0);
console.log(array2);
// OP - ['item1', 'item2', 'item3']

// Here both are different array1 and array2
// if i change array2 it will not reflalct in our array1 and same for array1 also

array1.push("item4");
console.log(array1); // OP - ['item1', 'item2', 'item3', 'item4']
console.log(array2); // OP - ['item1', 'item2', 'item3']
// We copy from array2 from array1 but now both are different.

// Another way copy array using concat method:
let array3 = [].concat(array2);
array3.push("item4");
console.log(array3);

// Another way copy array using spread operator:
let array4 = [...array3];
array4.push("item5");
console.log(array4);
// OP - ['item1', 'item2', 'item3', 'item4', 'item5']

fruits = ["Banana", "Orange", "Apple", "Mango"];
// -- Get the all value using for loop --
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// OP -
// Banana
// Orange
// Apple
// Mango

// -- Get the all value using while loop --
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

// --- Get the all value using do while loop ---
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

// array destructuring

const myArray = ["value1", "value2"];

// We can use this simple way But we don't use it -
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console. log("value of myVar1", myVar1);
// console. log("value of myVar2", myVar2);

// Mostly we use this type of array destructuring
let [myVar1, myVar2] = myArray; // So here value1 will store myvar1 and same for value2 will store in myvar2
console.log(myVar1); // OP - value1
