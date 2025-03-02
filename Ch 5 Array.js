//                                  Ch 5 Array
//Array Are Mutable
// In JS Array Are Object
//An array is a data structure in JavaScript used to store multiple values in a single variable.

// Array Constructor:

const fruits = ['apple', 'banana', 'orange', 7];

const numbers = new Array(1, 2, 3, 4, 5);


// Accessing Array Elements

console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange

// Modifying Array Elements

fruits[1] = 'grape'; // Modifying the second element
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Array Length

console.log(fruits.length); // Output: 3

console.log(typeof fruits)  // Object


//                             Array Methods


// at()	        -> Returns an indexed element of an array
// concat()	    -> Joins arrays and returns an array with the joined arrays
// constructor  -> Returns the function that created the Array object's prototype
// copyWithin()	-> Copies array elements within the array, to and from specified positions
// entries()	  -> Returns a key/value pair Array Iteration Object
// every()      -> Checks if every element in an array pass a test
// fill()	      -> Fill the elements in an array with a static value
// filter()	    -> Creates a new array with every element in an array that pass a test
// find()       -> Returns the value of the first element in an array that pass a test
// findIndex()  -> Returns the index of the first element in an array that pass a test
// flat()	      -> Concatenates sub-array elements
// flatMap()	  -> Maps all array elements and creates a new flat array
// forEach()	  -> Calls a function for each array element
// from()	      -> Creates an array from an object
// includes()   -> Check if an array contains the specified element
// indexOf()    -> Search the array for an element and returns its position
// isArray()	  -> Checks whether an object is an array
// join()	      -> Joins all elements of an array into a string
// keys()       -> Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()-> Search the array for an element, starting at the end, and returns its position
// length       -> Sets or returns the number of elements in an array
// map()	      -> Creates a new array with the result of calling a function for each array element
// pop()	      -> Removes the last element of an array, and returns that element
// prototype	  -> Allows you to add properties and methods to an Array object
// push()       -> Adds new elements to the end of an array, and returns the new length
// reduce()	    -> Reduce the values of an array to a single value (going left-to-right)
// reduceRight()-> Reduce the values of an array to a single value (going right-to-left)
// reverse()	  -> Reverses the order of the elements in an array
// shift()	    -> Removes the first element of an array, and returns that element
// slice()	    -> Selects a part of an array, and returns the new array
// some()	      -> Checks if any of the elements in an array pass a test
// sort()       -> Sorts the elements of an array
// splice()	    -> Adds/Removes elements from an array
// toString()	  -> Converts an array to a string, and returns the result
// unshift()    -> Adds new elements to the beginning of an array, and returns the new length
// valueOf()	  -> Returns the primitive value of an array



//                                   Method


// 1. at()

// Returns an indexed element of an array.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.at(1)); // Output: 'banana'


// 2. concat()

// Joins arrays and returns an array with the joined arrays.
// Example:

// const fruits = ['apple', 'banana'];
// const vegetables = ['carrot', 'broccoli'];

// const combined = fruits.concat(vegetables);
// console.log(combined); // Output: ['apple', 'banana', 'carrot', 'broccoli']


// 3. constructor

// Returns the function that created the Array object's prototype.
// Example:

// const fruits = ['apple', 'banana'];

// console.log(fruits.constructor); // Output: Array()


// 4. copyWithin()

// Copies array elements within the array, to and from specified positions.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// numbers.copyWithin(0, 3);
// console.log(numbers); // Output: [4, 5, 3, 4, 5]


// 5. entries()

// Returns a key/value pair Array Iteration Object.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// const iterator = fruits.entries();
// console.log(iterator.next().value); // Output: [0, 'apple']
// console.log(iterator.next().value); // Output: [1, 'banana']
// console.log(iterator.next().value); // Output: [2, 'orange']


// 6. every()

// Checks if every element in an array passes a test.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// const allGreaterThanZero = numbers.every((num) => num > 0);
// console.log(allGreaterThanZero); // Output: true


// 7. fill()

// Fill the elements in an array with a static value.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(0, 2, 4);
// console.log(numbers); // Output: [1, 2, 0, 0, 5]


// 8. filter()

// Creates a new array with every element in an array that passes a test.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]


// 9. find()

// Returns the value of the first element in an array that passes a test.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// const foundNumber = numbers.find((num) => num > 3);
// console.log(foundNumber); // Output: 4


// 10. findIndex()

// Returns the index of the first element in an array that passes a test.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// const foundIndex = numbers.findIndex((num) => num > 3);
// console.log(foundIndex); // Output: 3


// 11. flat()

// Concatenates sub-array elements.
// Example:

// const numbers = [1, 2, [3, 4, [5, 6]]];

// const flattened = numbers.flat();
// console.log(flattened); // Output: [1, 2, 3, 4, [5, 6]]


// 12. flatMap()

// Maps all array elements and creates a new flat array.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.flatMap((num) => [num, num * 2]);
// console.log(doubled); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]


// 13. forEach()

// Calls a function for each array element.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   console.log(num * 2);
// });
// // Output:
// // 2
// // 4
// // 6
// // 8
// // 10


// 14. from()

// Creates an array from an object.
// Example:

// const arrayLikeObject = { 0: 'apple', 1: 'banana', 2: 'orange', length: 3 };

// const fruits = Array.from(arrayLikeObject);
// console.log(fruits); // Output: ['apple', 'banana', 'orange']


// 15. includes()

// Checks if an array contains the specified element.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.includes('banana')); // Output: true
// console.log(fruits.includes('mango')); // Output: false


// 16. indexOf()

// Search the array for an element and returns its position.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.indexOf('banana')); // Output: 1
// console.log(fruits.indexOf('mango')); // Output: -1


// 17. isArray()

// Checks whether an object is an array.
// Example:

// console.log(Array.isArray([])); // Output: true
// console.log(Array.isArray({})); // Output: false


// 18. join()

// Joins all elements of an array into a string.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// const joinedString = fruits.join(', ');
// console.log(joinedString); // Output: 'apple, banana, orange'


// 19. keys()

// Returns a Array Iteration Object, containing the keys of the original array.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// const iterator = fruits.keys();
// console.log(iterator.next().value); // Output: 0
// console.log(iterator.next().value); // Output: 1
// console.log(iterator.next().value); // Output: 2


// 20. lastIndexOf()

// Search the array for an element, starting at the end, and returns its position.
// Example:

// const numbers = [1, 2, 3, 4, 2];

// console.log(numbers.lastIndexOf(2)); // Output: 4
// console.log(numbers.lastIndexOf(5)); // Output: -1


// 21. length

// Sets or returns the number of elements in an array.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.length); // Output: 3

// fruits.length = 2;
// console.log(fruits); // Output: ['apple', 'banana']


// 22. map()

// Creates a new array with the result of calling a function for each array element.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map((num) => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]


// 23. pop()

// Removes the last element of an array and returns that element.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// const removedFruit = fruits.pop();
// console.log(fruits); // Output: ['apple', 'banana']
// console.log(removedFruit); // Output: 'orange'


// 24. prototype

// Allows you to add properties and methods to an Array object.
// Example:

// Array.prototype.customMethod = function () {
//   console.log('Custom method called!');
// };

// const numbers = [1, 2, 3];

// numbers.customMethod(); // Output: 'Custom method called!'


// 25. push()

// Adds new elements to the end of an array and returns the new length.
// Example:

// const fruits = ['apple', 'banana'];

// const newLength = fruits.push('orange');
// console.log(fruits); // Output: ['apple', 'banana', 'orange']
// console.log(newLength); // Output: 3


// 26. reduce()

// Reduce the values of an array to a single value (going left-to-right).
// Example:

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15


// 27. reduceRight()

// Reduce the values of an array to a single value (going right-to-left).
// Example:

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15


// 28. reverse()

// Reverses the order of the elements in an array.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// numbers.reverse();
// console.log(numbers); // Output: [5, 4, 3, 2, 1]


// 29. shift()

// Removes the first element of an array and returns that element.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// const removedFruit = fruits.shift();
// console.log(fruits); // Output: ['banana', 'orange']
// console.log(removedFruit); // Output: 'apple'


// 30. slice()

// Selects a part of an array and returns the new array.
// Example:

// const fruits = ['apple', 'banana', 'orange', 'mango'];

// const slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits); // Output: ['banana', 'orange']


// 31. some()

// Checks if any of the elements in an array pass a test.
// Example:

// const numbers = [1, 2, 3, 4, 5];

// const hasEvenNumber = numbers.some((num) => num % 2 === 0);
// console.log(hasEvenNumber); // Output: true


// 32. sort()

// Sorts the elements of an array.
// Example:

// const fruits = ['banana', 'apple', 'orange'];

// fruits.sort();
// console.log(fruits); // Output: ['apple', 'banana', 'orange']


// 33. splice()

// Adds/Removes elements from an array.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// // Remove 'banana' and insert 'mango' and 'cherry'
// const removedFruits = fruits.splice(1, 1, 'mango', 'cherry');
// console.log(fruits); // Output: ['apple', 'mango', 'cherry', 'orange']
// console.log(removedFruits); // Output: ['banana']


// 34. toString()

// Converts an array to a string and returns the result.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// const fruitsString = fruits.toString();
// console.log(fruitsString); // Output: 'apple,banana,orange'


// 35. unshift()

// Adds new elements to the beginning of an array and returns the new length.
// Example:

// const fruits = ['banana', 'orange'];

// const newLength = fruits.unshift('apple');
// console.log(fruits); // Output: ['apple', 'banana', 'orange']
// console.log(newLength); // Output: 3


// 36. valueOf()

// Returns the primitive value of an array.
// Example:

// const fruits = ['apple', 'banana', 'orange'];

// const primitiveValue = fruits.valueOf();
// console.log(primitiveValue); // Output: ['apple', 'banana', 'orange']



//                           Map, Filter, Reduce

// Higher order array Method



//                      Looping Through Array
// For Loop
let num = [1, 2, 5, 6, 7, 9, 10]

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i])
// }

// num.forEach((element) => {
//   console.log(element * element)
// })


// For Loop:

// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }


// forEach():


// const array = [1, 2, 3, 4, 5];

// array.forEach((element) => {
//   console.log(element);
// });


// for...of Loop:
// The for...of loop is introduced in ECMAScript 6 and provides a concise way to iterate over iterable objects, including arrays. Here's an example:

// const array = [1, 2, 3, 4, 5];

// for (const element of array) {
//   console.log(element);
// }


// Array.map()
// The map() method creates a new array by applying a provided function to each element in the original array.It returns the resulting array.Here's an example:

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => {
//   return number * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Array.filter()
// The filter() method creates a new array with all elements that pass a test implemented by the provided function. It returns the filtered array.Here's an example:

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((number) => {
//   return number % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]


// Array.reduce()
// The reduce() method applies a function to an accumulator and each element in the array(from left to right) to reduce it to a single value.It returns the accumulated result.Here's an example:

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentNumber) => {
//   return accumulator + currentNumber;
// }, 0);

// console.log(sum); // Output: 15

// const array = [1, 2, 3, 4, 5];
// let sum = array.reduce(add)

// add -> Function