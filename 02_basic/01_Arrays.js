const myArr1 = [1,2,3,4,5,6]
//console.log(typeof("Arr1 is " + myArr1));

const myArr2 = new Array(10,11,12,13,14,15)
console.log(myArr2);

//console.log(typeof(myArr1));
//console.log(typeof(myArr2));

myArr2.push(16)
myArr2.push(20)
console.log(myArr2);
myArr2.push(22)
console.log(myArr2);
myArr1.pop()
myArr1.pop()
console.log(myArr1);

myArr1.unshift(0)
myArr2.shift()
console.log(myArr1);
console.log(myArr2);

console.log(myArr2.includes(20));
console.log(myArr1.includes(10));

const myArr3 = myArr1.concat(myArr2)
console.log(myArr3);

const myArr4 = myArr1.join()
console.log(myArr4);

const myArr5 = myArr2
console.log("Arr5",myArr5);
myArr5.pop()
console.log("Arr5",myArr5);
console.log("Arr2",myArr2);

const myArr6 = myArr2.slice(1,6)
console.log("Arr2",myArr2);
console.log("Arr6",myArr6);
const myArr7 = myArr6.splice(1,3)
console.log("Arr7",myArr7);
console.log("Arr6",myArr6);