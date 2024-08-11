// Q1) Write A Program To Print Marks Of Student In An Object Using For Loop
const marks = {
  dp: 100,
  ap: 99,
  hp: 98
};

for (let student in marks) {
  console.log(`${student}: ${marks[student]}`);
}

// Output
// dp: 100
// ap: 99
// hp: 98

// Q2) Write A Program In Q1 Using Using For In Loop
const marks = {
  dp: 100,
  ap: 99,
  hp: 98
};

for (let student in marks) {
  console.log(`${student}: ${marks[student]}`);
}

// Output
// dp: 100
// ap: 99
// hp: 98


// Q3) Write A Program To Print "Try Again" Until The User Enter The Correct Number

let correctNumber = 7;
let userNumber;

do {
  userNumber = parseInt(prompt('Enter a number:'));
  if (userNumber !== correctNumber) {
    console.log('Try again');
  }
} while (userNumber !== correctNumber);

// This program will keep prompting the user to enter a number until they enter the correct number (in this case, 7).

// Q4) Write A Function To Find the Mean Of 5 Numbers

function findMean(num1, num2, num3, num4, num5) {
  const sum = num1 + num2 + num3 + num4 + num5;
  const mean = sum / 5;
  return mean;
}

const result = findMean(10, 20, 30, 40, 50);
console.log('Mean:', result);

// Output

// Mean: 30

// Q5)Write a function named multiplyByTwo that takes a number as an argument and returns the result of multiplying that number by 2.

function multiplyByTwo(num) {
  return num * 2;
}

// Q6)Write a function named reverseString that takes a string as an argument and returns the reverse of that string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Q7)Write a function named printEvenNumbers that takes a number as an argument and prints all the even numbers from 0 to that number.

function printEvenNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Q8) Write a function named calculateFactorial that takes a number as an argument and returns the factorial of that number.

function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  
  return factorial;
}

// Q9) Write a function named countOccurrences that takes an array of numbers and a target number as arguments and returns the number of times the target number appears in the array.

function countOccurrences(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num === target) {
      count++;
    }
  }
  return count;
}

// Q10) What is an arrow function in JavaScript?

//   An arrow function is a shorter syntax for writing function expressions. It uses the => arrow token and does not bind its own this value. It is often used for writing concise and inline functions.