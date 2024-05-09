console.log(Date);

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleTimeString());
console.log(myDate.toDateString());
// console.log(myDate.toTimeString());

console.log(myDate.getFullYear());
// let myCreateDate = new Date(2024, 05, 09)
let myCreateDate = new Date(2024, 04, 09,16, 50)
console.log(myCreateDate.toString());

let myNewDate = new Date("2024-05-09")
console.log(myNewDate.toLocaleDateString());
