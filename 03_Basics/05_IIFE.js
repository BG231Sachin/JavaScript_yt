// Immediately Invoked Function Expressions (IIFE)

// Jo function immediately execute ho jaye usse IIFE kehte hai but it is not 100% correct


// Global variables k pollution k karan jo problem hota hai to usse hatane k liye humlog IIFE ka use krte hai


//Named IIFE
(function chai(){
    console.log(`DB Connected!`);
    
})(); //SemiColon(;) is used to end the first program
//Always give a semicolon to stop IIFE otherwise another IIFE code will not work
//Foe writing two IIFE we have to semi colon always remember this

// Simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Sachin')