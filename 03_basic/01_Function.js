function printMyName()
{
    console.log("S")
    console.log("A")
    console.log("M")
    console.log("E")
    console.log("E")
    console.log("R")
}
printMyName()

function addTwoNum(num1,num2)
{
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
}
addTwoNum(5,8)

function returnSqr(num)
{
    return num*num
}

const sqr = returnSqr(4)
console.log(`Square is ${sqr}`);

/*
function justLogIn(user)
{
    if(!user)
        {
            console.log("Please enter your name");
            return
        }
    return `${user} just log in`
} */

function justLogIn(user = "Sam")
{
    return `${user} just log in`
}
console.log(justLogIn("Sameer"));

function calculateCartPrice(...num1)
{
    return num1
}
console.log(calculateCartPrice(200,400,800,1000))

const User = {
    userName: "Sameer",
    location:"India"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and location is ${anyObject.location}`)
}
handleObject(User)

function returnSecondValue(arr){
    return arr[1]
}

const arr1 = [100,200,400,600]
console.log(returnSecondValue(arr1));