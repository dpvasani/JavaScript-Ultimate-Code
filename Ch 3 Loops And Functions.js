//                Loops & Functions
// Loops and functions are essential concepts in JavaScript programming that help to create efficient and reusable code.


//                     Types Of Loops 
//For Loop         -> Loop a Block Of Code No Of Time
//For In Loop      -> Loop Through The Key Of An Object
//For Of Loop      -> Loop Through The Value Of An Object
//While Loop       -> Loop Of Block Based On Specific Condition
// Do...While Loop -> While Loop Variant Which Run a At Least Once


//                       For Loop
// Syntax
// for(Statement1;Statement2;Statement3){
//   // Code To Be Executed
// }
// Statement1 -> Executed One Time
// Statement2 -> Condition Based -> Based On This Loop Body Will Be Executed
// Statement3 -> Executed Every Time The Loop Body  Is Executed


// Example
for (let i = 0; i < 5; i++) {
  console.log(i); // prints numbers from 0 to 4
}


//                       For In Loop
//Loop Through The Key Of An Object
// For In Loop Works With Array Also

// Example
const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
  // key:'value'
};

for (let key in person) { //(let a in person) -> console.log(a);
  console.log(key); // prints "name", "age", "occupation"
  console.log(person[key]); // prints the corresponding values "John", 30, "Developer"
}


//                       For Of Loop
// Loop Through The Value Of An Object
// Object Must Be Iterable

// Example
const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(fruit); // prints "apple", "banana", "orange"
}

const message = 'Hello';

for (let char of message) {
  console.log(char); // prints "H", "e", "l", "l", "o"
}


//                    While Loop
// If Condition Never False -> Loop Will Never End -> Crush JS Run Time
// Also Called In Infinite Loop -> Don't Try This Circus

// Syntax
// while(condition){
//   // Code To Be Executed
// }

// Example
let i = 0;
while (i < 5) {
  console.log(i); // prints numbers from 0 to 4
  i++;
}


// ALT + SHIFT + DOWN ARROW KEY -> Replicate Selected Code


//                     Do.....While Loop
// Do...While Loop -> While Loop Variant Which Run a At Least Once
// Syntax

// do {
//   // Code To Be Executed
// } while(Condition)

// Example
let i = 0;
do {
  console.log(i); // prints numbers from 0 to 4 -> Executed At Least Once
  i++;
} while (i < 5);

let i = 6;
do {
  console.log(i); // prints numbers from 0 to 4 -> Executed At Least Once
  i++;
} while (i < 5);

// Output -> 6


//                          Functions
// Functions are reusable blocks of code that perform a specific task. They help in organizing code, improving reusability, and reducing redundancy. A function can accept parameters (inputs) and return a value.

 // function myfun(parameter1, parameter2){
 //   //Code -> Parameter Behave As Local Variables
 // }

// myfun(6,7); -> Function Invocation
// A. Function declaration:
// B function declaration defines a named function that can be called later in the code.

// Example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // prints "Hello, John!"
greet("Sarah"); // prints "Hello, Sarah!"

//                     Function expression:
// A function expression assigns a function to a variable. It can be anonymous or named.
  
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};

greet("John"); // prints "Hello, John!"
greet("Sarah"); // prints "Hello, Sarah!"

//                           Arrow function:
// Arrow functions provide a concise syntax for writing functions. They are anonymous and lexically bind the this value.
  
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("John"); // prints "Hello, John!"
greet("Sarah"); // prints "Hello, Sarah!"

//                      Returning a value:
// Functions can return a value using the return statement. The returned value can be stored in a variable or used directly.
  
function add(a, b) {
  return a + b;
}

const result = add(3, 4);
console.log(result); // prints 7

//                     Default parameters:
// Default parameters allow you to assign default values to function parameters if no argument is passed.


function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // prints 5
console.log(multiply(5, 2)); // prints 10
