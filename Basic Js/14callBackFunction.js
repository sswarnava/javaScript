// Callback Function
const myCallbackFunction = () => {
  return "This is Callback Function";
};

function mainFunction(callback) {
  const mycallbackfun = callback();
  console.log(mycallbackfun);
}

mainFunction(myCallbackFunction); //OP - This is Callback Function
// We can pass a function to another function as a parameter.

// Another Example using class back
function myFunc2(name) {
  console.log("inside my func 2");
  console.log(`Your name is ${name}`); // Here we can acess the value also which one we take from myFunc.
}

function myFunc(callback) {
  console.log("hello there I am a func and I can..");
  callback("Raju"); // We can pass a value also.
}

myFunc(myFunc2);

// Function returing function
function a() {
  function b() {
    return "Hello World";
  }
  return b;
}

const ans = a(); // If here return something value from a or b function we have to put in a variable to acess the return value.
console.log(ans());
