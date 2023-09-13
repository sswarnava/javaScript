// * ---------- JavaScript has 2 Datatypes (Primitive & non-Primitive) ---------- * 


// * ------- primitive data type (Total 7) ------ *

//  01) ----- string "Mohit"
let newString = "Mothit";
console.log(typeof newString); // OP - string
//(typeof use to check the which type of data it is ?)

// 02) ------- number (2, 4, 5.6, 7.9090956789)
let newNumber = 22;
console.log(typeof newNumber); // OP - Number
// Number = decimal value and float and double, any kind of number is consider as number data type.

// 03) ------ booleans (true and false)
let newbool = false;
console.log(typeof newbool); // OP - boolean
// boolesns = true or false

// 04) ------ undefined (variable is decleared but value is not assign)
let myUndefi;
console.log(typeof myUndefi); // OP - undefined

// 05) ------ null (no value)
let myNull = null;
console.log(myNull); // OP - null
console.log(typeof myNull); // OP - object
// null is a primitive datatype. However, when using the typeof operator, it returns "object". 
// Many people consider, it's a bug in Js. Changing or fixing this bug will break the existing codebase, so it is not yet changed. 

// ---- Difference null vs Undifiend
console.log(undefined === undefined) // true (both type and value are the same)
console.log(null === null) // true (both type and value are the same)
console.log(null == undefined) // true (but the "same value") ("==" check only value)
console.log(null === undefined) // false (not the same type) ("===" check value type both)

// 06) ----- BigInt
// All JavaScript numbers are stored in a a 64-bit floating-point format.
// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

// 07) ----- Symbol







// * ------- non-primitive ------ *
// 08) ------ Object Datatype
// The object data type can contain:
// -- 001) An object
// -- 002) An array
// -- 003) A date

// * ------------ operator ---------- *
// = assign symbol                                        |  > grater than
// == comparison symbol (equal)                           |  < less than
// === comparison symbol with data type compare           |  >= grater equal
// + addition                                             |  <= less equal
// - subtraction                                          |  =! Not equal
// * multiplication                                       |  || Or symbol
// / division                                             |  && and symbol
// % Modules

// ----------- Notes ----------
// *-- typeof null is not null, it is an object. however, undefined typeof is undefined and number typeof is number. (we can say null is an exception).