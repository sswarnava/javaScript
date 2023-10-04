// JavaScript support different kinds of loops
// Every loop is has three part -
// initial value. ( where should loop start And this value will update every time-loop).
// condition ( will be there to check the condition. if condition will true then loop will run).
// next is - increment OR decrement the value.

// * -- 01) while-loops through a block of code while a specified condition is true -- *
let while_loops = 0;
while (while_loops < 5) {
  while_loops++;
  console.log("New Number is", while_loops);
}
//Output -
// New Number is 1
// New Number is 2
// New Number is 3
// New Number is 4
// New Number is 5

// * -- 02) do/while - also loops through a block of code while a specified condition is true -- *
let do_while = 50;
// This loop check the condition at the end.
// If Conditon is false loop we run one time atleast. Because condition check at the last.
// loop will run first after that it will check the condition.
do {
  do_while++;
  console.log("New Number is", do_while);
} while (do_while < 55);
//Output -
// New Number is 51
// New Number is 52
// New Number is 53
// New Number is 54
// New Number is 55

// * -- 03) for - loops through a block of code a number of times -- *
for (let for_loops = 100; for_loops < 105; for_loops++) {
  // first variable use to store a value, this value use for starting point of any loop. From Where Should i start the loop help the first variable. Also we can say it's initial value and leter it will update every time after one loop completation. we can give any name for this variable name.
  // secound is one Condition from where to where loop will run, we set a conditin here.
  // Third is increment or decrement.
  console.log("New Number is", for_loops);
  // first variable (for_loops) will update every time after one loop completed.
}
//Output -
// New Number is 100
// New Number is 101
// New Number is 102
// New Number is 103
// New Number is 104

// * -- Another example off for loop 
let index = 0
for (; index < 5; index++) { // We ca declear the starting point variable in out side seprately.
  console.log(index);
}
// OP - 1, 2, 3 , 4

// * -- 04) for/in - loops through the properties of an object -- *

// syntex -
//      for (key in object) {
//          ----- code block to be executed ---------
//      }

// key means value name or value identyfire. Example - fname or lname or age.
// obJect means we have to create a object from where we tring to acess the value . ex - person

//Exeample -
const person = { fname: "John", lname: "Doe", age: 25 };
let txt = "";
for (let x in person) {
  txt += person[x] + " ";
  // using object name with [] can acess possible. (person is object and x is the key name) ex - person[x]
}
console.log(txt);
//Output - John Doe 25

// * -- 05) for/of - loops through the values of an iterable object -- *
const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
  // cars are an objects. Everyloop time one item can store in x and after end the loop the x value will be change for the next loop. Every loop time one time store from cars object and get the value, next time next loop, x value will be next item.
  // first loop = cars[0]; cars[0] will be store value in x (any variable can be use)
  // secound loop = cars[1]; next step x value will be cahange from cars[0] to cars[1]. so new value is cars[1] value.
  // last loop = cars[2]; secound step will be repate.

  console.log(x);
}
// output -
// BMW
// Volvo
// Mini

// * -- 06) forEach

const carBrandName = ["Audi", "BMW", "MG", "TATA"]
// arrow function OR a normal function can use as a callback function 
carBrandName.forEach((brandName) => {
  console.log(`car brand names are ${brandName}`)
})
// Foreach can't return any value. If we try to return any value, will give undifiend.
// So have one soluction for this
const filterNumberArray = [1, 2, 3, 4, 5, 6, 7, 8]
const greaterThanFive = filterNumberArray.filter((num) => {
  return num > 5
})
console.log(greaterThanFive); // OP - [ 6, 7, 8 ] ( Only Greater Than Five can be print)

// *-- map --*
const addTen = filterNumberArray.map((num) => num + 10)
console.log(addTen) // OP - [ 11, 12, 13, 14, 15, 16, 17, 18 ]
console.log(typeof addTen); // OP - object

// * -- reduce -- *
const newArrays = [1, 2, 3]
const totalSum = newArrays.reduce((accumelator, currval) => {
  console.log(`accumelator value is ${accumelator} and currval is ${currval}`);
  return accumelator + currval
}, 0) // 0 is the starting value. accumelator value.
console.log(totalSum); // OP - 6
// OP - accumelator value is 0 and currval is 1
// accumelator value is 1 and currval is 2
// accumelator value is 3 and currval is 3  -- last calculation did't print here.

// * ------ Notes ------ *
// while loop (Not recomended)
// For loop Ex-(starting point variable; connditon; inrement/decrement)
// For can execute without start point variable Ex- 51 line
// for-in can give only key, after got the key we have to acesss the value using object with key.
// for-of use to get all the value derictly one by one from array. 
// for-in mainly use in object. key pair value 
// for-of use for array. 
// forEach use to print direct value.
// forEach need a callback function.
// forEach can sue for array but can't use for object, I got an Error.
// If we try to return any value using filerEach than we have to declear a empty array and push it using condition form inside the foreach block.
// reduse mainly use for add few value and then return a value. Real example is - shopping cart.
