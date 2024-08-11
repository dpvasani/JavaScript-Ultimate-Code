//    Ch 2 Expression & Conditional Statement Practice Set


// Q1) Use Logical Operator To Find Whether The Age Of a Person Lies Between 10 & 20.

let age = 15;

if (age >= 10 && age <= 20) {
  console.log("The age is between 10 and 20.");
} else {
  console.log("The age is not between 10 and 20.");
}


// Q2) Demonstrate The Use Of Switch Statement In JS With an Example.

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);


// Q3) Write JS Program To Find Whether the Number Is Divisible By 2 And 3.

let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
  console.log(number + " is divisible by both 2 and 3.");
} else {
  console.log(number + " is not divisible by both 2 and 3.");
}


// Q4) Print "You Can Drive" Or "You Can't Drive" Based On Age Being Greater Than 18 Using Ternary Operator

let age = 20;
let canDrive = age > 18 ? "You can drive." : "You can't drive.";

console.log(canDrive);


