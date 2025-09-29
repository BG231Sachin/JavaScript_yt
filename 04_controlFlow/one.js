// IF Condition
// if(true){

// }


// if(false){

// }

const isUserLoggedIn = true

if(isUserLoggedIn){

}


// conditions: <,>, <=, >=, ==,!=, ===, !==

const temperature = 41

// if(temperature === 40){
//     console.log("Less than 50");
// } else {
//     console.log("Temperature is greater than 50 ");
    
// }

const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power : ${power}`);

// Shorthand NOtation
// const balance = 1000

// if(balance > 500) console.log("Test"),console.log("Test2"); //Do not prefer this

// Nesting
// if(balance < 500) {
//     console.log("Less than 500");

// }else if(balance < 750) {
//     console.log("Less than 750");

// }else if(balance < 900) {
//     console.log("Less than 900");

// }else {
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in");
    
}