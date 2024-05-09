const first_name = "Sameer";
const repoCount = 20;

console.log(`Hello my name is ${first_name} and my repo count is ${repoCount}`);

const lastName = "Yadav";

const full_name = first_name +" "+lastName;

console.log(full_name);

console.log(full_name.length);

const user1 = new String('Sameer');

console.log(user1);

console.log(typeof(user1));
console.log(typeof(full_name));

console.log(full_name.charAt(5));
console.log(user1.charAt(0));
console.log(user1.toUpperCase());

const newString = user1.substring(0,3);
console.log(newString);

console.log(full_name.slice(2,6));
// console.log(full_name.slice(8,2));

const new_name = "    Sameer   "
console.log(new_name);
console.log(new_name.trim());
console.log(new_name.replace("eer", "123"));
console.log(user1.includes('Sam'));

const anotherString = "Sam-eer-123" 
console.log(anotherString.split('-'));

