// * -----------  String ----------- *

let firstName = "Swarnava"
// let firstName = new String("Swarnava")

// ---- String Indexing
// S w a r n a v a
// 0 1 2 3 4 5 6 7 = Total length is 8

// ---- length of string
console.log(firstName.length) // output 8

// ---- get the value
console.log(firstName[0]) // output - S
console.log(firstName[3]) // output - r
console.log(firstName[6]) // output - v
console.log(firstName[firstName.length - 1]) // output - a
// firstName.length is 8 , now 8-1 = 7 and 7 index number value is a, so it's print = a


// * --------- String method ----------- *

// ---- 01) String length
// use to chack the length of string
let lenghtOfTheString = firstName.length
console.log(lenghtOfTheString) // output 8

// ---- 02) String slice()
// The difference is that start and end values less than 0 are treated as 0 in substring()
let slice = firstName.slice(2, 5)
console.log(slice) // output - arn (index-potion 2 to 5)

// ---- 03) String substring()
// If you omit the second parameter, substring() will slice out the rest of the string.
let substring = firstName.substring(0, 3) // output - Swa (index-potion 0 to 3)
console.log(substring)

// ---- 04) String substr()
//-------------------------

// ---- 05) String replace()
// Use for replacing the value
let text = "Please visit me!"
let newText = text.replace("me", "Us")
console.log(newText); // output - lease visit Us! (me is replace by us)

// ---- 06) String replaceAll()
//--------------------------

// ---- 07) String toUpperCase()
// use to change uppercase
let text1 = "Hello World!"
let text2 = text1.toUpperCase()
console.log(text2); // output - HELLO WORLD!

// ---- 08) String toLowerCase()
// use to change lowerrcase
text2 = text1.toLowerCase()
console.log(text2) // output - hello world!

// ---- 9) String concat()
// It's use add 2 or more value
let lastName = "Mudi"
let fullName = firstName.concat(" ", lastName) // firstName come from line number 2 and add with last name and make a full name.
console.log(fullName) // output - Swarnava Mudi

// ----- 10) String trim()
// It's use to trim the space.
let trimTheText = "      BeforeSpace--AfterSpace!      ";
console.log(trimTheText.trim()) // output - BeforeSpace--AfterSpace!


// * ---------- add strings using +  ------- *
let string1 = "javaScript"
let string2 = 1
let finalString1 = string1 + " is the number-" + string2 + " language." //OP - javaScript is the number-1 language.
console.log(finalString1) // we can use it also to add sring and some value.

// * ------- add string suing ` `---------- * (recomended)
let finalString2 = `${string1} is the number-${string2} language. I love it.` // OP - javaScript is the number-1 language. I love it. (Best way to add the string with value. We can add number aslo)
console.log(finalString2)

// * -------- Notes ---------- *
// how to declear a string 
// string typeof is object
// string length is a interesting property.
// string can be acess using index position
// we can add multiple stirng using + oprerator
// Also we can add using backtic (``) for replace the value we have to use ${parameter} 
// string has verious diffrent method to play with our string. ex - (toUpper, replace, charAt, indexOf)