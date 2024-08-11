//                 Arithmetic Operators
// +  Addition
// -  Subtraction
// *  Multiplication
// ** Exponential
// /  Division
// %  Modulus
// ++ Increment
// -- Decrement

// -> Example
// Arithmetic Operators

let addition = 5 + 2; // 7
let subtraction = 8 - 3; // 5
let multiplication = 4 * 3; // 12
let exponentiation = 2 ** 4; // 16
let division = 10 / 2; // 5
let modulus = 9 % 2; // 1
let increment = 5;
increment++; // 6
let decrement = 10;
decrement--; // 9


//                 Assignment Operators
// =   X = Y
// +=  X = X + Y
// -=  X = X - Y
// *=  X = X * Y
// /=  X = X / Y
// %=  X = X % Y
// **= X = X ** Y

// -> Example
// Assignment Operators
let x = 5;
x += 3; // equivalent to x = x + 3
x -= 2; // equivalent to x = x - 2
x *= 4; // equivalent to x = x * 4
x /= 2; // equivalent to x = x / 2
x %= 3; // equivalent to x = x % 3
x **= 2; // equivalent to x = x ** 2


//                 Comparison Operators
// ==   Equal To
// !=   Not Equal To
// ===  Equal Value And Type
// !==  Not Equal Value Or Type
// >    Greater Than
// <    Less Than
// >=   Greater Than Or Equal To
// <=   Less Than Or Equal To
// ?    Ternary Operator

// -> Example
// Comparison Operators
let isEqual = (5 == 5); // true
let isNotEqual = (5 != 3); // true
let isEqualValueAndType = (5 === '5'); // false
let isNotEqualValueOrType = (5 !== '5'); // true
let isGreaterThan = (10 > 5); // true
let isLessThan = (3 < 7); // true
let isGreaterThanOrEqual = (8 >= 8); // true
let isLessThanOrEqual = (4 <= 2); // false


//                 Logical Operators
// &&   Logical And
// ||   Logical Or
// !    Logical Not

// -> Example
// Logical Operators
let logicalAnd = (true && false); // false
let logicalOr = (true || false); // true
let logicalNot = !true; // false



//                 Bitwise Operators
// Bitwise AND (&): Performs a bitwise AND operation on each pair of corresponding bits. The result is 1 if both bits are 1; otherwise, it is 0.

// Bitwise OR (|): Performs a bitwise OR operation on each pair of corresponding bits. The result is 1 if at least one of the bits is 1; otherwise, it is 0.

// Bitwise XOR (^): Performs a bitwise XOR (exclusive OR) operation on each pair of corresponding bits. The result is 1 if the bits are different; otherwise, it is 0.

// Bitwise NOT (~): Flips the bits of a number. It converts each 0 to 1 and each 1 to 0.

// Left Shift (<<): Shifts the bits of a number to the left by a specified number of positions. This operation effectively multiplies the number by 2 to the power of the specified shift amount.

// Right Shift (>>): Shifts the bits of a number to the right by a specified number of positions. This operation effectively divides the number by 2 to the power of the specified shift amount.

// Zero-fill Right Shift (>>>): Similar to the right shift operator (>>), but it always fills in the shifted positions with zeros. This is known as the zero-fill right shift. 

// Bitwise operators are commonly used in JavaScript for low-level manipulation of binary data, creating flags, and optimizing certain calculations. However, they are not frequently used in general-purpose programming and should be used judiciously due to their complexity and potential for confusion. 

// It's important to note that JavaScript treats numeric values as 32-bit signed integers when performing bitwise operations. To perform bitwise operations on larger numbers, consider using additional techniques or external libraries. 

// I hope these notes help you understand the basics of bitwise operators in JavaScript! 

// -> Example
// Bitwise Operators
let bitwiseAND = 5 & 3; // 1
let bitwiseOR = 5 | 3; // 7
let bitwiseXOR = 5 ^ 3; // 6
let bitwiseNOT = ~5; // -6
let leftShift = 5 << 2; // 20
let rightShift = 5 >> 1; // 2
let zeroFillRightShift = 5 >>> 1; // 2


//                 Comments 

// Single Line Comment

/* Multi Line Comment */


//                 Conditional Statement
// 3 Types Of Conditional Statement Are Available
// If Statement
// If....Else Statement
// If....Else If....Else Statement

//                 If Statement

// if(condition){
//   //Execute This Code
// }   -> Execute Till Condition True

// -> Example 
let x = 10;

if (x > 5) {
  console.log("x is greater than 5"); // This block will be executed since the condition is true
}



//                 If....Else Statement

// if(condition){
//   //Execute This Code If Condition Is True
// }  
// else {
//   //Execute This Code If Condition Is False
// }

// -> Example

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote."); // This block will be executed since the condition is true
} else {
  console.log("You are not eligible to vote."); // This block will be executed if the condition is false
}



//                  If....Else If Statement
// -> Sometime We Required To Check Condition Again And Again.

// if (condition1) {
//   // Code To Be Executed If Condition1 Is True
// } else if (condition2) {
//   // Code To Be Executed If Condition2 Is True
// } else {
//   // Code To Be Executed If All Conditions Are False
// }

// -> Example

let num = 5;

if (num > 0) {
  console.log("Number is positive.");
} else if (num < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is zero.");
}


//                      JavaScript Ternary Operator

// The ternary operator, also known as the conditional operator, provides a concise way to write conditional expressions in JavaScript.

// It is represented by the syntax: condition ? expression1 : expression2. -> True : False

// The condition is evaluated first, and if it is true, expression1 is executed. If the condition is false, expression2 is executed.

// -> Usage and Benefits:

// The ternary operator is often used as a shorthand alternative to if...else statements when there are simple conditions and expressions involved.

// It makes the code more concise and readable, especially for shorter conditional statements.

// It can be used to assign a value to a variable based on a condition without the need for a separate if statement.

// Examples:

// Assigning a value based on a condition:


let dp = 18;
let message = (dp >= 18) ? "You are an adult" : "You are not an adult";



// Returning a value from a function based on a condition:

function checkEvenOrOdd(num) {
  return (num % 2 === 0) ? "Even" : "Odd";
}


// Nesting ternary operators (though it's recommended to keep it simple for readability):

let nums = 10;
let result = (nums > 0) ? "Positive" : (nums < 0) ? "Negative" : "Zero";


// While the ternary operator can make code more concise, it should be used judiciously to maintain code readability. Complex conditions or expressions may be better suited for if...else statements.

// Avoid nesting too many ternary operators, as it can make the code harder to understand and maintain.

// Use appropriate spacing and formatting to enhance the readability of ternary expressions.

// Remember, a ternary operator is a powerful tool for writing conditional expressions in a concise manner. However, it's important to strike a balance between readability and simplicity when using it in your JavaScript code.


// Prefix Increment:

let x = 5;
let result = ++x; // Increment x by 1 and assign the new value to result
console.log(result); // Output: 6
console.log(x); // Output: 6

// Postfix Increment:

let y = 5;
let result = y++; // Assign the current value of y to result, then increment y by 1
console.log(result); // Output: 5
console.log(y); // Output: 6
