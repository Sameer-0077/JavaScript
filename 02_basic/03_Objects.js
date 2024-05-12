//Singletone Objects
//Object.create

//Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sameer",
    age: 18,
    location: "Jaipur",
    [mySym]: "key1",
    email: "sameer@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monaday","Wednesday","Friday"],
    "newName": "Sam"
}
console.log(JsUser)
console.log("\n\nName is " + JsUser.name);
console.log("Location is " + JsUser.location);
console.log("Email is " + JsUser.email);
console.log(JsUser.lastLoggedIn[1]);
console.log(JsUser["newName"]);
console.log(JsUser[mySym]);



JsUser.greeting = function(){
    console.log("\n")
    console.log(`Hello this is ${this.name} form ${this.location}`)
    console.log("\n")
}
JsUser.greeting();
/*
To lock object we can use freeze method which will lock the object and that object never change its key value until we remove freeze
*/

JsUser.email = "sameer@chatGPT.com" // here change the email
Object.freeze(JsUser) // now we freeze the object so that  object will not change its value anymore
JsUser.email = "sameer@microSoft.com" // the JsUser.email will not change its value (because JsUser is freezed) it didn't show any error but it will never change the value 

console.log(JsUser);
