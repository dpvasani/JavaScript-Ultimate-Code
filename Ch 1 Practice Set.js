//Ch 1 Variable -> Practice Set

// Q1) Create a Variable of Type String And try To Add a Number To It.


let a = "Darshan";
let b = 10;

console.log(a + b);

// Output: Darshan10


// Q2) Use typeof Operator To Find Data-type of the First Question of the Last Answer.


console.log(typeof (a + b));

// Output: String


// Q3) Create a Const Object in JavaScript. Can You Change It to Hold A Number Latter?


const c = {
  name: "Darshan",
  author: "CrptoMinds",
  isPrincipal: false
}

c = 1;
// Output: Assignment to Constant Variable -> Ans Is No


// Q4) Try To Add a New Key In Q3 Const Object. Were You Able To Do It?


const c1 = {
  name: "Darshan",
  author: "CrptoMinds",
  isPrincipal: false
}

c1['friend'] = "Krupali";

//const c1 -> Point Object -> We Can Change Value Inside The Object -> We Can't Make New c1 Objact Again -> Because Of Constant
console.log(c1);

// Output:
// {
//   name: 'Darshan',
//   author: 'CrptoMinds',
//   isPrincipal: false,
//   friend: 'Krupali'
// }


// Q4) Write A JS Program To Create a Word-Meaning Dictionary Of 5 Words.


const dict = {
  appreciate: "recognize the full worth of ",
  ataraxia: "a state of freedom from emotional disturbance",
  yakka: "Work, especially hard work."

}

console.log(dict.yakka);
console.log(dict['yakka']);

// Output: Work, especially hard work.
//         Work, especially hard work.