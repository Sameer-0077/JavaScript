
const myObj = {
    js : 'JavaScript',
    cpp : "C++",
    rb : "Ruby",
    py : 'Python'
}

for (const key in myObj) {
    console.log(key);    
}


for (const key in myObj) {
    console.log(myObj[key]);    
}


for (const key in myObj) {
    console.log(`Key is ${key} and Value is ${myObj[key]}`);    
}


const arr = ["Java", "JavaScript", "C++", "Python"]

for (const index in arr) {
    console.log(index);
}


for (const index in arr) {
    console.log(`Index is ${index} and Value is ${arr[index]}`);
}

