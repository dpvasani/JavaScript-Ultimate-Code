// Fetch API
// The Fetch API provides a simple way to fetch resources (for example images, documents, or streams) over the internet 

// JavaScript Can Be Used To Send And Retrieve Information From The Network When Needed (AJAX)

// AJAX Used Earlier -> Now JSON Is Widely Used

// AJAX -> Asynchronous JavaScript And XML

// Fetch API

// Fetch Is Used To Get Data Over The Internet

// let promise = fetch(URL, [options])
// Without Option A GET Request Is Sent

// Getting The Response Is A 2-Stage Process

// 1. An Object Of Response Class Containing "Status" And "Ok" Properties
// Status - The HTTP Status Code, eg 200
// Ok - Boolean, True If The HTTP Status Code Is 200-299

// 2. After That We Need To Call Another Method To Access The Body In Different Formats

// Response.text() - Read The Response As Text
// Response.json() - Parse The Response As JSON

// Other Methods Include - Response.formData(), Response.blob(), Response.arrayBuffer()

// Note - We Can Use Only One Body Method. For Example If We Have Used Response.text() Then We Cannot Use Response.json()

// Response Headers

// The Response Headers Are Available In Response.headers

// Request Headers
// To Set A Request Header In Fetch, We Can Use The Headers Option

// let res = fetch(url, {
//         header: {
//                 Authentication: 'Secret'
//         }
// });


// POST Request

// let p = fetch("https://api.rainviewer.com/public/weather-maps.json")
// p.then((response) => {
//         console.log(response.status)
//         console.log(response.ok)
//         console.log(response.headers)
//         return response.json()
// }).then(data => {
//         console.log(data)
// })
// Why Two .then Is Mentioned Above?
// Response Contain Two Properties - Status And Ok
// Data Is The Actual Result Of The Request

// POST Request
// To Make Post Request, We Need To Use Fetch Options
// Method -> HTTP Method, E.g POST
// Body -> The Request Body

// const createTodo = async (todo) => {
//         let options = {
//                 method: "POST",
//                 headers: {
//                         "Content-type": "application/json"
//                 },
//                 body: JSON.stringify(todo),
//         }
//         let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//         let response = await p.json()
//         return response
// }

// const getTodo = async (id) => {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//         let r = await response.json()
//         return r
// }

// const mainFunc = async () => {
//         let todo = {
//                 title: 'Harry2',
//                 body: 'bhai2',
//                 userId: 1100,
//         }
//         let todor = await createTodo(todo)
//         console.log(todor)
//         console.log(await getTodo(101))
// }

// mainFunc()

// let response = await fetch('/url', {
//         method: 'POST',
//         headers: {
//                 'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1,
//         })
// })

// let result = await response.json()

// JavaScript Cookies 
// Cookies Are Small Strings Of Data Stored By The Client Side Stored In Browser 
// In JavaScript, Document.cookie Property Can Be Used To Access Cookies

// Cookies Are Set By Web Server Using Set-Cookie HTTP Header. Next Time When The Request Is Sent To The Same Domain, The Browser Sends The Cookie Using Cookie HTTP Header In The Request. That Way The Server Knows Who Sent The Request.

// We Can Also Access Cookies Using document.cookie Property
// alert(document.cookie) -> Contain Key Value Pairs Decoded

// Key Value Pair Are Separated By Delimited By ; -> Key = Pair; 

// Writing A Cookie
// An Assignment To Document.cookie Is Treated Specially In A Way That Write Operation Doesn't Touch Other Cookie

// document.cookie = "name=harry1122334400"
// Updates Only Cookie Named User To Harry 

// Bahot Chota Sa Data Store Karneka Tarika
// console.log(document.cookie)
// document.cookie = "name=harry1122334400"
// document.cookie = "name2=harry11223344002" // Set Call
// document.cookie = "name=harry" // Old Is Updated
// let key = prompt("enter your key")
// let value = prompt("enter your value")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)

// Encode URI Component -> This Function Encodes A Set Of Special Characters In A Way That The Component Can Be Decoded Using DecodeURI

// This Function Helps Keep The Valid Formatting. It Is Used Like This 

// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

// This Way Spacial Character Are Encoded

// Cookies Option 

// Cookies Have Several Options Which Can Be Provided After Key=Value To A Set Call Like This :

// document.cookie = "user=harry;path=/a;expires=Tue,29 March 204"
// path -> Which Domain The Cookie Will Be Available On
// document.cookie = "user=harry;path=/a;expires=Tue,29 March 2041 12:00:33 GMT"
// Set Only One Cookies With Path And Expires
// document.cookies -> Can Set Only One Cookie At A Time Other Are Option


// Path Option Makes The Cookie Available Only At The /a and /a/b ................ Path. -> Not Available At /b But Available At /a/b
// Expires At -> Date When Cookie Will Be Expired. Time Stamp In GMT

// Note : 
// 1. The Name And Value Pair After EncodeURI Component Can Be Up To 4KB
// 2. Total No Of Cookies Per Domain Is Limited To Arbitrary Number Around 20+ (Exact Number Is Browser Dependent)
// 3. Cookies Are Sent With Each Request To The Server, So The Server Can Learn Who Sent The Request

// Local Storage
// Local Storage Is Web Storage Object Which Are Not Sent To Server With Each Request
// Data Survives Page Refresh And Even After Full Restart

// These Are Method Provided By Local Storage

// 1. localStorage.setItem(key, value) -> Store Key Value Pair Or Update The Value If Key Is Already Present
// 2. localStorage.getItem(key) -> Get The Value By Key
// 3. localStorage.removeItem(key) -> Remove The Key Value Pair
// 4. localStorage.clear() -> Clear The Entire Local Storage
// 5. localStorage.key(index) -> Get The Key On A Given Position
// 6. localStorage.length -> The Number Of Stored Items
// We Can Use Both Key And Value As String

// let key = prompt("Enter key you want to set")
// let value = prompt("Enter value you want to set")

// localStorage.setItem(key, value)

// console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

// if (key == "red" || key == "blue") {
//         localStorage.removeItem(key)
// }

// if (key == 0) {
//         localStorage.clear()
// }
// console.log(localStorage.length)

// We Can Get And Set Values Like An Object
// localStorage.one = 1
// alert(localStorage.one)
// delete localStorage.one

// Note:
// 1. Both Key And Value Must Be String 
// 2. We Can Use The Two JSON Methods To Store Objects In Local Storage

// JSON.stringify(object) -> Converts Objects To JSON Strings
// JSON.parse(string) -> Converts String To Objects (Must Be Valid JSON)

// Session Storage 
// Session Storage Exists For Only One Session. Data Survives Refresh But Not Close Of Browser

// Used Less As Compared To Local Storage 
// Properties And Method Are Same As Local Storage But:
// 1. Session Storage Data Survives Page Refresh But Not Close Of Browser
// It Exists Only Within The Current Browser Tab. Another Tab With Same Page Will Have Empty Session Storage

// 2. The Data Survives Page Refresh, But Not Closing / Opening Of Browser

// Storage Event 
// When The Data Gets Updated In Local Storage Or Session Storage, Storage Event Triggered With These Properties:
// 1. key -> The Key
// 2. oldValue -> Previous Value
// 3. newValue -> New Value
// 4. url -> Page URL
// 5. storageArea -> local or session

// We Can Listen The OnStorage Event Of Window Which Is Triggered When Updates Are Made To The Same Storage From Other Documents

// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")

// Dusri Tab Dusra Page Different Session Storage

// window.onstorage = (e) => {
//         alert("changed")
//         console.log(e)
// }

// Practice Set

// Q1 Use a Free API From The Internet And Feed Your App With Live Data

// Q2 Create A Note Saving App Which Stores Your Note To localStorage

// Q3 Repeat Q2 And Fetch The Note Which User Entered In The Previous Question

// Q4 Delete The Note In The Previous Question


let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        for (item in contests) {
                console.log(contests[item])
                ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
        }
        cardContainer.innerHTML = ihtml
})

/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
