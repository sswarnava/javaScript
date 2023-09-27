// * -- map

// new Map use to creat a new Map 
const myMap = new Map()
// set use to set the value
myMap.set("IN", "India")
myMap.set("Fr", "Freance")

// for of Loop 
for (const keyValue of myMap) {
    console.log(keyValue);
}
// OP - [ 'IN', 'India' ]
//      [ 'Fr', 'Freance' ]    * It's return the full array *

for (const [key, value] of myMap) {
    console.log(key, ':-', value)
} // Here I destructured the array and make it separate.

// OP -  IN :- India
//       Fr :- Freance

// For - in Loop
// for (const myKeys in myMap) {
//     console.log(myKeys);
// }
// Can't run and no output

// for each loop - 
myMap.forEach(element => {
    console.log(element);
}); // OP - India
    //      Freance