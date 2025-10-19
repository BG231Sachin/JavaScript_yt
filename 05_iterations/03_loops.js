//for of loop


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}


//Maps - Map is a Object which holds key value pairs and remembers the original insertion order of the keys

const map =  new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);


//Here we have to destructure the array
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }
