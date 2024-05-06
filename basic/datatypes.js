// Premitive Data Types

// 7 Types : String, Numbers, Boolean, null, undifined, Symbol, BigInt

const id = "abc123"; // Numbers
const score = 90.04; // Numbers
let name = "Harry"; // Stirng
let userEmail; // undefined
const isLoggedIn = false; // Boolean
let bigNumber = 21351354462215633n;
const loginId = Symbol('123'); // Symbol
const logoutId = Symbol('123'); // logoutId have same id as loginId but both are diffrent




// Reference type or Non - Primitive Type

// Array, Objects, Functions 

// Array

const cities = ["Banglore","Hydrabad","Chennai","Mumbai","Delhi","Jaipur"];
console.log(cities);

// Objects

    let myObj = {
        playerName : "Harry",
        age : 18
    }

    console.log(myObj);

// Function
    const myFunction = function(){
        console.log("Hello word");
    }
    myFunction();
    console.log(myFunction);