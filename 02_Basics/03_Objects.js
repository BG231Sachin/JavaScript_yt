// Singleton - When we declare variables using const it becomes singleton
//We can make object Singleton or Oject literals


/// object.create
// Object literals



// Creating||Defining symbols (Symbol is js data type )
const mySym = Symbol("Key1")  



//Creating and assigning values to the object
const JsUser = {
    name : "Sachin",
    "full name" : "Biplob Gorai",
    //Adding symbols in object like keys
    [mySym] : "mykey1",  //We have to write the variable name of symbol in [mysym] 
    age : 21,
    location : "Jaipur",
    email : "sachin@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
//JsUser is a Object



//ways of accessing objects
// console.log(JsUser.email);//Do not prefer this
// console.log(JsUser["email"]); //Always prefer this

// console.log(JsUser["full name"]);  //Beacause of this

// console.log(JsUser[mySym]);  //When printing also you should give []
// console.log(typeof JsUser[mySym]);


//Changing or overwriting the values of objects
JsUser.email  = "biplobgorai05@gmail.com"


//Freezing the Object
// Object.freeze(JsUser)
//now we cannot overwrite or change the values of the object JsUser
//Example
// JsUser.email = "sachingorai@gmail.com"
// console.log(JsUser["email"]);

console.log(JsUser);



//NOTE*******************NOTE*******************NOTE*******************NOTE*******************NOTE*******************NOTE*******************NOTE
// When we refer symbol in in objecs we have to use square_braces[] otherwse it will treat as a string variable


// Creating functions inside object
JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingTwo());


//greetingRwo ka nam ka humne ek function banaya hai idhar jisme hum JsUser object k name ko sath m print kara rhe hai 
//Jab v humlogo ko kisi v object ko use krna hoga humlog ko ya refernce lena hai to humlog ${`write_what_u_want, ${this.obj_value_name}`);