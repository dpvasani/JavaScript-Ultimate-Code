//                                 Event & Other DOM Properties

// Event Handling
// Now, let's discuss Event Handling using Javascript:
// Event Handling:
// Event handling in JavaScript with the HTML DOM
// (Document Object Model) allows you to respond
// to user interactions or other events that occur on
// a webpage  


// Event Types:
// Events can be triggered by various actions, such as a user
// clicking a button, hovering over an element, submitting a
// form, or even the page finishing loading. Some common
// event types include click, mouseover, submit, keydown,
// and load. You can attach event handlers to these events
// to execute JavaScript code when the event occurs. like
// this:
<button id="myButton">Click me</button>

var button = document.getElementById("myButton");
// Event handler for the click event
button.addEventlistener("click", function() f
alert("Button clicked!");
});

// This code finds a button on a web page, listens for a
// click on that button, and when the click happens, it
// shows a pop-up message saying 'Button clicked!" to
// let the user know that the button was indeed
// clicked.


// Attaching Event Handlers:
// To attach an event handler to an element, you can use
// the addEventListener method. This method takes the
// event type as the first argument and a callback
// function as the second argument. The callback function
// is executed when the event is triggered.Like this:

var button = document.getElementById("myButton");
// Event handler for the click event
function handleClick() {
}
alert("Button clicked!");
// Attach the event handler to the button
button.addEventListener("click", handleClick);

// This code finds a button on a web page, defines a function
// that displays an alert when the button is clicked, and attaches
// that function as an event handler to the button. When the
// button is clicked, the function is triggered, and an alert box
// pops up with the message "Button clicked!" to let the user
// know that the button was clicked.


// Removing Event Handlers:
// If you no longer need an event handler, you can remove it
// using the removeEventListener method. This method
// requires the same event type and callback function that were
// used to attach the event handler.

var button = document.getElementById("myButton");
// Event handler for the click event
function handleclick() {
  alert("Button clicked!");
}
// Attach the event handler to the button
button.addEventListener("click", handleClick);
// Remove the event handler from the button
button.removeEventlistener("click", handleClick);

// This code attaches a click event handler to a button element with the
// id "'myButton". When the button is clicked, an alert saying "Button
// clicked!" will be shown.
// Later, the event handler is removed from the button using the
// removeEventListener method. This means that when the button is
// clicked again, the handleClick function will no longer be executed.

// Example:

// <button id="myButton">Click me</button>

// <script>
// var button = document.getElementById( "myButton");
// function handleClick() {
// alert( "Button clicked!");
// }
// button.addEventlistener("click", handleclick);
// </script>

{/* output
127.0.0.1:5501 says
Button clicked!
OK
Click me */}