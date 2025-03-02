//                         JavaScript In Browser
// Semicolon Are Optional
// JavaScript ignores spaces, tabs, and newlines that appear in JavaScript programs. 
// JS -> Initially Created To Make Web Pages
// Browser Has Embedded Engine -> JavaScript Engine or JavaScript Run Time
// JS Ability In Browser Is Very Limited


// Developer Tool -> Every Browser Has This -> Make Developer Life Easier 


// Element - Console - Network
// All HTML Element - All Error + Log - All Network Request


//                             Use JS In Browser

// Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.
// To use JavaScript in a web page, you can embed it directly within the HTML document.

// Inline Script: JavaScript code can be placed directly within the <script> tags inside the HTML document. For example:


// <script>
//   // JavaScript code here
// </script>


// External Script: JavaScript code can also be stored in an external file and linked to the HTML document using the <script> tag's src attribute. For example:

// <script src="script.js"></script> This Must Be In Body Tag


//                        Example Of JS In Browser

// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript in the Browser</title>
// </head>
// <body>
//   <h1 id="heading">Hello, World!</h1>
//   <button id="changeBtn">Change Text</button>

//   <script>
//     // Access the heading element
//     const heading = document.getElementById('heading');

//     // Access the button element
//     const changeBtn = document.getElementById('changeBtn');

//     // Add an event listener to the button
//     changeBtn.addEventListener('click', function() {
//       // Change the text of the heading
//       heading.textContent = 'Text Changed!';
//     });
//   </script>
// </body>
// </html>


//                           Console Object Method


// The console object in JavaScript provides a set of methods that allow developers to interact with the browser's console. These methods are useful for logging messages, debugging code, and monitoring the execution of JavaScript code. Here are some commonly used methods of the console object along with examples:

// console.log(console) -> List All Console Method

// External JS is Better To Use  -> Separation Of Concerns & Browser Caching -> Browser Save That FIle SO We Not Load Again It

// log(): Logs a message to the console.

// console.log('Hello, World!'); // Output: Hello, World!


// error(): Logs an error message to the console.

// console.error('An error occurred.'); // Output: An error occurred.


// warn(): Logs a warning message to the console.

// console.warn('This is a warning.'); // Output: This is a warning.


// info(): Logs an informational message to the console.

//  // Output: This is an information.


// debug(): Logs a debug message to the console.

// console.debug('Debugging information.'); // Output: Debugging information.


// assert(): Writes an error message to the console if the provided condition is false.

// const value = 10;
// console.assert(value > 20, 'Value should be greater than 20.'); // Output: Value should be greater than 20.


// clear(): Clears the console.

// console.clear(); // Clears the console


// table(): Displays tabular data as a table in the console.

// const data = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Bob', age: 35 }
// ];
// console.table(data);
// Output:
// ┌─────┬──────┬─────┐
// │ (index) │ name │ age │
// ├─────┼──────┼─────┤
// │   0   │ 'John' │  25 │
// │   1   │ 'Jane' │  30 │
// │   2   │ 'Bob'  │  35 │
// └─────┴──────┴─────┘
// count(): Logs the number of times count() has been called with the provided label.

// console.count('Counter'); // Output: Counter: 1
// console.count('Counter'); // Output: Counter: 2
// console.count('Another Counter'); // Output: Another Counter: 1
// console.count('Counter'); // Output: Counter: 3


// time() and timeEnd(): Measures the time taken to execute a block of code.

// console.time('Timer');
// // Code block to measure execution time
// console.timeEnd('Timer'); // Output: Timer: <time in milliseconds>
//                        While Loop Vs For Loop

console.time("forLoop")
for (let i = 0; i < 500; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

console.time("whileLoop")

let i = 0;
while (i < 500) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")

//                                        List

// assert()	        -> Writes an error message to the console if a assertion is false
// clear()	        -> Clears the console
// count()          -> Logs the number of times that this particular call to count() has been called
// error()	        -> Outputs an error message to the console
// group()	        -> Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
// groupCollapsed()	-> Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
// groupEnd()	      -> Exits the current inline group in the console
// info()           -> Outputs an informational message to the console
// log()	          -> Outputs a message to the console
// table()	        -> Displays tabular data as a table
// time()	          -> Starts a timer (can track how long an operation takes)
// timeEnd()	      -> Stops a timer that was previously started by console.time()
// trace()	        -> Outputs a stack trace to the console
// warn()         	-> Outputs a warning message to the console


//                    Interaction In JavaScript: Prompt, Alert, And Confirm
// BOM Functions
// 1. prompt -> Take Input From User

// Example:

// const name = prompt('Enter your name:');
// console.log('Hello, ' + name + '!');

// inp = prompt("Hi", "No") -> No Is Optional Default Value

// This example prompts the user to enter their name and stores the entered value in the name variable. It then logs a greeting message to the console using the entered name.


// 2. alert

// The alert method displays a dialog box with a message to the user. It is primarily used to show information or provide notifications to the user.

// Example:

// alert('This is an alert message.');
// This example displays an alert box with the message "This is an alert message."


// 3. confirm

// The confirm method displays a dialog box with a message and two buttons: OK and Cancel.It allows the user to confirm or cancel an action.It returns a boolean value indicating the user's choice (true for OK and false for Cancel).

// Example:

// const result = confirm('Are you sure you want to delete this item?');
// if (result === true) {
//   console.log('Item deleted.');
// } else {
//   console.log('Deletion cancelled.');
// }
// This example shows a confirm dialog asking the user if they want to delete an item. Depending on the user's choice, it logs either "Item deleted." or "Deletion cancelled." to the console.


//                          Window Object, Dom & Bom


       // +---------------------------+
       // |                           |
       // |          Window           |
       // |                           |
       // +---------------------------+
       //                 |
       //                 | Provides access to:
       //                 |
       // +---------------------------+
       // |                           |
       // |    Document Object Model  |
       // |       (DOM)               |
       // |                           |
       // +---------------------------+
       //                 |
       //                 | Provides access to:
       //                 |
       // +---------------------------+
       // |                           |
       // |   Browser Object Model    |
       // |        (BOM)              |
       // |                           |
       // +---------------------------+
       //                 |
       //                 | Provides access to:
       //                 |
       // +---------------------------+
       // |                           |
       // |    JavaScript Core        |
       // |                           |
       // +---------------------------+

//                        DOM (Document Object Model):
// The Document Object Model represents the structure of an HTML or XML document as a tree-like structure, where each element in the document is represented as a node. The DOM provides a way to interact with the content and structure of a web page using programming languages like JavaScript. The window object in JavaScript provides access to the DOM, allowing you to manipulate elements, change their attributes, and handle events. You can use methods like getElementById(), querySelector(), and properties like innerHTML to interact with the DOM through the window object.


// Simply Dom Represent The Page Content As HTML

// document.body  -> Page Body As JS Object
// document.body.style.background="Green"
// Change Page Background To Green


//                 BOM (Browser Object Model):
// The Browser Object Model represents the browser window or tab itself. It provides additional objects and properties that allow you to control the browser's behavior and interact with the user. The window object acts as the global object in JavaScript and serves as the entry point to the BOM. It provides properties and methods to control the browser's behavior, such as window.location to manipulate the URL, window.alert() to display alert messages, and window.open() to open new browser windows or tabs.


// Location href = "https://dpvasani56.com"  -> Redirect To Another URL

// console.log(window) => All Method
// Window  Object -> Global Object