const userEmail = "sachin@google.com"

// Here we are not doing any comparison  or not checking anything about the userEmail
//So we are not checking anything it only checks it is(userEmail) is available or not
//It has some string value so it take it as true if it is empty string then it will give the else outputs

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
    
}

// Falsy values are : 0, -0, 0n, BigInt, "", null, undefined, NaN

// Truthy valuse are : {}, [], "0", 'false', " ", function(){}

const myArray = []

// if(myArray.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) //We are using .length === 0 to check whether it is empty obj or not
{
    console.log("Object is empty");
    
}


// 
// false == 0 is true
// false == '' is true
// 0 == '' is true
// 


// Nullish Coalescing Operator ??

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15


//  console.log(val1);
 


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");

