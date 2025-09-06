//Arrays


 const myArr = [0,1,2,3,4,5]

 const myHeros = ["Shaktiman" , "Naagraj"]

 const myArr2 = new Array(1,2,3,4)
//  console.log(myArr[0]);


//  ?Array Methods


// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9) //unshift method add 9 at the first position in array

// myArr.shift()
// myArr.shift() //shift method remove the first element from tyhe array



// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


//  console.log(typeof myArr); //Object


// const newArr =  myArr.join()

// console.log(myArr);

// console.log(newArr);
// console.log(typeof newArr); //changed to string due to join method




//Slice, Splice
//In SLICE it prints the elements from the starting range to last range excepting the value of last range and does not do anyting with the array
//In SPLICE it prints the elements starting to the last element and it effect the array also(remove the elements )


console.log("A", myArr);

const myn1 = myArr.slice(1, 3)


console.log(myn1);


console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);