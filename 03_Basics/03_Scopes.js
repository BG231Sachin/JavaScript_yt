let a = 10
const b = 20
// var c = 30 //Don't use var

if(true){
    let a = 300
    const b = 20
    // console.log("INNER : ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "sachin231"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    // two()
    
}

// one()

if(true){
    const username = "Sachin"
    if(username === "Sachin"){
        const website = "youtube"
        // console.log(username + website);
        
    }
}



// ***********************Interesting**********************************

console.log(addone(5));


function addone(num){
    return num +1
}

// addone(5)


console.log(addTwo(5)); //Cannot access 'addTwo' before initialization because hum addTwo func ko declare krne k sath sath ek const variable me store(hold) v kr diye hai isliye ye run nhi kr rha
// When we access before initialization then it is called hoisting


const addTwo = function(num){  //addTwo is a variable and also called expression
    return num + 2
}

// addTwo(5)