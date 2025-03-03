// IIFE -> Immediately Invoked Function Expression

// IIFE Is A JavaScript Function That Runs As Soon As It Is Defined
// (function() {
//   console.log("IIFE");
// })();

// // It is used to avoid polluting the global namespace, execute an async-await, etc.

// let a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(456)
//     }, 4000)
//   })
// }

// (async () => {
//   let b = await a()
//   console.log(b)
//   let c = await a()
//   console.log(c)
//   let d = await a()
//   console.log(d)
// })()


// console.log(d) // Throws error

// Destructuring  And Spread Operator
// Destructuring Assignment Is Used To Unpack Values From An Array, Or Properties From An Object, Into Dedicated Variables, In JavaScript.

// let arr = [3, 5, 8, 9, 12, 14]
// No need to do this:
// let a = arr[0]
// let b = arr[1]
// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest)
// let [a, , b, ...rest] = arr
// console.log(a, b, rest)
// let { a, b } = { a: 1, b: 5 }
// console.log(a, b)

// [10, x,....rest] =[10, 20, 30, 40, 50, 60]
// x will be 20 rest will be [30, 40, 50, 60]

// Spread Operator

// Spread Syntax Allow An Iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals)
// let arr1 = [3, 5, 8]
// let obj1 = { ...arr1 }
// console.log(obj1)

// function sum(v1, v2, v3) {
//   return v1 + v2 + v3
// }

// console.log(sum(...arr1))

// let obj2 = {
//   name: "Harry",
//   company: "Company xyz",
//   address: "XYZ"
// }

// console.log({ ...obj2, name: "John", company: "ABC" })
// console.log({ name: "John", company: "ABC", ...obj2 }) // This will print the obj2 object without changing any values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Local, Global And Function Scope In JavaScript
// var -> Global Scope
// let and const -> Block Scope
// Function Scope -> The variable declared inside a function, becomes local to the function.

// let p = 9
// function ax() {
//   let a = 8;
//   console.log(p)
//   console.log(a)
// }

// ax()
// console.log(p)
// console.log(a)


// Hoisting In JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution

// let a;
// Following two lines will run successfully due to JavaScript hoisting
// console.log(a)
// greet()
// var greet = function() {
//   console.log("Good morning")
// }

// var a = 9; // Declaration hoisted to the top but initialization is not
// console.log(a)

// Hoisting With Let And Var
// let and const are not hoisted
// console.log(num);
// let num = 6; -> Throws an error 
// var num = 6; -> Doesn't throw an error
// const num = 6; -> Throws an error

// Function Expression And Class Expression Are Not Hoisted
// Function Expression Me = Sign Ata He

// Closer Set

// A Closer Is A Function With Lexical Environment

// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   name = "Harry"
//   return displayName;
// }
// let c = init();
// c()


// function returnFunc() {
//   const x = () => {
//     let a = 1
//     console.log(a)
//     const y = () => {
//       // let a = 2
//       console.log(a)
//       const z = () => {
//         // let a = 3
//         console.log(a)
//       }
//       z()
//     }
//     a = 999
//     y()
//   }
//   return x
// }

// let a = returnFunc()
// a()

// Closure -> Function + Its Lexical Environment
// Reference Milta He

// Lexical Environment -> The Environment Of The Function -> Mere Pass Nahi He To Mere Pass Ka Environment Me Ase Check Karega

// Arrow Function 

// const sayHello = name => {
//   console.log("greeting" + " " + name)
//   console.log("hi")
// }

// const x = {
//   name: "Harry",
//   role: "Js Developer",
//   exp: 30,
//   show: function() {
//     // let that = this
//     // console.log(this)
//     setTimeout(() => {
//       // console.log(`The name is ${that.name}\nThe role is ${that.role}`)
//       console.log(`The name is ${this.name}\nThe role is ${this.role}`)
//     }, 2000)
//   }
// }
// sayHello("Harry", "Good Afternoon")
// console.log(x.name, x.exp)
// x.show()

// Arrow Function Uses Lexical This

// Practice Set 

// const a = async (text, n = 2) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text)
//     }, 1000 * n)
//   })
// }

// (
//   async () => {
//     let text = await a("Hello")
//     console.log(text)
//     text = await a("World")
//     console.log(text)
//   }
// )()

// function sum(a, b, c) {
//   return a + b + c
// }

// let x = [1, 3, 5]
// console.log(sum(...x));

// (async () => {
//   let text = await a("I am resolving after 1 second", 1)
//   console.log(text)
//   text = await a("I am resolving after 4 seconds", 4)
//   console.log(text)
// }
// )()

// function simpleInterest(p, r, t) {
//   return (p * r * t) / 100;
// }

// console.log(simpleInterest(100, 5, 1))

// Regex Expression Or Regular Expression  
// https://regexr.com/
// const regex = /(Harry){2}/gi
// const text = "Harryharry is a very very nice awesome nice very boy"
// console.log(text.replace(regex, "VERY"))

// Event Loop 

// Asynchronous CallBack
// Sometimes the JavaScript code can take a lot of time and this can block the
// page re render
// JavaScript has asynchronous callbacks for non blocking behavior
// JavaScript runtime can do only one thing at a time
// Browser gives us other things which work along with the runtime like Web
// APIs.
// In node.js these are available as C++ APIs

// setTimeout(function timer() {
//   console.log('You clicked the button!');
// }, 2000); 

// console.log("Hi!");

// setTimeout(function timeout() {
//   console.log("Click the button!");
// }, 5000);

// console.log("Welcome to loupe.");

// Task Queue
// JavaScript can do only one thing at a time
// The rest are queued to the task queue waiting to be executed
// When we run setTimeout, webapis will run a timer and push the function
// provided to setTimeout to the task queue once the timer evis
// These tasks will be pushed to the stack where they can executed

// Event Loop 

// JavaScript has a runtime model based on an event loop, which is responsible
// for executing the code, collecting and processing events, and executing queued
// sub-tasks
// The event loop pushes the tasks from the task queue to the call stack
// setTimeout(func1, 0) can be used to defer a function until all the pending tasks
// (so far) have been executed
// We can see how these things work in action by visiting
// For Understanding Call Stack In Js :http://latentflip.com/loupe/

// Module In JS


// const hello = ()=>{
//   console.log("Hello Harry")
// }

// const ahello = (name)=>{
//   console.log("Hello " + name)
// }

// module.exports = {hello, ahello};// same as below line
// // module.exports = {hello: hello, ahello: ahello};

// // ES6 Modules
// export const hello = ()=>{
//     console.log("Hello Harry")
// }

// export const ahello = (name)=>{
//     console.log("Hello " + name)
// }

// const harry = ()=>{
//     console.log("Hello " + "Harry")
// }

// export default harry;
