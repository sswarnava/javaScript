// Proto, Prot_type, class
const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj2);
// OUTPUT -- 
//      {}
//      [[Prototype]]: Object
//          key1: "value1"
//          key2: "value2"
//        [[Prototype]]: Object

// We can see here one prototype concept is present.
// using this concept we can connect two object and if one key_value will not be present in object-2, that time it will check in object-1 

// Exmaple -
console.log(obj2.key2); // OP - value2 
// But ob2 dont have key2 value, Ob2 have only key3
// so here it's comming from ob1.

// Now if i changed the value of key3 let's what output will get let's check - 
obj2.key2 = "uniqe";
console.log(obj2.key2); // OP - uniqe 
// now key2 consider newValue = what is 'uniqe'.

// Lets see about inside __proto__
console.log(obj2.__proto__);
// OP - {key1: 'value1', key2: 'value2'}
// Proto help us to connect one object to another object using object-create-method

// One realLife Eaxmple using __proto__

// We made it and store it for one time in a memory. And we can call derictly from our main object (creatUser).
// Also Using Proto we not required call also.
const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function () {
        return this.age >= 18;
    }
};

// This is the main function
const creatUser = (firstName, email, age) => {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.email = email;
    user.age = age;
    return user;
    // We are not required to call or declear the any methods here.
    // Because of __proto_ (using Object create process).
};

// Here we just call and pass the data.
const user1 = creatUser('Ishaan', 'ishaan@gmail.com', 21);
const user2 = creatUser('Rohit', 'rohit@gmail.com', 23);

console.log(user1); // OP - {firstName: 'Ishaan', email: 'ishaan@gmail.com', age: 21, about: ƒ}

const user1Info = user1.about();
console.log(user1Info); // OP - Ishaan is 21 years old

const user2Is18 = user2.is18(); 
console.log(user2Is18); //OP - true