const coding  = ["Java", "JavaScript", "Python", 'C++']

coding.forEach( function (lang) {
    console.log(lang);
}
)

console.log("\n");
// Using Arrow function

coding.forEach( (item) => {
    console.log(item);
})

// Using function as a Parameter

function print(item){
    console.log(item);
}

console.log("\n");
console.log('Using Function as a parameter');
coding.forEach(print)
console.log("\n");

coding.forEach((item, index) => {
    console.log(`Index ${index} - ${item}`);
})

console.log("\n");
coding.forEach((item,index , arr) => {
    console.log(arr);
})

console.log("\n");

const arr = [
    {
        langName : "JavaScript",
        codeName : "JS"
    },
    {
        langName : "Python",
        codeName : "py"
    },
    {
        langName : "Java",
        codeName : "java"
    }
]

arr.forEach( (item) => {
    console.log(`Language name is ${item.langName} and short name is ${item.codeName}`);

})

