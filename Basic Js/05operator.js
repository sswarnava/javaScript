//JavaScript has 8 Datatypes

// 01) string "Mohit"
let newString = "Mothit";
console.log(typeof newString); // OP - string
//(typeof use to check the which type of data it is ?)

// 02) number 2, 4, 5.6
let newNumber = 22;
console.log(typeof newNumber); // OP - Number
// Number = decimal value and float and double, any kind of number is consider as number data type.

// 03) booleans
let newbool = false;
console.log(typeof newbool); // OP - boolean
// boolesns = true or false

// 04) undefined
let myUndefi;
console.log(typeof myUndefi); // OP - undefined

// 05) null
let myNull = "delete this value in next line using null";
console.log(myNull); // OP - delete this value in next line using null
//Basically, null is a primitive type of a variable in JavaScript. Many people consider it a bug in JavaScript as it considers null as an object. Changing or fixing this bug will break the existing codebase, so it is not yet changed. The type of null is an object. That is why it is treated as an object.

// Difference null vs Undifiend
console.log(undefined === undefined) // true (both type and value are the same)
console.log(null === null) // true (both type and value are the same)
console.log(null == undefined) // true (but the "same value") ("==" check only value)
console.log(null === undefined) // false (not the same type) ("===" check value type both)

myNull = null;
console.log(myNull); // OP - null
console.log(typeof myNull); // OP - object

// 06) BigInt
// All JavaScript numbers are stored in a a 64-bit floating-point format.
// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

// 07) Symbol
// = assign symbol                                        |  > grater than
// == comparison symbol (equal)                           |  < less than
// === comparison symbol with data type compare           |  >= grater equal
// + addition                                             |  <= less equal
// - subtraction                                          |  =! Not equal
// * multiplication
// / division
// % Modules

// 08) Object Datatype
// The object data type can contain:
        // 001) An object
        // 002) An array
        // 003) A date
