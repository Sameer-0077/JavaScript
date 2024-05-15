
for (let i = 0; i < 10; i++) {
    console.log(i);   
}

// Table print

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}`)
    for(let j = 1; j <= 10; j++){
        // console.log(i + " * " + j + " = " + i*j);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

let myArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(`Day ${i+1} is ${myArray[i]}`);
    
}