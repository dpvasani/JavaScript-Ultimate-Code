//                   Ch 7 DOM

// Dom Is Refer To HTML Page
// Where All The Node Are Object

// 3 Types Of Node In DOM Tree

// 1. Text Node
// 2. Element Node
// 3. Comment Node
// 4. WhiteSpace Node

// Document Object Model

HTML Is Root -> Head & Body Are Child

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

// Image Link:https://www.w3schools.com/js/js_htmldom.asp

// The DOM is a W3C (World Wide Web Consortium) standard.

// The W3C DOM standard is separated into 3 different parts:

// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents


// The HTML DOM is a standard object model and programming interface for HTML. It defines:


// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.



// Finding HTML Elements


// Method	Description
// document.getElementById(id) -> Find an element by element id
// document.getElementsByTagName(name) -> Find elements by tag name
// document.getElementsByClassName(name) -> Find elements by class name

// Changing HTML Elements
// Property	Description
// element.innerHTML =  new html content	 -> Change the inner HTML of an element
// element.attribute = new value	 -> Change the attribute value of an HTML element
// element.style.property = new style	 -> Change the style of an HTML element
// Method	Description
// element.setAttribute(attribute, value)	 -> Change the attribute value of an HTML element


// Adding and Deleting Elements
// Method	Description
// document.createElement(element)	 -> Create an HTML element
// document.removeChild(element)	 -> Remove an HTML element
// document.appendChild(element) -> 	Add an HTML element
// document.replaceChild(new, old) -> Replace an HTML element
// document.write(text)	Write into  -> the HTML output stream


// Adding Events Handlers

// Method	Description
// document.getElementById(id).onclick = function(){code}	 -> Adding event handler code to an onclick event

// Finding HTML Objects
// The first HTML DOM Level 1 (1998), defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.

// Later, in HTML DOM Level 3, more objects, collections, and properties were added.

// Property	Description


// document.anchors -> Returns all <a> elements that have a name attribute	
// document.applets	 -> Deprecated	
// document.baseURI -> 	Returns the absolute base URI of the document	
// document.body	-> Returns the <body> element	
// document.cookie	 -> Returns the document's cookie	
// document.doctype -> 	Returns the document's doctype	
// document.document -> Element	Returns the <html> element	
// document.documentMode -> 	Returns the mode used by the browser	
// document.documentURI	 -> Returns the URI of the document	
// document.domain	 -> Returns the domain name of the document server	
// document.domConfig	 -> Obsolete.	
// document.embeds	 -> Returns all <embed> elements	
// document.forms	 -> Returns all <form> elements	
// document.head  -> 	Returns the <head> element	
// document.images  -> 	Returns all <img> elements	
// document.implementation  -> 	Returns the DOM implementation	
// document.inputEncoding -> 	Returns the document's encoding (character set)	
// document.lastModified	 -> Returns the date and time the document was updated	
// document.links	 -> Returns all <area> and <a> elements that have a href attribute	
// document.readyState	 -> Returns the (loading) status of the document	
// document.referrer -> 	Returns the URI of the referrer (the linking document)	
// document.scripts	 ->  Returns all <script> elements	
// document.strictErrorChecking	 -> Returns if error checking is enforced	
// document.title	 ->  Returns the <title> element	
// document.URL  ->   	Returns the complete URL of the document	


// Example
// const element = document.getElementById("intro");
// If the element is found, the method will return the element as an object (in element).

// If the element is not found, element will contain null.

// Finding HTML Elements by Tag Name
// This example finds all <p> elements:

// Example
// const element = document.getElementsByTagName("p");
// This example finds the element with id="main", and then finds all <p> elements inside "main":

// Example
// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");
// Finding HTML Elements by Class Name
// If you want to find all HTML elements with the same class name, use getElementsByClassName().
// This example returns a list of all elements with class="intro".

// Example
// const x = document.getElementsByClassName("intro");
// Finding HTML Elements by CSS Selectors
// If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
// This example returns a list of all <p> elements with class="intro".

// Example
// const x = document.querySelectorAll("p.intro");
// Finding HTML Elements by HTML Object Collections
// This example finds the form element with id="frm1", in the forms collection, and displays all element values:

// Example
// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length; i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;
// The following HTML objects (and object collections) are also accessible:

// document.anchors
// document.body
// document.documentElement
// document.embeds
// document.forms
// document.head
// document.images
// document.links
// document.scripts
// document.title

                // Changing HTML Content

// The easiest way to modify the content of an HTML element is by using the innerHTML property.

// To change the content of an HTML element, use this syntax:

// document.getElementById(id).innerHTML = new HTML
// This example changes the content of a <p> element:

// Example
// <html>
// <body>

// <p id="p1">Hello World!</p>

// <script>
// document.getElementById("p1").innerHTML = "New text!";
// </script>

// </body>
// </html>
// Example explained:

// The HTML document above contains a <p> element with id="p1"
// We use the HTML DOM to get the element with id="p1"
// A JavaScript changes the content (innerHTML) of that element to "New text!"
// This example changes the content of an <h1> element:

// Example
// <!DOCTYPE html>
// <html>
// <body>

// <h1 id="id01">Old Heading</h1>

// <script>
// const element = document.getElementById("id01");
// element.innerHTML = "New Heading";
// </script>

// </body>
// </html>
// Example explained:

// The HTML document above contains an <h1> element with id="id01"
// We use the HTML DOM to get the element with id="id01"
// A JavaScript changes the content (innerHTML) of that element to "New Heading"
// Changing the Value of an Attribute
// To change the value of an HTML attribute, use this syntax:

// document.getElementById(id).attribute = new value
// This example changes the value of the src attribute of an <img> element:

// Example
// <!DOCTYPE html>
// <html>
// <body>

// <img id="myImage" src="smiley.gif">

// <script>
// document.getElementById("myImage").src = "landscape.jpg";
// </script>

// </body>
// </html>
// Example explained:

// The HTML document above contains an <img> element with id="myImage"
// We use the HTML DOM to get the element with id="myImage"
// A JavaScript changes the src attribute of that element from "smiley.gif" to "landscape.jpg"
// Dynamic HTML content
// JavaScript can create dynamic HTML content:

// Date : Mon Jul 24 2023 13:50:25 GMT+0530 (India Standard Time)

// Example
// <!DOCTYPE html>
// <html>
// <body>

// <script>
// document.getElementById("demo").innerHTML = "Date : " + Date(); </script>

// </body>
// </html>
// document.write()
// In JavaScript, document.write() can be used to write directly to the HTML output stream:

// Example
// <!DOCTYPE html>
// <html>
// <body>

// <p>Bla bla bla</p>

// <script>
// document.write(Date());
// </script>

// <p>Bla bla bla</p>

// </body>
// </html>


console.log(`Darshan\'s DOM Notes`);

// List Of Important Concept Of DOM
// 1. Accessing HTML Elements
// 2. Modifying HTML Elements
// 3. Creating And Appending Elements
// 4. Event Handling
// 5. Traversing The DOM
// 6. Styling Elements
// 7. AJAX And Fetch
// 8. Error Handling
// 9. Validation

//                      Walking Through DOM Tree

// Auto Correction -> 

//    <span>This is me</div>  -> Browser will auto correct this

//                   Access HTML Element



// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections
// Finding HTML Element by Id


// 1) getElementById
// Accessing HTML elements is a fundamental aspect of
// JavaScript HTML DOM (Document Object Model)
// programming. It allows you to interact with and manipulate
// the elements of an HTML document. JavaScript provides
// several methods to access HTML elements:
// Accessing Elements by ID:
// To access an HTML element by its unique ID, you can use the
// getElementByld method, It returns the element with the
// specified ID attribute value. like this:

// HTML
// <div id="myElement">Hello, world!</div>

// JS
// const element = document.getElementById( "myElement');
// console. log(element. innerHTML);

// Output: Hello, world!



// 2) getElementsByClassName
// Accessing Elements by Class Name:
// You can access HTML elements based on their class name
// using the getElementsByClassName method, It returns a
// collection of elements that have the specified class name
// like this:
// HTML
// <p class="myClass">This is a paragraph.</p>

// JS
// const elements = document.getElementsByClassName('myClass');
// console.log(elements[0].innerHTML);

// Output: This is a paragraph.



// 3) Accessing HTML Elements -> getElementsByTagName
// Accessing Elements by Tag Name:
// To access HTML elements based on their tag name, you can
// use the getElementsByTagName method. It returns a
// collection of elements with the specified tag name. like this:
// HTML
// <h1>This is a heading.</h1>

// JS
// const elements = document.getElementsByTagName('hl');
// console.log(elements[0].innerHTML);

// Output: This is a heading.


// 4) Accessing HTML Elements -> querySelector
// Accessing Elements using CSS Selectors:
// JavaScript also provides the querySelector and
// querySelectorAll methods, which allow you to select elements
// using CSS selectors. The querySelector method returns the first
// element that matches the selector, while querySelectorAll
// returns a collection of all matching elements. like this:
// HTML
// <p class="mySelector">This is a paragraph.</p>

// JS
// const element = document.querySelector(.mySelector');
// console.log(element.innerHTML);

// Output: This is a paragraph.


// 5) Accessing HTML Elements
// Accessing Nested Elements:
// You can access nested HTML elements by
// chaining the accessing methods. like this:
// HTML
// <div id="parent">
// <p class="child">This is a child paragraph.</p>
// </div>

// JS
// const parentElement = document.getElementById('parent');
// const childElement = parentElement.getElementsByclassName('child')[0];
// console. log(childElement. innerHTML);

// Output: This is a child paragraph.



//               Modifying HTML Elements

// 1) 
// Now, let's discuss Modifying HTML elements using
// Javascript:
// Modifying HTML Elements:
// Modifying HTML elements using JavaScript HTML
// DOM (Document Object Model) allows you to
// dynamically manipulate the structure, content,
// and style of an HTML document. The HTML DOM
// represents the HTML elements as objects, which
// can be accessed and modified using JavaScript.

// 2) Modifying Content
// Firstly, access HTML elements by using various methods like
// getElementByld, getElementsByClassName,
// getElementsByTagName, or querySelector as discussed in
// part1.
// Once you have accessed an element, you can modify its
// content using the innerHTML property. This property allows
// you to set or retrieve the HTML content within an element.
// like this:

// HTML
// <div id="myDiv">Hello, World!</div>

// JS
// Accessing an element by ID
// const myDiv = document.getElementById("myDiv");
// // Modifying the content of an element
// myDiv.innerHTML = "Hello, JavaScript!";

// 3)Modifying Attributes
// You can modify the attributes of an element using the
// setAttribute method. This method takes two arguments: the
// attribute name and its new value.like this:

// HTML
// <img id="myImage" src="old_image.jpg" alt="My Image">

// JS
// //Accessing HTML element
// const myImage = document.getElementById( "myImage");
// // Modifying the "src" attribute of an image element
// myImage.setAttribute("src", "new_image.jpg");

// 3) Modifying Styles
// You can modify the styles of an element by using the style
// property. This property allows you to access and modify
// individual CSS properties of an element like this:

// HTML
// <div id="myDiv">Hello, World!</div>

// JS
// // Modifying the background color of an element
// myDiv.style.backgroundColor = "red";

// 4) Adding and Removing Classes
// You can add or remove CSS classes from an element using
// the classList property. The classList property provides
// methods like add, remove, and toggle to manipulate classes
// like this:

// HTML
// <div id="myDiv">Hello, World!</div>

// JS
// // Adding a class to an element
// myDiv.classList.add("highlight");
// Removing a class from an element
// myDiv.classlist.remove("highlight");

// output:
// <div id="myDiv" class=" highlight">Some content</div>

// 5) Creating New Elements
// You can create new HTML elements dynamically using the
// createElement method. After creating an element, you can
// modify its properties and append it to the document. like
// this:
// JS
// // Creating a new paragraph element
// const newParagraph = document.createElement("p");
// // Modifying the content of the new paragraph
// newParagraph.innerHTML = "This is a new paragraph.";
// // Appending the new paragraph to the document body
// document.body.appendChild(newParagraph);

// Output:
// <body>
// <!-- Existing content -->
// <h1>Title</h1>
// <div>Some content</div>
// <!-- added using JS -->
// <p>This is a new paragraph.</p>
// </body>

//                      Creating And Appending Elements
// 1) Now, let's discuss Creating and Appending Elements using Javascript: Creating and Appending Elements: Creating and appending elements using JavaScript HTML DOM allows you to dynamically create new HTML elements and insert them into the document. This enables you to add or generate content dynamically based on user interactions or other conditions.


// 2)Creating and Appending Elements
// Creating Elements To create a new HTML element, you can use the createElement method provided by the document object. This method takes the tag name of the element you want to create as an argument and returns a new element object, like this:

// const newParagraph = document.createElement("p");

// Modifying Elements

// Once you have created an element, you can modify its properties such as innerHTML, textContent, classNam0e, or any other attribute. These modifications define the content and appearance of the element.

// newParagraph.innerHTML = "This is a new paragraph.";
// newParagraph.className = "newpara";

// 3) Creating and Appending Elements Appending Elements After creating and modifying an element, you can append it to the document or another element using methods like appendChild, insertBefore, or insertAdjacentElement. These methods allow you to specify where the new element should be inserted within the document.

// document.body.appendChild( newParagraph);

// 4) Creating and Appending Elements complete example to understand 'creating modifying and appending elements'

// HTML

// <div id="content">
// <h2>Existing Content</h2>
// <p>This is some existing content.</p>
// </div>

// JavaScript

// // Creating a new paragraph element
// const newParagraph = document.createElement("p");
// newParagraph. textContent "This is a new paragraph." ".
// // Appending the new paragraph to the document body
// document.body.appendchild(newparagraph);

// Output
// Existing Content
// This is some existing content.
// This is a new paragraph.

// 5) Creating and Appending Elements one more example

// HTML
// <div id="myDiv"></div>

// JavaScript:

// var div = document.getElementById("myDiv");
// var paragraph = document.createElement("p");
// paragraph.textContent = "This paragraph is created using Creating and Appending
// Elements of Javascript HTML DOM.";
// div.appendChild(paragraph);

// Output
// <div id="myDiv">
// <p>This paragraph is created using Creating and Appending Elements of Javascript
// HTML DOM.</p>
// </div>



//                    Some More IMP Concepts

// Document Body -> Null -> If JavaScript Written Before Body Tag


//                    Firstchild, Lastchild & Child Node
// Methods
// element.firstchild -> First Child Element
// element.lastchild -> Last Child Element
// element.childnodes -> All Child Nodes

// Always True 
elemnet.childnodes[0] === element.firstchild
element.childnodes[elemnet.childnodes.length - 1] === element.lastchild

// element.haschildmodes() -> To check if child is there or not

// Childnodes -> Looks Like Array -> But Actually Its Collection
// array.from(collection) -> Convert Into Array -> Array Method Wont Work


//                                     Dom Collection
// They Are Read Only
// They Are Live
// element.childnodes variable(reference) will Update Automatically If Chidnode of Element is changed
// They Are Iterable Using For...Of Loop

//                       Sibling And The Parent
// Siling -> Children Of Same Parent -> Two Brother Born From Same Mother
// Head & Body Are Sibling -> Body -> Right Or Next Sibling -> NextSibling Property -> Head -> Left Or Previous Sibling -> PreviousSibling Property

alert(document.documentElement.parentNode); //Document
alert(document.documentElement.parentElement);//Null

//                           Element Only Navigation
// We Don't Want Text or Comment Nodes. Some Links Only Take Element Node Into Account 
// Ex:
Document.previousElementSibling -> Previous Sibling Which Is an Element   
Document.nextElementSibling ->  next Sibling (Element)
Document.firstElementChild -> First Element Child
Document.lastElementChild -> Last Element Child

//                               Table Link
// Certain DOM Element Provide Some Specific To Their Type For Convenience 
// Table.row -> Collection tr Element
// Table.caption -> ReadableStreameference to <caption>
// Table.thead -> Reference to <thead>
// Table.tfoot -> Reference to <tfoot>
// Table.tbodies -> Collection of <tbody> elements
// Table.rows -> Collection of <tr> Inside
// Tr.cells -> Collection of td and tr
// Tr.sectionRowIndex -> Index Of tr inside enclosing element
// Tr.rowIndex -> Row Number Starting From 0
// Td.cellIndex -> No of cell inside enclosing <tr>

//                         Match, Closest & Contain Method
// Searching The DOM
// 1) element.matches(CSS) -> To Check If Element Matches The Given CSS Selectors
// 2) element.closest(CSS) -> To Look For The Nearest ancestor That Matches The Given CSS-Selector. The Element Itself Is Also Checked.
// 3) elemeA.contain(elemB) -> Return True If ElemB Is Inside ElemA(A descendant Of ElemA) or When elemA===elemB



//                                        From Validation  


// JavaScript Form Validation
// HTML form validation can be done by JavaScript.

// If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:

// JavaScript Example
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
// The function can be called when the form is submitted:

// HTML Form Example
// <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
// Name: <input type="text" name="fname">
// <input type="submit" value="Submit">
// </form>
// JavaScript Can Validate Numeric Input
// JavaScript is often used to validate numeric input:

// Please input a number between 1 and 10

//  Submit
// Automatic HTML Form Validation
// HTML form validation can be performed automatically by the browser:

// If a form field (fname) is empty, the required attribute prevents this form from being submitted:

// HTML Form Example 
// <form action="/action_page.php" method="post">
//   <input type="text" name="fname" required>
//   <input type="submit" value="Submit">
// </form>
//  Automatic HTML form validation does not work in Internet Explorer 9 or earlier.

// Data Validation
// Data validation is the process of ensuring that user input is clean, correct, and useful.

// Typical validation tasks are:

// has the user filled in all required fields?
// has the user entered a valid date?
// has the user entered text in a numeric field?
// Most often, the purpose of data validation is to ensure correct user input.

// Validation can be defined by many different methods, and deployed in many different ways.

// Server side validation is performed by a web server, after input has been sent to the server.

// Client side validation is performed by a web browser, before input is sent to a web server.

// HTML Constraint Validation
// HTML5 introduced a new HTML validation concept called constraint validation.

// HTML constraint validation is based on:

// Constraint validation HTML Input Attributes
// Constraint validation CSS Pseudo Selectors
// Constraint validation DOM Properties and Methods
// Constraint Validation HTML Input Attributes
// Attribute	Description
// disabled	Specifies that the input element should be disabled
// max	Specifies the maximum value of an input element
// min	Specifies the minimum value of an input element
// pattern	Specifies the value pattern of an input element
// required	Specifies that the input field requires an element
// type 	Specifies the type of an input element
// For a full list, go to HTML Input Attributes.

// Constraint Validation CSS Pseudo Selectors
// Selector	Description
// :disabled	Selects input elements with the "disabled" attribute specified
// :invalid	Selects input elements with invalid values
// :optional	Selects input elements with no "required" attribute specified
// :required	Selects input elements with the "required" attribute specified
// :valid	Selects input elements with valid values 


    
                                // DOM CSS 


// Changing HTML Style
// To change the style of an HTML element, use this syntax:

// document.getElementById(id).style.property = new style
// The following example changes the style of a <p> element:

// Example
// <html>
// <body>

// <p id="p2">Hello World!</p>

// <script>
// document.getElementById("p2").style.color = "blue";
// </script>

// </body>
// </html>
// Using Events
// The HTML DOM allows you to execute code when an event occurs.

// Events are generated by the browser when "things happen" to HTML elements:

// An element is clicked on
// The page has loaded
// Input fields are changed
// You will learn more about events in the next chapter of this tutorial.

// This example changes the style of the HTML element with id="id1", when the user clicks a button:

// Example
// <!DOCTYPE html>
// <html>
// <body>

// <h1 id="id1">My Heading 1</h1>

// <button type="button"
// onclick="document.getElementById('id1').style.color = 'red'">
// Click Me!</button>

// </body>
// </html>
// More Examples
// Visibility How to make an element invisible. Do you want to show the element or not?

// HTML DOM Style Object Reference
// For all HTML DOM style properties, look at our complete HTML DOM Style Object Reference.

// Test Yourself With Exercises
// Exercise:
// Change the text color of the <p> element to "red".

// <p id="demo"></p>

// <script>
// document.getElementById("demo")
// .style.color
//  = "red";
// </script>


