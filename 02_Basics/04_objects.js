//It is a singleton object
const tinderUser = new Object()


//It is a Non-Singleton object
// const tinderUser = {}


//Adding values to the object
tinderUser.id = "123cde"
tinderUser.name = "Sachin"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// Now we will create Objects under objects.....  
const regularUser = {
    fullname: {
        userFullname : {
            firstName : "Sachin",
            middleName : "Chandra",
            lastName : "Gorai"  
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.userFullname);


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}


//Combining two objects
// const obj3 = {obj1, obj2}  //Wrong way
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Correct way to combine 
// The Object.assign() method only copies enumerable and own properties from a source object to a target object.


const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// {} we should use this to make it Target and else are sources



// When values comes frfom database
const users = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
]

// console.log(tinderUser);  
// console.log(Object.keys(tinderUser)); //Returns array
// console.log(Object.values(tinderUser)); //Returns array
// console.log(Object.entries(tinderUser)); //Make every Key Value a Array(First will be Key and second is Value in every array)

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Check if it has that value available or not 





//  Object de-structure
const course = {
    courseName : "JS in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor : Instructor} = course

console.log(Instructor);


// De-Structure the Object
// const navbar = ({company}) => {

// }

// navbar(company  = "hitesh")



// How JSOn looks like

//  {
//     "name" : "hitesh",
//     "coursename" : "JS in Hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]