// getElementsByTagName Using tagName
let myAllHeadings = document.getElementsByTagName('h1')
console.log(myAllHeadings);
// HTMLCollection (2)
// 0 <h1>Hello World 1</h1>
// 1 <h1>Hello World 4</h1>

// Try to acess specific 1st haeding using index number .
let myheading1 = document.getElementsByTagName('h1')[0]
console.log(myheading1); // <h1>Hello World 1</h1> (Because index is 0)
 
// getElementById Using id
let myIdP = document.getElementById('idForPtag')
console.log(myIdP); // OP:  <p id="idForPtag">Hello World 3</p>

// getElementsByClassName Using class
let myClassP = document.getElementsByClassName('classForPtag')
console.log(myClassP); 
// OP:-
// HTMLCollection (1) 
// <p class="classForPtag">Hello World 4 </p>
// We have only one p tag using class. if we had more than one we can acess using index no.

let selectH1 = document.querySelector('h1')
console.log(selectH1); //  <h1>Hello World 1</h1>
// Here it's select only first one by dafault. It's did not return any whole collection.

// let selectpusingId = document.querySelector('idForPtag')
// let selectpusingclass = document.querySelector('classForPtag')


let selectAllH1 = document.querySelectorAll('h1')
console.log(selectAllH1); 
// It' return a nodelist. Node list is different from htmlCollection and it's has few extra feature's, Most used one is forEach and key. 

// We can select anything in dom, using css selectors knowledge like uisng tag, id or class, child etc


// * ------------- Notes ---------------- *
// getElementsByTagName - return all elements in a colection called htmlCollection. We have to use index to acess the specify one elemtnt.
// getElementById - We dont required - # symbol. We can acess directlly. Normally one element has one unique id for each. In a webpage one id nornally did't repeat. 
// getElementsByClassName -  also return htmlCollection index, it's same like getElementsByTagName. 
// querySelector - What ever you select it's return only first one value or it's select only first one.
// querySelectorAll - return a nodelist. we can acess the all node using key number.

// HtmlCollection and nodelist and array look like same , but when you find the properties of each element we get the actully different between this 3.

// htmlCollection - dont have forEach or map, It has item([index]) and length and few more. But dont have array method here.
// We can acess using index position and find the total length. 
// Also we can convert htmlCollention to array, After that we can apply the array method.

// NodeList - it has forEach item, key etc. So we can apply forEach, But can't apply map. Beacuse it's not a array. So we have to convert is in a array and than we can apply the array method.
