//Singletone Objects
//Object.create

//Object Literals
const JsUser = {
    name: "Sameer",
    age: 18,
    location: "Jaipur",
    email: "sameer@google.com",
    isLoggedIn: false
}
console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello this is ${this.name} form ${this.location}`)
}
JsUser.greeting();