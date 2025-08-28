// const score = 400
// console.log(score);

// const balance =  new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2)); 

// const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(5));


// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));











// *********************************************  MAths  *********************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.66));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.99));

console.log(Math.min(4,3,5,9));


console.log(Math.random());  //Math.random gives a random decimals numbers from 0.0000 to 0.999999999
console.log((Math.random()*10)+1); //So math.random gives random decimal numbers that's why we multiply the number with 10 and also adds 1 because sometimes it gives zero also
console.log(Math.floor(Math.random()*10)+1); //WE use Math.floor to wrap up or round-of the number with its lowest value




const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);