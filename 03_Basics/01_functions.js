//Basically function means packed-up lines of code into a package and we can use copy of that package how many times we want  

function  sayMyName(){
    console.log("S");
    console.log("a");
    console.log("c");
    console.log("h");
    console.log("i");
    console.log("n");
    
}

// sayMyName()


// function addTwoNumbers(num1, num2){ //parameters
//     console.log(num1+num2);
    
// }

function addTwoNumbers(num1, num2){ //parameters
    // let result = num1 + num2
    // return result 
    return num1+num2
    console.log("Hello"); //After returning any value in function it works up to that only means after that no code will be execute
    
}

// addTwoNumbers(1,2) //arguments
const result = addTwoNumbers(1,2)

// console.log("After adding two numbers : ",result);



function loginUserMessage(username){ //If we want a default to show in the username when the user does not enter there username then just do this ( username = "sam")
    if(!username)
    {
        console.log("Please enter a username");
        return
        
    }

    return `${username} just logged in!`
}
//Now if we pass something it will overwrite sam
const message = loginUserMessage() //If we do not pass any value in tha argument it will print "undefined" 
console.log(message);
