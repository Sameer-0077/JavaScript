const user = {
    username: "Sameer",
    location: "India",
    wlecomeMessage: function(){
        console.log(`Hello ${this.username}, welcome to website`);
        console.log(this);
    }
}
user.wlecomeMessage()
user.username = "Sam"
user.wlecomeMessage()

console.log("\n--------------------------------------------------------------------------------\n");


// ------------------------------------------------------------------------------


// function f1(){
// const username = "Sameer"
//     console.log(this);
// }
// f1()

function f2(){
    const username = "Sammy"
    console.log(username);
    console.log(this.username);// The this keyword can access elements of an object but not a fucntion that's why is print undefined.
}
f2()

const chai =  () => {
    let funName = "Arrow Function =>"
    console.log(funName);
    console.log(this.funName);// Here in arrow function also this cannot access its element
}

chai()

const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(4,8));
// The same lines can be written as 

const addThree = (num1, num2,num3) => num1+num2+num3 // Its called Implicit Return, means we don't have to write return keyword explicity 

console.log(addThree(4,8,2));

// Again the same line also can be written as

const addFour = (num1, num2,num3,num4) => (num1+num2+num3+num4) //Its also called Implicit Return

console.log(addFour(4,8,2,2));