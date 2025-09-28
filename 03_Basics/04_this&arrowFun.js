const user = {
    username : "Sachin",
    price : 999,

    welcomeMessage : function() {
        // console.log(`${this.username}, welcome to website`);  
        //this function refers the current context

        // console.log(this);
        
         
    }
}

// user.welcomeMessage()
// user.username = "sam" //here we changed the context
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "sachin"
//     console.log(this.username);
// }

// chai()
//This function only works on object

// const chai = () => {
//     let username = "Sachin"
//     console.log(this.username);
    
// }


// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit Return arrow function(we do not have to use the curly-braces and parentheses ) 
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

//When we have to return object we have to wrap with parentheses
const addTwo = (num1, num2) =>  ({username : "Sachin"})

console.log(addTwo(3, 4));



