//                     Ch 7 DOM Practice Set

// Q1: How can you access an HTML element by its unique ID?
// A: By using the getElementById method. For example:

const element = document.getElementById('myElement');


// Q2: How can you access HTML elements based on their class name?
// A: By using the getElementsByClassName method. For example:

const elements = document.getElementsByClassName('myClass');


// Q3: How can you access HTML elements based on their tag name?
// A: By using the getElementsByTagName method. For example:

const elements = document.getElementsByTagName('h1');


// Q4: How can you access HTML elements using CSS selectors?
// A: By using the querySelector method. For example:

const element = document.querySelector('.mySelector');


// Q5: How can you modify the content of an HTML element?
// A: By using the innerHTML property. For example:

const myDiv = document.getElementById('myDiv');
myDiv.innerHTML = 'Hello, JavaScript!';


// Q6: How can you modify the attributes of an HTML element?
// A: By using the setAttribute method. For example:

const myImage = document.getElementById('myImage');
myImage.setAttribute('src', 'new_image.jpg');


// Q7: How can you modify the styles of an HTML element?
// A: By using the style property. For example:

const myDiv = document.getElementById('myDiv');
myDiv.style.backgroundColor = 'red';


// Q8: How can you add a class to an HTML element?
// A: By using the classList.add method. For example:

const myDiv = document.getElementById('myDiv');
myDiv.classList.add('highlight');


// Q9: How can you create a new HTML element and append it to the document?
// A: By using the createElement and appendChild methods. For example:

const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is a new paragraph.';
document.body.appendChild(newParagraph);


// Q10: How can you check if an element contains another element as a descendant?
// A: By using the contains method. For example:

const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');
const isChildOfParent = parentElement.contains(childElement);