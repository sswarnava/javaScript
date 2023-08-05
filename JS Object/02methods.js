// Methods
// Function inside object

const person = {
    firstName: "Rohit",
    lastName: "Gupta",
    about: function () {
        let personeInfo = `Person Full Name is ${this.firstName} ${this.lastName}`;
        console.log(personeInfo)
    }
}
person.about();
// OUTPUT - Person Full Name is Rohit Gupta

// We have to use this keyword to acess the data from outside the function.
// We can't acess like this - let personeInfo = `Person Full Name is ${firstName} ${lastName}`; (Without this it is not possible)


// --- Lets try another Example
function personInfo() {
    let personInfo = `Person Full Name is ${this.firstName} ${this.lastName}`;
    return personInfo;
}
const person1 = {
    firstName: "Rohit",
    lastName: "Joshi",
    about: personInfo
}
const person2 = {
    firstName: "Raju",
    lastName: "Gupta",
    about: personInfo
}
const person3 = {
    firstName: "Ramu",
    lastName: "Roy",
    about: personInfo
}

let person1_info = person1.about();
console.log(person1_info);
// OP - Person Full Name is Rohit Joshi

let person2_info = person2.about();
console.log(person2_info);
// OP - Person Full Name is Raju Gupta

let person3_info = person3.about();
console.log(person3_info);
// OP - Person Full Name is Ramu Roy