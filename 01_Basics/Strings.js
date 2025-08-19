const name = "Sachin" // way to declare String
const repoCount = 50

console.log(name + repoCount + " Value"); //Do not use this it is become #Old


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Use this


const  newName = new String("Sachin-Gorai")

console.log(newName);

console.log(newName[0]);

console.log(newName.__proto__);


console.log(newName.length);

console.log(newName.toUpperCase());

console.log(newName.charAt(3));

console.log(newName.indexOf('a'));

// const newString = newName.substring(0, 4)
// console.log(newString);


console.log(newName.substring(0, 4));


console.log(newName.slice(-12));



// console.log(newString );



const newStringName = "          Sachin   gorai        "
console.log(newStringName);
console.log(newStringName.trim());


console.log(newStringName.replace('g', 'G'));

console.log(newStringName.includes('gor'));

console.log(newName.split("-"));




