let value = 1

if(value === 1)
    {
        console.log("User is currently LoggedIn");
    }
    else
    {
        console.log("User is currently LoggedOut");
    }

const marks = 100

if(marks < 40){
    console.log("Failed!");
}
else if(marks < 50){
    console.log("Just Passed");
}
else if(marks < 70){
    console.log("Good!");
}
else if(marks < 80){
    console.log("Very Good!");
}
else if(marks < 90){
    console.log("Excellent!");
}
else if(marks <= 100){
    console.log("Outstanding!");
}
else{
    console.log("Incorrect Marks");
}

const value1 = true
const value2 = true

if(value1 === true && value2 === true)
    {
        console.log("Both the Values are true");
    }
const value3 = false

if(value1 && value3)
    {
        console.log("Both the Values are true");
    }
else{
    console.log("Either one or both values are false");
}

if(value1 || value3){
    console.log("Either one or both values are true");
}
