//Arrays part-2

const marvel_heroes = ["Thor", "IronMan", "Spiderman"]

const dc_heroes = ["Superman", "Flash", "Batman"]


// marvel_heroes.push(dc_heroes)
//Note :- The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


// const newArray = marvel_heroes.concat(dc_heroes)
// Note:- But whhen we do CONCAT The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
// console.log(newArray);




const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);

//Note:- The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.




const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("Sachin"));
console.log(Array.from("Sachin"));

console.log(Array.from({name:"Sachin"})); //Interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));