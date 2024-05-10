const marvel_hero = ["Iorn Man","Thor","Captain America","Spider Man"]
const dc_hero = ["Super Man","Falsh","Bat Man"]

//marvel_hero.push(dc_hero)
//console.log(marvel_hero);

const all_hero = marvel_hero.concat(dc_hero)
console.log(all_hero);

const all_new_hero = [...marvel_hero, ...dc_hero]
console.log(all_new_hero);

const anotherArray = [0,2,4,6[1,2,3[5,7,9]]]
const anotherArray1 = anotherArray.flat(Infinity)
console.log(anotherArray1);


console.log(Array.isArray("Sameer"))
console.log(Array.from("Sameer"))

