// "use strict"; // - it's help us to avoid wrong delearation-

// * ---- Without var keyword we can declear a variable .
myName = "Ishaan"; // We Don't use var keyword but we are able to declear the value and no error. (Not use it, after some time may be it will make trouble). (--- Not recomended ---)
// we can use strict mode to avoid if we use strict mode it will give an error.
console.log(myName); // outPut - Rony


// * -------- var VS let -------------- *
// 01a) ----- variable using var
var firstName = "Rohit";
console.log(firstName); // outPut - Rohit

// 01b) ----- variable using let
let lastName = "Joshi";
console.log(lastName); // output - Joshi

// 02a) var firstName = "Ramu" (We can use it but future it will mess your code.)

// 02b) let lastName = "Goshi" ( ---- We can't declear let with multiple same name, And it's help to make error free code. (-- Recomended ---)
// Now we should (only variable name needed and can change or update the value)
lastName = "Goshi";
console.log(lastName);

// * ----- summary ---- *
// ----- 001) big diff - let and var is same name can be declear multipal time with var key word. but in let one name for one time. if you want to change value just type the variable name and change the value.
// ----- 002) One more diff - let is block-scope and var is function-scoped or globally-scoped 


// * ------ "{}" - if you use bracket it's called block ------ *
// * ------ var belongs to function-scoped or globally-scoped ----- *
var a = 5;
console.log(a); //output - 5
{
  a = 10;
  console.log(a); // output - 10
}
console.log(a); // output - 10


// * ----------- let is block-scope ------------- *
let numberB1 = 5;
console.log(numberB1); //output - 5
{
  // -- Here ( outside numberB1 value is different but inside block numberB1 is different.)
  let numberB1 = 10;
  console.log(numberB1); // output - 10
}
console.log(numberB1); // output - 5
// -- outside the block numberB1 value is 5 and output came from 63 number line code. 


// * ------- let and const almost same --------- *
// different is cosnt can't be change throw-out the program. const means constent.
// const have also block-scope. 


// * -------- Notes ------ * 
// 1) "use strict" - it's a method use for unwanted error.
// 2) var don't use. (Function scope)
// 3) let and const use every time. (block scope)
// 4) inside the block value can't acess from outside the block normally. 
// 5) We can acess outside declear value, from inside the block,  when few value which is not       present in our inside block we can call from outside our block.  