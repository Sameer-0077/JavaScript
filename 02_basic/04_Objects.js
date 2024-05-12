const User = new Object()

User.name = "Sam"
User.id = "123abc"
User.email = "Sam123@gmail.com"
User.FullName = {
    UserNewFullName:{
        firstName: "Sameer",
        lastName: "Yadav"
    }
}

console.log(User);

console.log(User.FullName);
console.log(User.FullName.UserNewFullName);
console.log(User.FullName.UserNewFullName.firstName);
console.log(User.FullName.UserNewFullName.lastName);


console.log("\n\n-----------------------------------------------------------------------\n\n")

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
// const obj3 = {obj1, obj2} ---- If we run this line the obj3 will store obj1 and obj2 inside not concatenate their value its similar to an array hold another array inside their index

// To concatinate different objects keys and values in a new obj we can write below lines

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

// There is another simple way 

const obj4 = {...obj1, ...obj2}
console.log(obj4);

// Some other methods for objects

console.log("Keys are ------")

console.log(Object.keys(User));

console.log(Object.values(User));
console.log(Object.entries(User));


