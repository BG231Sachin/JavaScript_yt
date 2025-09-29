//For loop

for(let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
} 

// console.log(element);  //It is out of the scope so it will notprint anything


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} and Outer loop value : ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
        
    }
    
}


let myArray = ["flash", "batman","thor"]
// console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


// break and continue statement

// for (let index = 1; index <= 20; index++) {

//     if(index == 5){
//         console.log(`Detected 5`);
//         break
        
//     }
//     console.log(`value of i is ${index}`);
    
// }


// Continue st
for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log(`Detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);
    
}