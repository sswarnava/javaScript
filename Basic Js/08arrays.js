// ---------- Arrays ----------------
let fruits = ["apple", "mongo", "grapes"];
// we can access entire arrays at a time using array name. ex- fruits
console.log(fruits);
// OP - ['apple', 'mongo', 'grapes']

let number = [1, 2, 3, 4];
console.log(number);
//OP - [1, 2, 3, 4]

let miexdDatatype = [1, 2, 4, "Hello", "car"];
console.log(miexdDatatype);
//OP - [1, 2, 4 'Hello', 'car']

// We access arrays using index number also. First array index is 0 and secound is index 1 and third index is 2 and so on in a same order.
// let fruits = ["apple", "mongo", "grapes"];
// indexPosition    0        1         2

console.log(fruits[0]); // OP - apple
console.log(fruits[1]); // OP - mongo
console.log(fruits[2]); // OP - grapes

// We can change the value of any index position in our array.
fruits[1] = "banana";
console.log(fruits);
// OP - ['apple', 'banana', 'grapes']

// We can change the entire value of our arrays.
fruits = ["a", "b", "c"];
let myNewArrays = fruits;
console.log(myNewArrays);

// type of Array 
console.log(typeof fruits); // OP - object (So array is object)
// If you want to check specificaly it is array or not than use- Array.isArray(array_name)
console.log(Array.isArray(fruits)); // OP - true (Means it is array)

