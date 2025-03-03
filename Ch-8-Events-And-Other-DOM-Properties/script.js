// console.log(document.getElementsByTagName('span')[0])
// console.dir(document.getElementsByTagName('span')[0]) // -> Span Ko Object Dikhayega  With Its Properties

// console.log -> Shows the element DOM tree
// console.dir -> Shows the element as an object with its properties

// console.log(document.body.firstChild.nodeName)
// console.log(document.body.firstElementChild.nodeName)

// TagName/ NodeName
// TagName -> Only Exists For Element Nodes
// NodeName -> Defined For Any Node (Text, Comment, etc)

// innerHTML / outerHTML
// innerHTML -> The Inner HTML Property allows to get the HTML inside the element as a string. -> Work For Element Nodes Only

// outerHTML -> The outerHTML property contains the full HTML. -> Work For All Nodes

// outerHTML Property Contain The Full HTML innerHTML + The Element Itself
// first.innerHtml -> Help In Get Or Set The Inner HTML
// first.innerHtml = "<i>Hey I Am Italic</i>" -> Insertion

// first.outerHTML -> Help In Get Or Set The Outer HTML
// Output -> <span id="first"><i>Hey I Am Italic</i></span>


// document.body.firstChild.data -> Gives The Data Of The First Child
// document.body.firstChild.nodeValue -> Same As Data

// Text Content 
// The textContent property allows to get the text inside the element as a string. Only Works For Element Nodes 

// console.log(document.body.textContent)

// Hidden Property
// The hidden attribute and the DOM property specifies whether the element is visible or not.
// first.hidden = false -> Shows The Element
// first.hidden = true -> Hides The Element

// Attributes Method
// 1. elem.hasAttribute(name) -> Method To Check For Existence Of An Attribute
// 2. elem.getAttribute(name) -> Method Used To Get The Value Of An Attribute
// 3. elem.setAttribute(name, value) -> Method Used To Set The Value Of An Attribute
// 4. elem.removeAttribute(name) -> Method Used To Remove The Attribute From Element
// 5. elem.attributes -> Method To Get The Collection Of All Attributes
// Data-* Attributes
// We Can Always Create Custom Attributes But The One Starting With "data-" Are Reserved For Programmer Use. They Are Available In A Property Named dataset
// If An Element Has An Attribute Named "data-one" -> The Way To Access This Attribute Is : elem.dataset.one


// let a = first.getAttribute("class")
// console.log(a)


// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// // first.setAttribute("hidden", "true")
// first.setAttribute("class", "true sachin")
// first.removeAttribute("class")
// console.log(first.attributes)
// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)


// Always Add Custom Attribute With Data-_____
// Data Attributes
// data-one = "one" -> data-one -> One
// data-game = "mario" -> data-game -> Mario

// If Element Has A Attribute Named "data-one" -> The Way To Access This Attribute Is : elem.dataset.one

// Insertion Method

// There Are Three Way To Insert HTML Into The DOM

// 1. innerHTML

// let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';


// 2. document.createElement()
// let div = document.createElement('div');
// div.innerHTML = '<h1>Hello World!</h1>';
// a.appendChild(div);
// div.className = "alert"
// We Can Use For Loop In This Case

// 3. document.createTextNode()
// let div = document.createTextNode('This Is Text Node');
// a.appendChild(div);

// Node Insertion Method
// 4. node.append(e) -> Append At The End Of Node

// 5. node.prepend() -> Insert At The Beginning Of Node

// 6. node.before() -> Insert Before Node

// 7. node.after() -> Insert After Node

// 8. node.replaceWith() -> Replace Node With Another Node

// Insert Adjacent HTML / Text / Element

// first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
// first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');

// Node Removal
// first.remove() -> Remove The Element


// ClassName & ClassList
// className -> Used To Add/Remove/Toggle A Class
// classList -> Used To Add/Remove/Toggle A Class
// first.className = "text-black red"
// first.classList.remove("red") // Remove Karva
// first.classList.add("red") // Add Karva 
// first.classList.toggle("red") // He To Hata Dega Nahi He to Laga Dega
// first.classList.contains("red")  // Check If Contain  Or Not? -> True False

// SetTimeout And SetInterval

// setTimeout(function, <delay>, <arg1>, <arg2>) 
// setTimeOut -> Kuch Time Ke Bad Apni JS Ko execute Karna Hoga -> Execute The Js After Certain Time 
// clearTimeout -> To Clear The SetTimeout
// setInterval -> In Certain Interval Of Time Hame Bar Bar Apni Js Ko Execute Karna Hoga -> Execute The Js After Certain Time(Interval)
// setTimeout -> Is Function Ko Run Kardo Itne Time Ke Bad

// alert("Hello")
// let a = setTimeout(function() {
//   alert("I Am Inside Of SetTimeout")
// }, 2000)
// clearTimeout(a)
// console.log(a) // Timer Id 

// let timerId = setInterval(function, <delay>, <arg1>, <arg2>)
// Delay In millisecond
// Timer Id Return Me Milti He 

// const sum = (a, b, c) => (){
//   console.log("Yes I Am Running " + (a + b + c))
//   a + b
// }

// setTimeout(sum, 1000, 1, 2, 7)
// clearTimeout(timerId)

// setInterval -> Bar Bar Kuch Time Ke Bad Run Karna
// Syntex -> setInterval(function, <delay>, <arg1>, <arg2>)

// Example:
// let a = setInterval(function() {
//   console.log("I Am In SetInterval")
// }, 3000)


// clearInterval(a) -> To Clear The SetInterval

// Browser Events

// An Event Is A Signal That Something Has Happened.
// All Dom Node Generate Such Signal 

// Mouse Events -> click, contextmenu, mouseover/mouseout, mousedown/mouseup, mousemove

// Keyboard Events -> keydown and keyup
// Form Element Events -> submit, focus
// Document Events -> DOMContentLoaded

// <button onclick = "alert('hello')">Click Me</button>

// Handling Events
// elem.onclick = function(e){
//   alert("Hello World1!")
// }

// let a = document.getElementsByClassName("container")[0]
// console.log(a)
// a.onclick = () => {
//   let b = document.getElementsByClassName("container")[0]
//   b.innerHTML = "Hello World!"
// }

// If Onclick Js and HTML Me Likha Hai To Js Vala Priorty Hota Hai

// Adding A Handler With JavaScript Overwrite The Existing Handler

// Event Listener

// addEventListener(event, handler) and removeEventListener(event, handler)

// Handler Must Be Same While Removing It

// addeventListener -> To Assign Multiple Handlers To An Event

// let x = function(e) {
//   alert("Hello World1!")
// }
// let y = function(e) {
//   console.log(e) // Event Object -> Pointing To The Our Function  
//   // console.log(e.target)
//   alert("Hello World2!")
// }
// btn.addEventListener('click', x)

// btn.addEventListener('click', function(e) {
//   alert("Hello World2!")
// })

// btn.addEventListener('click', y)

// let a = prompt("What is Your Favourite Number?");
// if (a == "2") {
//   btn.removeEventListener('click', x)
// }

// For This Work Function OBject Same Hona Cahiye -> Means That We Want to Remove Function y that We Must Pass The Function y So That Function Object Can Removed


// Event Object

// When An Event Happens, The Browser Creates An Event Object, Put Details In It And Pass It As And Passes It As An Argument To The Handler

// elem.onclick = function(event){
// Code
// }

// event.type -> Event Type
// event.currentTarget -> Element That Handled The Event
// event.clientX/ event.clientY -> Coordinates Of Cursor


// Practice Set

// Q1 -> Create A Website Which Stores Bookmarks Of Your Favourite Website Using href
// Ans: Ans On HTML File
// Q2 -> Write A Program To  Show Different Alerts When Different Buttons Are Clicked
// Ans: Ans On HTML File
// Q3 -> Create A Website Which Stores Bookmarks Of Your Favourite Website Using Event Listeners
// document.getElementById("google").addEventListener("click", function() {
//   window.location = "https://www.google.com";
//   win.focus();
// })
// document.getElementById("fb").addEventListener("click", function() {
//   window.location = "https://www.facebook.com";
//   win.focus();
// })
// document.getElementById("twitter").addEventListener("click", function() {
//   window.location = "https://www.twitter.com";
//   win.focus();
// })
// document.getElementById("insta").addEventListener("click", function() {
//   window.location = "https://www.instagram.com";
//   win.focus();
// })


// Q4 -> Write A JavaScript Program To Keep fetcing contents of a website (Every 5 Seconds)

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// },3000)

// const fetchContent = async (url) =>{
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }

// Q5 -> Create A Glowing Bulb Effect Using ClassList Toggle Method In JavaScript


// setInterval(async function(){
//   document.querySelector("#bulb").classList.toggle("bulb")
// },300)

// Clock

// let a = new Date()
// let h = a.getHours()
// let m = a.getMinutes()
// let s = a.getSeconds()

