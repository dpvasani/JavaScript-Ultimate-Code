// Variable Declaration:
// To declare a variable in JavaScript:
// Before ES6 -> var was used -> After ES6 -> let is used
// const is used to define constant -> throughout the program value not changed

// Let, Const -> Used To Block Scope Variable Declaration 
// Var -> Globally Scoped
// Let Can Be Updated But Not Re-declared
//Const -> Neither Updated Nor Re-declared
// Var -> Can Be Updated And Re-declared 
// Var & Let Is Initialized With Undefined ->  Const Are Not
var dp;
let ap;
const hp; //Error

var myVariable;     // Declaration using var
let anotherVariable;  // Declaration using let
const PI = 3.14159;   // Declaration using const

// JS is Case Sensitive 

// You can also declare and assign a value to a variable in a single line.

//JavaScript Data-Type
//Object Is Non Primitive Data-Type
// Primitive -> Null, Number, String, Symbol, Undefined, Boolean, Bigint -> Fundamental Data-Type -> nn bb ss u


let y = BigInt("265");
let x = Symbol("I Am Symbol");
let s = null; //Define Null

// Type
console.log(typeof x);

//Object -> In Python -> Dictionary 
//ES6 -> ECMAScript -> Modern JavaScript
const item = {
  name: "CryptoMinds",
  age: "12"
  //Key: Value
}

console.log(item["age"]); //Look Up

//Scope -> Alt + Click -> Multiple Cursor In Replit
//var

var b = 11;
var b = 13; // Allow To Use

{
  var b = 15;
  console.log(b);
}
console.log(b);

//Output
// 15
// 15

//let

let b = 11;

{
  let b = 15;
  console.log(b);
}
console.log(b);

//Output
// 15
// 11


let c = 16;
c = 17; //Update


let d = 16;
let d = 17; //Error






var myNumber = 42;
let myString = "JavaScript";
const myConstant = true;

// Variable Naming:
// JavaScript variable names can include letters, digits, underscores, and dollar signs. They must start with a letter, underscore, or dollar sign (but not a digit). JavaScript is case-sensitive, so myVariable and myvariable are considered different variables.

var firstName;
let age;
const PI = 3.14;



// Better Practice to use let and Const
// Mostly Use Const
// JS Allow to Change Variable Type In Run Time -> Only One


function myFunction() {
  var x = 10;       // Function-scoped variable
  if (x > 5) {
    let y = 20;    // Block-scoped variable
    console.log(x + y);
  }
  console.log(x);  // Accessible
  console.log(y);  // Error: y is not defined
}


// Variable Hoisting:
// JavaScript has a concept called "hoisting," where variable and function declarations are moved to the top of their respective scopes during the compilation phase. Variables declared with var are hoisted but are not initialized until the line where they are defined. This can sometimes lead to unexpected behavior.


console.log(x);   // Undefined
var x = 10;


// Variable Constants:
// Variables declared with const are constants, meaning their value cannot be reassigned once it is set. However, it's important to note that const does not make objects or arrays immutable. It only prevents the reassignment of the variable itself.


const PI = 3.14;
PI = 3.14159;   // Error: Assignment To Constant Variable

const myArray = [1, 2, 3];
myArray.push(4);    // Valid, Since The Array Itself Is Mutable

// Conclusion:
// JavaScript variables play a crucial role in storing and manipulating data within a program. By understanding variable declaration, assignment, naming, scope, and the differences between var, let, and const, developers can effectively work with variables to create dynamic and interactive JavaScript applications.