// Stack(Primitive), Heap(Non-Primitve)


// When we use stack we get the copy of the value

// and When we use Heap memory we get the reference(Original Variable Value)





let myName = "Sachin"

let anotherName = myName

anotherName = "Biplob"


console.log(myName);
console.log(anotherName);



let user1 = {
    email : "user@google.com",
    upi : "user@ybl"
}


let user2 = user1

user2.email = "sachin@google.com"

console.log(user1);
console.log(user2);


