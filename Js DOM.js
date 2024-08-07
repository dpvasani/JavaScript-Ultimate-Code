// HTML Ko Convert Kar Diya He Js Object Me -> All Node Are Object
// Text Node 
// Element Node
// Comment Node

// Auto Correction In HTML -> If Any Error In HTML Then It Will Be Auto Corrected

// Walking The DOM

// DOM Tree Traversal
// document.body -> Page Body Tag
// document.documentElement -> HTML Tag -> Page
// document.head -> Head Tag
// document.title -> String

// document.body can be Null If The JavaScript Is Written Before The Body Tag
// Children Of An Element ->  Direct As Well As Deeply Nested Elements Of An Element Are Called Its Children

// Child Nodes: Elements That Are Direct Children For Example Head And Body Are Children Of <html>

// Descendant Nodes: All Necessary Nodes Are Called Descendant Nodes For Example Head, Body, Title, Meta, Etc. Are Descendant Nodes Of <html>

// All Nested Elements , CHildren , Their Children And So On Are Called Their Siblings

// First Child -> First Element Child -> element.firstChild
// Last Child -> Last Element Child -> element.lastChild
// Child Nodes (Element.childNodes) -> All Children

// Following Are Always True
// element.firstChild === element.childNodes[0]
// element.lastChild === element.childNodes[element.childNodes.length - 1]

// There Is Also A Method Element.hasChildNodes() To Check Whether There Are Any Child Nodes (Element.childNodes) Or Not 

// Child Nodes Are Not An Array But Can Be Converted Into Array -> Array.from(collection)

// Child Nodes Look Like An Array But Actually Are Not But Its A Collection -> We Can Use Array Methods On It By Converting It Into Array.from(collection) To Convert It Into Array -> Array Methods Will Not Work On It

// Notes On Dom Collection 
// They Are Read Only
// They Are Live Element.childNodes Variable (Reference) Will Be Updated Automatically If Child Nodes Of The Element Is Changed
// They Are Iterable Using For...Of Loop

// Siblings And Their Parents

// Siblings Are Nodes That Are Children Of The Same Parent
// For Example <head> And <body> Are Siblings. Siblings Have Same Parent In This Case <html>
// <body> Is Said To Be The "Next" Or "Right" Sibling Of <head> , <head> Is Said To Be The "Previous" Or "Left" Sibling Of <body>
// The Next Sibling Is In NextSibling Property , And The Previous One Is In previousSibling Property
// The Parent Is In parentNode Property
// alert(document.documentElement.parentNode) -> Document
// alert(document.documentElement.parentElement) -> Null
// parentElement -> Ak Element Hai To Hi Return Hoga Verna Null Return Hoga

// console.log(document.body.firstChild)
// a = document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(a.firstChild.nextSibling)



// Element Only Navigation

// Sometimes We Don't Want Text Or Comment Nodes. Some Links Only Take Element Nodes Into Account. For Example -> document.previousElementSibling -> Previous Sibling Which Is An Element


// let b = document.body
// console.log("First Child Of b Is : ", b.firstChild) // -> Kisi Bhi Tarah Ka First Childe Dekhne Ko Mil Sakta He Chahe Vo text Node Hi Kyu Na Ho
// console.log("First Element Child Of b Is : ", b.firstElementChild)
// Only Element Type Ka First Child Dekhne Ko Milta He

// const changeBgRed =()=>{
//   document.body.firstElementChild.style.background = "red"
  
// } 

// document.previousElementSibling -> Previous Sibling Which Is An Element
// document.nextElementSibling -> Next Sibling Which Is An Element
// document.firstElementChild -> First Element Child
// document.lastElementChild -> Last Element Child

// Table Links
// Certain DOM Elements May Provide Additional Properties Specific To Their Type For Example Table Elements Support -> table.rows -> Collection Of Tr Elements

// table.rows -> Collection Of Tr Elements
// table.caption -> Reference To <caption>
// table.tHead -> Reference To <thead>
// table.tFoot -> Reference To <tfoot>
// table.tBodies -> Collection Of <tbody> Elements
// tbody.rows -> Collection Of <tr> Inside
// tr.cells -> Collection Of Td And Th
// tr.sectionRowIndex -> Index Of Tr In It's Section
// tr.rowIndex -> Row Number Starting From 0
// td.cellIndex -> No Of Cells In Row


// Searching The DOM
// document.getElementById() -> To Search Element By Id
// document.querySelectorAll(.card-title) -> To Search Multiple Elements With Same CSS Selector
// document.querySelector() -> To Search Single Element With CSS Selector
// document.getElementsByTagName() -> To Search Element By Tag Name
// document.getElementsByClassName() -> To Search Element By Class Name
// document.getElementsByName() -> To Search Element By Name Attribute

// let ctitle = document.getElementsByClassName("card-title")[0]
// console.log(document.quarySelector(".card-title").getElemetByClassName("card-title"))

// No S -> Return One Element
// S -> Return All Elements -> Elements 

// Matches, Closest & Contains Methods
// elem.matches(CSS) -> To Check If Element Matches The Given CSS Selector
// elem.closest(CSS) -> To Look For The Nearest ancestor That Matches The Given CSS Selector.
// No Than Go to Perent Hai TO Return So And So

// let id1 = document.getElementById("id1")
// let sp1 = document.getElementById("sp1")
// console.log(id1.matches(".class"))

// elem.contains(elem) -> Returns True If Element B Is Inside Element A (A Descendant Of B) Or When Element A == Element B 


// Chapter 7 Practice Set
// Q1 -> Create A Navbar And Change The Color Of Its First Element To Red
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
// Q2 -> Create A Table Using JavaScript Which Background Color To Green
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
// Q3 -> Create An Element With 3 Children. Now Change The Color Of First And Last Element To Green
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
// Q4 -> Write A JavaScript Code To Change Background Of All <li> Tags To Cyan
// Array.from(document.getElementsByTagName("li")).forEach((element) => {
//   element.style.background = "cyan";
// })
// Q5 -> Which Of The Following Is Used To Look For The Farthest Ancestor That Matches A Given CSS Selector
// (a) matches (b) closest (c) contains (d) none of these
// Ans -> None Of These
