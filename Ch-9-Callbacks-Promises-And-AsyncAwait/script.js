// Ch 9 Callbacks, Promises And Async/Await
// Asynchronous Action Are Action That We Initiate Now And They Finish Later. E.g. SetTimeout
// Synchronous Action Are Action That Initiate And Finish One By One.

// Callbacks Function
// A Callback Function Is A Function Passed Into Another Function As An Argument, Which Is Then Invoked Inside The Outer Function To Complete An Action.

// Here Is Example Of callback
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded Script With SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = function() {
//     console.log("Error Loading Script With SRC: " + src);
//     callback(new Error("Src got some error"));
// This Will Show What is Exactly The Error
//   };
//   document.body.appendChild(script);
// }


// Ch 9 Callbacks, Promises And Async/Await
// Asynchronous Action Are Action That We Initiate Now And They Finish Later. E.g. SetTimeout
// Synchronous Action Are Action That Initiate And Finish One By One.

// Callbacks Function
// A Callback Function Is A Function Passed Into Another Function As An Argument, Which Is Then Invoked Inside The Outer Function To Complete An Action.

// Here Is Example Of callback
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded Script With SRC: " + src);
//     document.head.append(script)
//     callback(null, src);
//   }
//   script.onerror = function() {
//     console.log("Error Loading Script With SRC: " + src);
//   };
//   document.body.appendChild(script);
// }

// function hello() {
//   alert("Hello World");
// }

// function goodmorning() {
//   alert("Good Morning");
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css", hello)

// This Is Call Back Of Asynchronous Programming. A function Does Something  Asynchronously Should Provide A Callback Function As An Argument. Where We Put The Code That We Want To Run After Some Action Has Been Performed.

// Handling Error :



// // Callbacks
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded script with SRC: " + src)
//     callback(null, src);
//   }
//   script.onerror = function() {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("Src got some error"))
//   }
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error)
//     return
//   }
//   alert('Hello World!' + src);
// }


// function goodmorning(error, src) {

//   if (error) {
//     console.log(error)
//     sendEmergencyMessageToCeo();
//     return
//   }
//   alert('Good morning' + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 

// Function
// function greet(name, callback) {
//   console.log('Hi' + ' ' + name);
//   callback();
// }
// // Callback Function
// function callMe() {
//   console.log('I am callback function');
// }

// // Passing function as an argument
// greet('Peter', callMe);

// const calculate = (a, b, operation) => {
//   return operation(a, b)
// }
// // Method 1
// const addition = calculate(3, 4, function(num1, num2) {
//   return num1 + num2
// })
// console.log(addition)

// // Method 2
// const subtraction = (a, b) => a - b
// const subResult = calculate(10, 5, subtraction)
// console.log(subResult)

// // Method 3
// const multiply(a, b){
//   return a * b
// }

// const multiplyResult = calculate(2, 3, multiply)

// console.log(multiplyResult)


// Pass Kar Rahe ho -> Call Nai Kar Rahe ho
//Callback Ak Asa Function Jo Ki App Pass Kar Sakte Ho As Perameter In Another Function
// Hera operation, function(num1, num2) {
// return num1 + num2
// }   , subtraction, multiply Are Callback Functions

// Array Callback Function -> find(), filter(), map(), forEach(), every(), some(), reduce(), reduceRight(), indexOf(), lastIndexOf(), includes(), findIndex()



// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded Script With SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = function() {
//     console.log("Error Loading Script With SRC: " + src);
//     callback(new Error("Src got some error"));
//   };
//   document.body.appendChild(script);
// }


// Handling Error
// We can handle Error Like This By Supplying Error Argument Like This :
// function goodmorning(error, src) {

//   script.onload = () => callback(null, src)
//   // script.onerror = () => callback(new Error("Src got some error"))
//   script.onerror = () => callback(new Error("Failed"))
// }

// Then Inside Of Loadscript :

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle", function(error, src) {
//   .....
//     if(error){
//   // Handle Erroe
// } else {
//   // Do Something 
//   // Script Loaded
// }
// })

// Another Problem Is callback(true, src); -> This Will Be Problematic To Hanlde
// Function Ka Pura Ka Pura Control A Jata He Loadscript Likhne Vale Ke Pass
// Ise Better Ki Me Function Likhne Vale Se Output Leke Khud Jo Chahu vo Kar Sakta Hu
// Callback Hell Or Pyramid Of Doom

// When We Have Callback Inside Callback, The Code Get Complicated. The Code Becomes Difficult To Managae.

// loadScript((){
//   loadScript((){
//     loadScript((){
//       loadScript((){
//         loadScript((){
//           ....
//           ....
//         })
//     })
//   })
// })
// })

// As Calls Become More Nested , The Code Become Deeper and Increasing More Difficult To Manage, Especially If We Have Real Code Instead Of ...  -> This is Called As Pyramid Of Dom Or Callback Hell.

// The Pyramid Of These CallBacks Grows Towards The Right With Every Asynchronous Action, Soon It Spreads Like Rain And Eventually Comes To The Top, Where All Work Is Done. -> Like Spiral Come Out Starting From Inside And Goes Outside.

// Solution Of This Problem Is Promises.
// A Promises Is A Promise Of Code Execution. The Code Either Executes Or Fails In Both The Cases Solution Will Be Notified 

// Syntax :
// let promise = new Promise(function(resolve, reject){
//   // resolve, reject -> Predifined In Js Engin
//   // executor
// })


// Resolve And Reject Are Callback Provided By JS Itself 

// resolve(value) -> If The Job Is Finished Successfully
// reject(error) -> If The Job Fails

// The Promise Object Returned By The New Promise Constructor Has Four Properties :

// 1. State -> Initially Pending, Then Changes To Fulfilled When Resolve Is Called, And Changes To Rejected When Reject Is Called.

// 2. Result -> Initially Undefined, Then Changes To The Value If Resolved, Or Error If Reject -> resolve(value)  -> reject(error)

//consumer : Then And Catch
// The Consumer Code Can Receive The Final Result Of A Promise Through Then And Catch

// The Most fundamental Is Then:
// promise.then(function(result){ Handler}
//              function(error){Error Handler})

// If We Only Want To Know If The Promise Is Resolved Or Not We Can Use Promise.then()

// If We are Interested In Successful Completion, We Can Provide Only One Function Argument To then();

// let promise = new Promise(resolve => {
//   setTimeout(() => resolve("Clone"), 1000);
// });
// promise.then(alert); // Clone

// If We Are Interested In Errors We Can Use Null As First Argument Of Than(null,f) Or We Can Use Catch

// promise.catch(alert); 
// promise.finally(c)=>{}) Is Used To Perform General Cleanup

// let promise = new Promise((resolve, reject) => {
//   console.log("Promise Is Pending");
//   setTimeout(() => {
//     resolve(56);
//     console.log("Promise Is Fulfilled");
//   }, 2000);
// });

// console.log(promise)

// Fetch Google.com Home Page => alert("Google.com Home Page Done")
// Fetch Data From Fetch API
// Fetch Pictures From Server
// Print Downloading
// Rest Of The Script

// Promise Are Used To Do Parallel Programming

// Let Say 50 Promise Are There With settimeOut of 5 second -> Than All Promises Full filed In 5 second -> Not In 250 Seconds -> That Is Parelal Programming

// Fulfilled -> Two Ways 
// 1. resolve(value) -> If The Job Is Finished Successfully -> fulfilled with Resolve
// 2. reject(error) -> If The Job Fails -> Fulfilled With Reject



// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//     // console.log("I am a promise and I am resolved")
//     resolve(true)
//   }, 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//     // console.log("I am a promise and I am rejected")
//     reject(new Error("I am an error"))
//   }, 5000)
// })

// // To get the value
// p1.then((value) => {
//   console.log(value)
// })

// // To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// }) 
// // Error Saw Not Saw In Console -> We Catched Arror

// p2.then((value) => {
//   console.log(value)
// }, (error) => {
//   console.log(error)
// })
// p2.than(resolve,reject)  // Syntax 


// Promise Chaining

// We Can Chain Promises And Make Sure That The Result Of A Promise Passes To Another Promise

// Here Is The Flow Of Execution
// 1. The initial promise resolves in 1 Second (Assumption)
// 2. The next .then() handler is then called Which returns a new promise (Resolved With 2 Values)
// 3. The next .then() gets the result of previous one and this is resolved to a new promise amd This Is Going On And On


// Every call To .then() Returns A New Promise Whose Value Is Passed To The Next One And So On . We Can Even Create Custom Promise Inside .then()


// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           console.log("Resolved after 2 seconds")
//           resolve(56)
//   }, 2000)
// })

// p1.then((value) => {
//   console.log(value)
//   return new Promise((resolve, reject) => {
//           setTimeout(() => { resolve("Promise 2") }, 2000)
//   }) 
// }).then((value) => {
//   console.log("We are done")
//   return 2
// }).then((value)=>{
//   console.log("Now we are pakka done")
// })


// LoadScript Function With Promises
// const loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = src;
//     document.body.appendChild(script);

//     script.onload = () => {
//       resolve("Script has been loaded successfully");
//     };

//     script.onerror = () => {
//       reject(new Error(`Failed to load script: ${src}`));
//     };
//   });
// };

// Load the script and chain the promises

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js");

// p1.then((value) => {
//   console.log(value);
//   // Loading another script after the first one is loaded
//   return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js");
// }).then((value) => {
//   console.log(value);
//   // You can continue chaining more scripts if needed
// }).catch((error) => {
//   console.error("Script loading failed:", error);
// });

// Attaching Multiple Handler To A Promise

// Promise Chaining -> Run One By One 
// Lets Say 10 Promise Chain Each Has SetTimeOut Of 5 Second -> Than Run In 50 Second 
// Ak Ki Promise Ki value A Jane Par Dusri Promise -> Dusri Ki Value A Jane Par Tesri -> Tesri Ki Value A Jane Par Chauthi -> So and So 
// Like We Are Passing One Promise Value In Second And Second Promise Value Passed On Third And So And So ->  Promise Chaining
// Lets Say In 10 Promise Chaining Error Occurred At 5th Promise Vo Directly Next Vala Catch Pakad Lega Other Promise Ko Skip Karke

// Multiple Handler In Promise -> Run Independent 
// Lets Say 10 Promise Chain Each Has SetTimeOut Of 5 Second -> Than Run In 5 Second 


// Let p Is Promise
// p.then(handler1)
// p.then(handler2)
// p.then(handler3)
// All Run Independently


  // let promise = new Promise((resolve) => setTimeout(() => resolve("Done"), 5000));

  // promise.then((value) => {
  //   console.log("Handler 1: " + value);
  // });

  // promise.then((value) => {
  //   console.log("Handler 2: " + value);
  // });

// Promise API


// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           resolve("Value 1");
//   }, 11000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           // resolve("Value 2");
//           reject(new Error("Error"));
//   }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           resolve("Value 3");
//   }, 3000);
// });

// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })

// let promise_all = Promise.all([p1, p2, p3])
// let promise_all = Promise.allSettled([p1, p2, p3])
// let promise_all = Promise.race([p1, p2, p3])
// let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("Hey"))
// promise_all.then((value) => {
//   console.log(value)
// })

// There Are 6 Static Methods Of Promise Class
// 1. Promise.all(promises) -> Waits For All Promises To Resolves And Returns Their Result In An Array If Any One Of The Promise Rejects, It becomes Immediately Rejected If Any One Of That Fails, Its Become Error & All Other Result Are Ignored

// 2. Promise.allSettled(promises) -> Waits For All Promises To Settle And Returns Their Result As An Array Of Objects With Status And Value.

// 3. Promise.race(promises) -> Waits For The First Promise To Settle And Its Result/Error Become The Output -> Jo Bhi Sabse Pahle Fulfilled Hogi Uski Value Mil Javegi

// 4. Promise.any(promises) -> Waits For The First Promise To Settle And Its Result Become Outcome. Throws Aggregate Error If All The Promises Are Rejected.
// Jo Bhi Sabse Pahle Resolve Hogi Uski Value Mil Javegi

// 5. Promise.resolve(value) -> Makes A Resolved Promise With The Given Value 

// 6. Promise.reject(error) -> Makes A Rejected Promise With The Given Error


// Async / Await
// There Is A Special Syntax To Work With Promises In A More Easier Way

// A Function Can Be Declared With Async Keyword -> It Returns A Promise

// A Function Can Be Made Async By Using Async Keyword -> It Returns A Promise
// async function harry(){
//  Code Here
// }

// Ham Kisi Bhi Function Ko Async Bana Sakte Hai -> async Keyword Lagana Padta Hai Or Uske Baad Uske Andar Promise Ko Awake Kar Sakte he

// An Async Function Always Return A Promise. Other Values Are Wrapped Into It Automatically As Promises

// We Can Do Something Like This
// harry().then(alert)

// So Async Ensure That The Function Returns A Promise And Wraps Non-Promises In It Automatically

// Method 1:
// async function harry() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27°C");
//     }, 1000);
//   });

//   let bangaloreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("21°C");
//     }, 7000);
//   });

//   // Handling the weather data using 'then' 
//   delhiWeather.then((temperature) => {
//     alert(`Delhi Weather: ${temperature}`);
//   });

//   bangaloreWeather.then((temperature) => {
//     alert(`Bangalore Weather: ${temperature}`);
//   });

//   // Using 'await' keyword to wait for the promises to resolve
//   console.log("Fetching Delhi Weather Please Wait...");
//   let delhiW = await delhiWeather;
//   // await Keyword Stops The Execution Of The Function Until The Promise Is Resolved
//   console.log("Fetching Bangalore Weather Please Wait...");
//   let bangaloreW = await bangaloreWeather;
//   // Returning the values of the resolved promises
//   return [delhiW, bangaloreW];

//   console.log("Welcome to the weather control room");
// }

// let a = harry();
// // let a = harry();   let b = charry();  -> Excute Parallely
// console.log(a); // Return Promise
// // Good Practice

// a.then((value) => {
//   console.log(value);
// })


// // Call the function
// harry();



// async function harry() {
//   let delhiWeather = new Promise((resolve, reject) => {
//           setTimeout(() => {
//                   resolve("27 Deg")
//           }, 2000)
//   })

//   let bangaloreWeather = new Promise((resolve, reject) => {
//           setTimeout(() => {
//                   resolve("21 Deg")
//           }, 5000)
//   })

//   harry().then((x)) =>{
//     alert(x)
//   }

//   // delhiWeather.then(alert)
//   // bangaloreWeather.then(alert)
//   console.log("Fetching Delhi Weather Please wait ...")
//   let delhiW = await delhiWeather
//   console.log("Fetched Delhi Weather: " + delhiW)
//   console.log("Fetching Bangalore Weather Please wait ...")
//   let bangaloreW = await bangaloreWeather
//   console.log("Fetched Bangalore Weather: " + bangaloreW)
//   return [delhiW, bangaloreW]
// }

// const cherry = async () => {
//   console.log("Hey I am cherry and I am waiting ")
// }

// const main1 = async () => {
//   console.log("Welcome to weather control room")
//   let a = await harry()
//   let b = await cherry()

// }
// main1()


// The Await Keyword
// There Is Another Keyword Called Await That Works Only With Inside An Async Function

// let value = await promise;
// Promises Ki value  value Me A jayegi

// The Await Keyword Makes JavaScript Wait Until The Promise Settles And Returns Its Value.

// It Just More Elegant Syntax Of Getting The Promise Result Than Using .then() And .catch() Plus It Easier To Read And Write


// Error Handling

// We All Make Mistakes In Our Codes. Also Sometimes Our Script Can Have Error In It. Usually Program Halt When Error Occurs.

// The Try And Catch Syntax Allow Us To Catch The Error So That Our Script Instead Of Dying Can Do Something More Relevant.

// The Try And Catch Syntax
// It Has Two Main Blocks
// 1. try
// 2. catch
// When Error Come Out Program Doesn't Stop It Just Continues

// try{
//   // Try Code Goes Here
// } catch(error){
//   // Catch Code Goes Here
//   // The Error Variable Contain An Error Object
// }

// setTimeout(()=>{
// console.log("Hacking wifi.... Please wait..." ) 
// }, 1000)

// try{
//   console.log(rahul)  
// }
// catch(err){
//   console.log("Balle balle")
// }


// setTimeout(()=>{ 
//         console.log("Fetching username and password.... Please wait..." )
// }, 2000) 

// setTimeout(()=>{ 
// console.log("Hacking Rahul's facebook id.... Please wait..." )
// }, 3000) 

// setTimeout(()=>{ 
// console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
// }, 4000) 

// It Work Like This 
// 1. First Code In try Will Executed
// 2. If There Is No Error In try Then Catch Is Ignored Else Catch Is Executed

// Try Catch Work Asynchronously
// If An Exception Happen In Scheduled Code (e.g setTimeout) , Than Try Catch Wont Catch It:  -> In Short Script Die And Wont Work More
// When Error Come -> Execution Will Stop And Catch Will Not Work

// Ye Handle Nai Hoga

// try{
//   setTimeout(()=>{ 
//           console.log(rahul)  
//   }, 100)
// }
// catch(err){
//   console.log("Balle balle")
// }

// Ye Handle Hoga

// try{
//   setTimeout(()=>{ 
//     try{
//           console.log(rahul)  
//     } catch(error){
//           console.log("Balle balle Error Catched ")
//     }
//   }, 100)
// }
// catch(err){
//   console.log("Balle balle")
// }

// The Error Object

// For All Built In Error There Is A Predefined Error Object Has Two Main Property
// 1. name
// 2. message

// we Can Use .stack To Get The Stack Trace Of The Error
// Syntax:
// try{
//   hey ; // Invalid And Through Error -> Variable Is Not Defined
// } catch(error){
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
// }

// Throwing Custom Error

// We Can Throw Custom Error By Using The Throw Syntax

// Syntax:

// if(age>180){
//   throw new Error("This Is Probably Not True")
// }

// We Can Also Throw A Particular Error By Using Built In Constructor For Standard Error:
// let error = new SyntaxError("This Is An Error")
// let error = new ReferenceError("This Is An Error")

// try {
//   let age = prompt("Enter your age")
//   age = Number.parseInt(age) 
//   if(age>150){
//   throw new ReferenceError("This is probably not true") // Custom New Error
//   }
// } catch (error) {
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
// }

// console.log("The script is still running")

// All Error List :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

// Finally Clause

// The Try Catch construct may have one more code clause : finally
// If it exists it runs in all cases: 
// after try if there were no errors, and 
// after catch if there were errors

// if There Is Return in Try, Finally Is Executed Just Before The Function Returns Or Just Before Control Return To The Outer Code

// const f = () => {
//   try {
//           let a = 0;
//           // console.log(program)
//           console.log("Program ran successfully")
//           return
//   }
//   catch (err) {
//           console.log("This is an error")
//           console.log(p)
//   }
//   finally {
//           console.log("I am a good boy")
//           // Close the file
//           // Exit the Loop
//           // Write to the log file
//   }
// }

// f()
// console.log("End")


// Promise are Way Of Asynchronous Programming Ka
// Practice Set 
// Q1 Write A Program to load a javascript file in a browser using promises. Use .then() to display an alert when the load is complete.


const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
          let script = document.createElement("script")
          script.src = src
          script.onload = () => {
                  resolve(src + " Done success")
          }
          document.head.append(script)
  })
}
// Problem number 1
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// a.then((value) => {
//         console.log(value)
// })

// Q2 Write The Same Program From Previous Question And Use async/await syntax

// Problem number 2
// const main2 = async () => {
//         console.log(new Date().getMilliseconds())
//         let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
//         console.log(a)
//         console.log(new Date().getMilliseconds())
// }
// main2()

// Q3 Create A Promise Which Rejects After 3 Seconds Use An Async/Await To Get Its Value. Use A Try Catch To Handle Its Error

// Problem number 3
// let p = () => {
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         reject(new Error("Please this is not acceptable"))
//                 }, 3000)
//         })
// }

// let a = async () => {
//         try {
//                 let c = await p()
//                 console.log(c)
//         }
//         catch (err) {
//                 console.log("This error has been handled")
//         }
// }
// a()

// Q4 Write A Program Using Promise.all() Inside An Async/Await To Await 3 Promises. Compare Its Results With The Case Where We Await Them One By One
// Problem number 4

// let p1 = async () => {
//   return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                   resolve(10)
//           }, 2000)
//   })
// }
// let p2 = async () => {
//   return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                   resolve(20)
//           }, 1000)
//   })
// }
// let p3 = async () => {
//   return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                   resolve(30)
//           }, 3000)
//   })
// }

// const run = async () => {
//   console.time("run")
//   // let a1 = await p1() // Fetch first 10 products from the database
//   // let a2 = await p2() // Fetch another 10 products from the database
//   // let a3 = await p3() // Fetch yet another 10 products from the database

// // Better Way -> Optimization 
//   let a1 = p1() // Fetch first 10 products from the database
//   let a2 = p2() // Fetch another 10 products from the database
//   let a3 = p3() // Fetch yet another 10 products from the database
//   let a1a2a3 = await Promise.all([a1, a2, a3])
//   console.log(a1a2a3)
//   // console.log(a1, a2, a3)
//   console.timeEnd("run")
// }

// run()

