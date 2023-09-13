// * ------ different data to Number ------- *
score = "33"
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

// ------- Notes ------- 
//  "33" => 33
//  "33abc" => NaN
//  null => 0
//  undefined => NaNf
//  true => 1; false => 0


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

// ------- Notes ------- 
// 33 => "33"
// null => null; undefined => undefined; true => true; NaN => NaN