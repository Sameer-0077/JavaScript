
// for of loop

const arr = [1,2,3,4,5]

for (const val of arr) {
    console.log(val);
}

const map = new Map()

map.set("IN", "INDIA")
// map.set("EN", "ENGLAND")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("FR", "FRANCE")

console.log(map);

for (const [key,val] of map) {
    console.log(`${key} :- ${val}`);
}

const  myObj =  {
    game1 : "Total Overdose",
    game2 : "X-Men",
    game3 : "GTA Sanandreas",
    game4 : "GTA Vicity"
}

console.log(myObj);

// for (const [key, val] of myObj) {
//     console.log(`${key} : ${val}`);
// }                                           
// So here we see that Object is not Iterable. It doesn't mean that we can't itarate Object there are some other ways to itarate an Object.