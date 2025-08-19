// Primitive data types

// 7 types : String,Number, Boolean, Null, Undefined, Symbol, BigInt



// Reference types(Non-Primitive data types)

// Array, Objects, Functions



// JAVA is a Statically typed language that means that the data type of a variable in JAVA is checked at compile time, before the program is run. Once variable is declared with a specific type, it cannot be reassigned to a different type. For example, if you declare an int variable, you cannot later assign a String value to it

/* but JAVAScript is dynamically typed language. This means that variable types is are determined at runtime, not at compile-time. You do not need to explicitly declare the data type of a variable when you create it; JavaScript will infer the type based on the value assigned to it.*/  





const score = 100
const scorevalue = 100.3

const isLoggedIn = false 

const outsideTemp = null




const id = Symbol('123')

const  anotherID = Symbol('123') //Both symbol behaves differently

console.log(id === anotherID);



const bigNumber = 3336998547552165455n



const heroes = ["Shaktiman", "Nagraj", "Doga"]; //Arrays


//Objects
let myObj = {
    name : "Sachin ",
    age : 21,
}



//Functions
const myFunction = function()
{
    console.log("Hello world");
}



console.log(typeof myFunction);



//Every non-primitive data types are of function type but the data of function is object_Function



