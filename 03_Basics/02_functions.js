// In shopping cart we do not get to know about the quantity for that read above 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//In previous we got to know about the spread operator by using ... but  here  we also use ... but now it will called as rest operator
// console.log(calculateCartPrice(1200, 200, 852,3201));


const user = {
    username : "Sachin",
    price : 299
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

// handleObject(user)  //Pre-created object is used here
handleObject(
    {
        username : "sam",
        price : 1999
    }
)


const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1] //remember always use the name which is passed in the function
}

// console.log(returnSecondValue(myNewArray)); //Here we take index value of 1 of the myNewArray
console.log(returnSecondValue([200,400, 600, 800])); // same like object
