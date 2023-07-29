// ------ 01 lexical scope

const myVar2 = "Out side of the myApp function";

function myApp() {
  const myVar = "valueOfmyAppFun";

  function myFun1() {
    const myVar = "valueOfmyFun1";
    console.log(`Inside myFunc1 ${myVar}`); // it will check any myVar is available inside myFun1 or not. If it's avialable inside funtion than it will print the value.
  }

  const myFun2 = () => {
    console.log(`Inside myFunc2 ${myVar}`); // Here myVar is not available inside the myFun2, so it will check outside of the funtion any myvar is available in globaly or not. If it's avaiable in globaly it will print global value of myVar
  };

  const myFun3 = () => {
    console.log(`Inside myFunc3 value is - ${myVar2}`);
    // myVar2 is not available inside myFun3 so it will check outside means myApp function, But it is not availble inside myApp function also. so it will go back one more step and find a value of myVar2.
  };

  console.log(myVar); // OP - valueOfmyAppFun
  myFun1(); // OP - Inside myFunc1 valueOfmyFun1
  myFun2(); // OP - Inside myFunc2 valueOfmyAppFun
  myFun3(); // OP - Inside myFunc3 value is - Out side of the myApp function
}

myApp();

// --- 03block scope vs function scope

// let and const is the block scope
// var is the function scope

// EX - block Scope (Let and Const)
// { } parentheses is called a block.
{
  let firstName = "Rohit";
  const lastName = "Gupta";
  // firstName and lastName can be acessble only inside a block. Can't acess outside of the in this block.
  console.log(firstName + " " + lastName); // OP - Rohit Gupta
}
// console.log(firstName); -- // Error - firstName is not defiend. (Means it can't find the Firstname value)

// EX - function Scope (Var)
var firstName = "Ramu";
console.log(firstName); // OP - Ramu

{
  console.log(firstName); // OP - Ramu
  var lastName = "M";
}

console.log(`${firstName} ${lastName}`); // OP - Ramu M
// We can acess from anyWhere from outside from indes a block using function scope var. Some time it will make problem for us 