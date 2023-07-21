// "use strict"; // - it's help us to avoid wrong delearation-

// var VS let

//01) Without var key word
myName = "Ishaan"; // We Don't use var keyword but we are able to declear the value and no error. (Not use it, after some time may be it will make trouble).
// we can use strict mode to avoid
// if we use strict mode it will give an error.
console.log(myName);
// outPut - Rony

// 02) normal declearation
var firstName = "Rohit";
console.log(firstName);
// outPut - Rohit

// 03) Same Name with var keyWord
// here we have used same name with var, repeatedly but This also not good for us. May be some time splleing mistake will create a another unwanted variable.

var firstname = "Mohin"; // like here splle mistake "n"
console.log(firstName); // But output is cap-N Both are different
// outPut - Mohin

// 04) use variable name and change the value -
firstName = "Mohin";
console.log(firstName);

// 005) Now it's time for let -

let lastName = "Joshi";
console.log(lastName);
// output - Joshi

// 06)
// let lastName = "Goshi" -- We can't declear multiple let with same name so it good for us and error free code.

// 07) Now we should we
lastName = "Goshi";
console.log(lastName);

// 001) So big diff - let and var is same name can be declear multipal time with var key word. but in let one name for one time. leter if you want to change value just type the variable name and change the value.

// 002) One more diff - block-scope
// let support block-scope where var not support block-scope.

// Ex-
var a = 5;
console.log(a);
//output - 5

// "{}" - if you use bracket it's called block
{
  a = 10;
  console.log(a);
  // output - 10
}

console.log(a);
// output - 10

// ----------- But -------------

let numberB1 = 5;
console.log(numberB1);
//output - 5

// "{}" - if you use bracket it's called block-scope
{
  // numberB1 = 10; // outside numberB1 value is different but inside block numberB1 is different.
  // We can't use outside any value from inside the block And inside the block value can't use from outside the block.

  // if you not use let to declear it will give an error.
  // so now -
  let numberB1 = 10;
  console.log(numberB1);
  // output - 10
  // inside the block value is 10 so output is 10
}

console.log(numberB1);
// output - 5

// But outside the block numberB1 value is 5 so output is 5 it's came from 63 number line code.

// 004) let and const almost same. 
// different is cosnt can't be change throw-out the program. const means constent.
// const have also block-scope. 
