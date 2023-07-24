// JavaScript supports different kinds of loops:

// Every loop is has three part -
// initial value. ( where should loop start And this value will update every time-loop).
// condition ( will be there to check the condition. if condition will true then loop will run).
// next is - increment OR decrement the value.

// 01) while-loops through a block of code while a specified condition is true
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

// 02) do/while - also loops through a block of code while a specified condition is true
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

// 03) for - loops through a block of code a number of times
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

// 04) for/in - loops through the properties of an object

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

// for/of - loops through the values of an iterable object
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
