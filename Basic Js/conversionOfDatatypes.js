// * ------ different data to Number ------- *
let score = "33"
let valueInNumber = Number(score)
console.log(valueInNumber) // OP - 33 
console.log(typeof valueInNumber) // OP - number

score = "33abc"
// score = "Swarnava" - same conversion
valueInNumber = Number(score)
console.log(typeof valueInNumber) // OP - number
console.log(valueInNumber) // OP - NaN

score = null
valueInNumber = Number(score)
console.log(typeof valueInNumber) // OP - number
console.log(valueInNumber) // OP - 0

score = undefined
valueInNumber = Number(score)
console.log(typeof valueInNumber) // OP - number
console.log(valueInNumber) // OP - NaN

score = true
valueInNumber = Number(score)
console.log(typeof valueInNumber) // OP - number
console.log(valueInNumber) // OP - 1

console.log('20') // OP - 20
console.log(+true) // OP - 1
console.log(+"") // OP - 0
console.log(+'abc') // OP - Nan
console.log(+'true') // OP - Nan

// ------- Notes ------- 
//  "33" => 33
//  "33abc" => NaN
//  null => 0
//  undefined => NaNf
//  true => 1; false => 0
//  '+' operator use for convert string to number.
//  +true => 1; +"" => 0 
//  +'true' => NaN


// * ------ different data to boolen ------- *
let isLoggedIn = 1
// isLoggedIn = 0 (op - false)
// isLoggedIn = 5 (op - true)
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn) // Op - boolean
console.log(booleanIsLoggedIn) // Op - true

isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn) // Op - boolean
console.log(booleanIsLoggedIn) // op - false

isLoggedIn = "abc"
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn) // Op - boolean
console.log(booleanIsLoggedIn) // op - true

isLoggedIn = null
// isLoggedIn = undefined (op - false)
// isLoggedIn = NaN (op - false)

booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn) // Op - boolean
console.log(booleanIsLoggedIn) // op - false


// ------- Notes ------- 
// 1 => true: 5 => true: 0=> false
// "" => false (empty string)
// "abc" => true (anything in string)
// null => false; undifiend => false; NaN => false



// * ------ different data to String ------- *
let isString = 33
let valueInString = String(isString)
console.log(valueInString) // OP - 33
console.log(typeof valueInString) // OP - string

isString = NaN
// isString = null
// isString = undefined
// isString = true
valueInString = String(isString)
console.log(valueInString) // OP - NaN Or null or undefiend or true
console.log(typeof valueInString) // OP - string

// * ---------- excption in string ---------- *
console.log("1" + 2) // OP -  12
console.log(1 + "2") // OP - 12
console.log("1" + 2 + 3) // OP - 123
console.log(1 + 2 + "3") // OP - 33 (First 2 number is number, so 1+2 = 3 And than 3 is string so result is 33)

// ------- Notes ------- 
// 33 => "33"
// null => null; undefined => undefined; true => true; NaN => NaN
// ("1" + 2) => 12
// (1 + "2") => 12
// ("1" + 2 + 3) => 123
// (1 + 2 + "3") => 33


// * ----------- increment ++ operator (postfix) ------------ *
let a = 6
console.log(`a is ${a}`) // OP - a => 6

let b = a++
console.log(`a is ${a} and b is ${b}`) // OP - a => 7 b => 6

let c = a++
console.log(`a is ${a} and b is ${b} and c is ${c}`) // OP - a => 8 b => 6 c => 7

c = b++
console.log(`c is ${c}`) // c => 6

c = b // OR c = b++ (both work will same).
console.log(`c is ${c}`) // c => 7

// * --------- increment ++ operator (prefix) ---------- *
let m = 6
console.log(`m is ${m}`) // OP - m => 6

let n = ++m
console.log(`m is ${m} and n is ${n}`) // OP - m => 7 n => 7

let o = ++m
console.log(`m is ${m} and n is ${n} o is ${o}`) // OP - m => 8 n => 7  o => 8

// ------- Notes ------- 
// on prefix, after assign or after use of orignal value will upadate. (after assign will update)
// on postfix, value will update first and than it will assign to use for operation. (before assign value updated)
