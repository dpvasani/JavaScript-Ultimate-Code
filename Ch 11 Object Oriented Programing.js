// [[Prototype]]
// First Priority Object Method Ki Than Nahi Mila To Prototype Ka Method Use Karo
// JavaScript Object Have A Special Property Called Prototype That Is Either Null Or Reference To Another Object

// When We Try To Read A Property From An Object And It's Missing, JavaScript Will Take It From Its Prototype. This Is Called Prototypal Inheritance.

// let a = {
//   name2: "Harry",
//   language: "JavaScript",
//   run: () => {
//     alert("self run")
//   }
// }
// console.log(a)


// let p = {
//   run: () => {
//     alert("run")
//   }
// }

// p.__proto__ = {
//   name: "Jackie"
// }

// a.__proto__ = p
// a.run()
// console.log(a.name)

// Setting Prototype
// We Can Set Prototype By Setting __proto__ Property On Any Object. Now If We Read A Property From That Object, JavaScript Will Take It From The Object Itself And If It's Missing, JavaScript

// If We Have A Method In Object, It Will Be Called From Object. If Its Missing In Object And Present In Prototype, It Will Be Called From Prototype.

// Classes And Objects

// In OOP A Class Is An Extensible Program Code Template For Creating Objects, Providing Initial Value For State (Member Variables) And Implementation Of Behavior (Member Functions)

// Syntax:
// class ClassName {
//   constructor() {
//     // initialise
//   }
//   // Function 
//   method_name() {
//     // code
//   }
// }

// class RailwayForm {
//   submit() {
//     alert(this.name + ": Your form is submitted for train number: " + this.trainno)
//   }
//   cancel() {
//     alert(this.name + ": This form is cancelled for train number: " + this.trainno)
//   }
//   fill(givenname, trainno) {
//     this.name = givenname
//     Object Associated Property = Input Me A Rahi Value
//     this.trainno = trainno
//   }
// }

// // Create a form for Harry
// let harryForm = new RailwayForm()
// // Fill the form with Harry's details
// harryForm.fill("Harry", 145316)

// // Create a forms for Rohan
// let rohanForm1 = new RailwayForm()
// let rohanForm2 = new RailwayForm()
// // Fill the forms with Rohan's details
// rohanForm1.fill("Rohan", 222420)
// rohanForm2.fill("Rohan", 2229211)

// harryForm.submit()
// rohanForm1.submit()
// rohanForm2.submit()
// rohanForm1.cancel()

// We Can Than Use New Class() To Create An Object

// Constructor Method 
// A Constructor Is A Special Method Which Is Automatically Called When An Object Is Created. -> Its Used To Initialize The Object.

// Old

// class RailwayForm {
//   constructor(givenname, trainno) {
//     console.log("CONSTRUCTOR CALLED..." + givenname + " "  + trainno)
//     this.name = givenname
//     this.trainno = trainno
//   }

//   submit() {
//     alert(this.name + ": Your form is submitted for train number: " + this.trainno)
//   }
//   cancel() {
//     alert(this.name + ": This form is cancelled for train number: " + this.trainno)
//   }
// }

// // Create & fill a form for Harry
// let harryForm = new RailwayForm("Harry", 145316)
// // No need to Fill the form with Harry's details
// // harryForm.fill()

// // Create & fill a forms for Rohan
// let rohanForm1 = new RailwayForm("Rohan", 222420)
// let rohanForm2 = new RailwayForm("Rohan", 2229211)



// harryForm.submit()
// rohanForm1.submit()
// rohanForm2.submit()
// rohanForm1.cancel()

// New

// class RailwayForm {
//   constructor(givenname, trainno, address) {
//     console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
//     this.name = givenname
//     this.trainno = trainno
//     this.address = address
//   }

//   preview() {
//     alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
//   }

//   submit() {
//     alert(this.name + ": Your form is submitted for train number: " + this.trainno)
//   }

//   cancel() {
//     alert(this.name + ": This form is cancelled for train number: " + this.trainno)
//     this.trainno = 0
//   }
// }

// let harryForm = new RailwayForm("Harry", 13488, "420, Pacific Ocean, Ocean, Bihar - 0000555")
// harryForm.preview()
// harryForm.submit()
// harryForm.cancel()
// harryForm.preview()


// Class Inheritance

// Class Inheritance Is A Way For One Class To Inherit All The Methods And Properties From Another Class. In JavaScript, It Is Done By Using Extends Keyword.

// class Animal {
//   constructor(name, color) {
//     this.name = name
//     this.color = color
//   }
//   run() {
//     console.log(this.name + " is running!")
//   }
//   shout() {
//     console.log(this.name + " is barking!")
//   }
// }

// class Monkey extends Animal {
//   eatBanana() {
//     console.log(this.name + " is eating banana")
//   }
//   hide() {
//     console.log(`${this.name} is hiding`)
//   }
// }

// let ani = new Animal("Bruno", "white")
// let m = new Monkey("Chimpu", "orange")

// ani.shout()
// m.eatBanana()
// m.hide()
// // ani.hide() //This will throw an error

// Extend Keyword

// Extend Keyword Is Used To Extend Another Class. 


// Class Child extends Parent

// Parent Classes Is The Class From Which Other Class Inherits.
// class Animal {
//   constructor(name, color) {
//     this.name = name
//     this.color = color
//   }
//   run() {
//     console.log(this.name + " is running")
//   }
//   shout() {
//     console.log(this.name + " is shouting")
//   }
// }
// // Child Class
// class Monkey extends Animal {
//   eatBanana() {
//     console.log(this.name + " is eating banana")
//   }
// }

// Method Overriding
// Method Overriding Is A Feature In OOP Language Where A Child Class Can Override A Parent Method.

// class Employee {
//   constructor(name) {
//     console.log(`${name} - Employee's constructor is here`)
//     this.name = name
//   }
//   login() {
//     console.log(`Employee has logged in`);
//   }

//   logout() {
//     console.log(`Employee has logged out`);
//   }

//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves - Auto approved`)
//   }
// }

// class Programmer extends Employee {
//   constructor(name) {
//     super(name)
//     console.log(`This is a newly written constructor`)
//   }
//   // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
//   //   super(...args)
//   // }
//   requestCoffee(x) {
//     console.log(`Employee has requested ${x} coffees`)
//   }
//   requestLeaves(leaves) {
//     super.requestLeaves(4)
//     console.log("One extra is granted")
//     // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)

//   }
// }

// let e = new Programmer("Harry")
// e.login()
// e.requestLeaves(3)

// If We Create Our Own Implimentstion Of Run Method In Child Class, It Will Be Overridden.

// Super Kewword
// Super Keyword Is Used To Call The Parent Class Constructor.
// When We Override A Method In Child Class, We Use Super Keyword To Call The Parent Class Method.

// super(a,b) -> Call Parent Class Constructor


// Overriding Constructor

// With A Constructor, Things Are Bit Tricky/ Different. According To The Specifications , If A Class Extends Another Class And Has No Constructor. Than The Child Class Will Have A Constructor Automatically. -> By Default Its Generated By The JS Engine.

// Default One
// constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
//   //   super(...args)
//   // }

// Constructor In Inheriting Classes Mus Call Super (...) And Do It Before Using This.
// We Can Also Use super.method() In Child Class To Call Parent Class Method.

// class Employee {
//   constructor(name) {
//     console.log(`${name} - Employee's constructor is here`)
//     this.name = name
//   }
//   login() {
//     console.log(`Employee has logged in`);
//   }

//   logout() {
//     console.log(`Employee has logged out`);
//   }

//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves - Auto approved`)
//   }
// }

// class Programmer extends Employee {
//   constructor(name) {
//     super(name)
//     console.log(`This is a newly written constructor`)
//   }
//   // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
//   //   super(...args)
//   // }
//   requestCoffee(x) {
//     console.log(`Employee has requested ${x} coffees`)
//   }
//   requestLeaves(leaves) {
//     super.requestLeaves(4)
//     console.log("One extra is granted")
//     // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)

//   }
// }

// let e = new Programmer("Harry")
// e.login()
// e.requestLeaves(3)


// Static Methods
// Static Methods Are Methods Which Are Associated With A Class And Not With Any Instance Of It.

// Static Method Are Used To Implement Logic Which Does Not Rely On Instance.

// Static Method Are Used To Implement Function That Belong To A Class As A Whole. And Not To Any Particular Object.

// We Can Assign Single Static Method;

// Syntax:

// class follow {
//   static method() {
//     console.log("This is a static method")
//   }
// }

// follow.method()

// Static Methods Aren't Available For Individual Object

// class Animal {
//   constructor(name) {
//     this.name = Animal.capitalize(name)
//   }
//   walk() {
//     alert("Animal " + this.name + " is walking")
//   }
//   static capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.substr(1, name.length)
//   }
// }

// j = new Animal("jack")
// j.walk()
// console.log(j.capitalize("thisa")) // --- > this doesnt work

// Getters And Setters

// Getters And Setters Are Special Methods Which Are Used To Get And Set The Values Of An Object's Properties.

// class Person {
//   constructor(name) {
//     this.name = name
//   }
//   fly() {
//     console.log("I am flying")
//   }
//   get name() {
//     return this._name
//   }
//   set name(newName) {
//     this._name = newName
//   }
// }

// class Animal {
//   constructor(name) {
//     this._name = name
//   }
//   fly() {
//     console.log("Mai ud rha hu")
//   }
//   get name() {
//     return this._name
//   }

//   set name(newName) {
//     this._name = newName
//   }

// }

// class Rabbit extends Animal {
//   eatCarrot() {
//     console.log("Eating carrot")
//   }
// }

// let a = new Rabbit("Bruno")
// a.fly()
// console.log(a.name)
// a.name = "Jack"
// console.log(a.name)
// let c = 56

// console.log(a instanceof Animal)
// console.log(a instanceof Rabbit)
// console.log(c instanceof Animal)


// InstanceOf Operator
// InstanceOf Operator Is Used To Check If An Object Is An Instance Of A Class.
// Object It Belongs To Certain Class Or Not?
// It Return True If Obj Belongs To The Class Or Any Other Class Inherited From It. 
// Syntax:

// <object> instanceof <class>

// Practice Set

// Q1 Create A Class To Create A Complex Number. Create A Constructor To Set The Real And Imaginary Parts.

// Q2 Write A Method To Add Two Complex Numbers In The Above Class.

// Q3 Create A Class Student From A Class Human. Override A Method And See Changes.

// Q4 See If Student Is An Instance Of Human Using InstanceOf Keyword.

// Q5 Use Getters And Setters To Set And Get The Real And Imaginary Parts Of The Complex Number.


// class Complex {
//   constructor(real, imaginary) {
//     this.real = real
//     this.imaginary = imaginary
//   }
//   add(num) {
//     this.real = this.real + num.real
//     this.imaginary = this.imaginary + num.imaginary

//   }

//   get real() {
//     return this._real
//   }

//   get imaginary() {
//     return this._imaginary
//   }

//   set imaginary(newImaginary) {
//     this._imaginary = newImaginary
//   }

//   set real(newReal) {
//     this._real = newReal
//   }
// }

// let a = new Complex(2, 4)
// console.log(a.real, a.imaginary)
// a.real = 10
// a.imaginary = 10
// let b = new Complex(6, 2)
// a.add(b)
// console.log(`${a.real}+${a.imaginary}i`)

// class Human {
//   constructor(name, favfood) {
//     this.name = name
//     this.favfood = favfood
//   }
//   walk() {
//     console.log(this.name + "Human is walking")
//   }
// }

// class Student extends Human {
//   walk() {
//     console.log(this.name + ": Student is walking")
//   }
// }

// let o = new Student("Harry", "Bhindi")
// o.walk()

// console.log(o instanceof Human)