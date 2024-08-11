// Strings

// A string is a sequence of characters enclosed in single quotes (') or double quotes ("). Strings are immutable, meaning that once created, they cannot be changed. However, string methods can be used to manipulate and extract information from strings.

// Strings are used to store and manipulate text

// String -> Collection of characters

// Single Quotes -> let name = 'dp';
// Double Quotes -> let name = "dp";

let name = "dp";
// console.log(name[3]); -> undefined

// Template Literals

// After ES6, Template Literals came into use, utilizing backticks (`).

let boy1 = "hmm";
let boy2 = 'ok';

// Print "hmm nice ok"
// let sentence = `boy1 "nice" 'is' boy2` -> We make a string using single or double quotes, both usage possible if string is made through backticks

// String Interpolation
let sentence = `${boy1} nice ${boy2}`;
console.log(sentence); // Output: hmm nice ok

let fruit = `Bana\'na`; // Bana'na
console.log(fruit);

// \' -> Escape character -> Count as one character 
// \n -> New line
// \t -> Tab
// \r -> Carriage return

// String Methods & Properties

// Accessing Characters:
// Individual characters in a string can be accessed using square brackets and their index. Remember, indexing starts at 0.

const message = 'Hello';
console.log(message[0]); // Output: H
console.log(message[3]); // Output: l

// String Concatenation:
// Strings can be concatenated using the + operator or the concat() method.

const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: John Doe

// Using concat()
const greetingMessage = 'Hello, ';
const nameConcat = 'John';
const greeting = greetingMessage.concat(nameConcat);
console.log(greeting); // Output: Hello, John

// Finding Substrings:
// The indexOf() method returns the index of the first occurrence of a substring within a string. It returns -1 if the substring is not found.

const welcomeMessage = 'Hello, world!';
console.log(welcomeMessage.indexOf('world')); // Output: 7
console.log(welcomeMessage.indexOf('open')); // Output: -1

// Extracting Substrings:
// The slice() method extracts a portion of a string based on the start and end indexes.

console.log(welcomeMessage.slice(0, 5)); // Output: Hello
console.log(welcomeMessage.slice(7)); // Output: world!

// Replacing Substrings:
// The replace() method replaces a specified substring with another substring.

const personalizedMessage = 'Hello, John!';
console.log(personalizedMessage.replace('John', 'Alice')); // Output: Hello, Alice!

// Splitting Strings:
// The split() method splits a string into an array of substrings based on a specified delimiter.

console.log(welcomeMessage.split(' ')); // Output: ["Hello,", "world!"]

// Checking if a String Contains a Substring:
// The includes() method checks if a string contains a specified substring and returns true or false.

console.log(welcomeMessage.includes('World')); // Output: true
console.log(welcomeMessage.includes('open')); // Output: false

// String Length:
// The length property returns the number of characters in a string.

console.log(welcomeMessage.length); // Output: 13

// String Slice:
// The slice() method extracts a portion of a string based on the start and end indexes. It returns a new string.

console.log(welcomeMessage.slice(7)); // Output: world!
console.log(welcomeMessage.slice(0, 5)); // Output: Hello

// String Substring:
// The substring() method is similar to slice(), but it doesn't accept negative indexes. It returns a new string.

console.log(welcomeMessage.substring(7)); // Output: world!
console.log(welcomeMessage.substring(0, 5)); // Output: Hello

// String Substr:
// The substr() method extracts a portion of a string based on the start index and length. It returns a new string.

console.log(welcomeMessage.substr(7)); // Output: world!
console.log(welcomeMessage.substr(0, 5)); // Output: Hello

// String Replace:
// The replace() method replaces a specified substring with another substring. It returns a new string.

console.log(personalizedMessage.replace('John', 'Alice')); // Output: Hello, Alice!

// String ReplaceAll:
// The replaceAll() method replaces all occurrences of a specified substring with another substring. It returns a new string. (Available from ECMAScript 2021)

const repetitiveMessage = 'Hello, John! John is a good guy.';
console.log(repetitiveMessage.replaceAll('John', 'Alice')); // Output: Hello, Alice! Alice is a good guy.

// String toUpperCase and toLowerCase:
// The toUpperCase() and toLowerCase() methods convert a string to uppercase and lowercase, respectively. They return a new string.

console.log(welcomeMessage.toUpperCase()); // Output: HELLO, WORLD!
console.log(welcomeMessage.toLowerCase()); // Output: hello, world!

// String Concatenation:
// The concat() method concatenates two or more strings and returns a new string.

console.log(firstName.concat(' ', lastName)); // Output: John Doe

// String Trim:
// The trim() method removes whitespace from both ends of a string and returns a new string.

const messageWithWhitespace = '   Hello, world!   ';
console.log(messageWithWhitespace.trim()); // Output: Hello, world!

// String TrimStart and TrimEnd:
// The trimStart() and trimEnd() methods remove whitespace from the beginning and end of a string, respectively. They return a new string. (Available from ECMAScript 2021)

console.log(messageWithWhitespace.trimStart()); // Output: Hello, world!
console.log(messageWithWhitespace.trimEnd()); // Output:    Hello, world!

// String PadStart and PadEnd:
// The padStart() and padEnd() methods pad a string with a specified character to a given length. They return a new string. (Available from ECMAScript 2017)

const paddedMessage = 'Hello';
console.log(paddedMessage.padStart(10, '*')); // Output: *****Hello
console.log(paddedMessage.padEnd(10, '-')); // Output: Hello-----

// String CharAt and CharCodeAt:
// The charAt() method returns the character at a specified index in a string.
// The charCodeAt() method returns the Unicode value of the character at a specified index in a string.

console.log(message.charAt(0)); // Output: H
console.log(message.charCodeAt(0)); // Output: 72

// String Split:
// The split() method splits a string into an array of substrings based on a specified delimiter.

console.log(welcomeMessage.split(',')); // Output: ["Hello", " World!"]

  // Method summary:
  // String length
  // String slice()
  // String substring()
  // String substr()
  // String replace()
  // String replaceAll()
  // String toUpperCase()
  // String toLowerCase()
  // String concat()
  // String trim()
  // String trimStart()
  // String trimEnd()
  // String padStart()
  // String padEnd()
  // String charAt()
  // String charCodeAt()
  // String split()