const accountId = 1445533
let accountEmail = "biplobgorai07@gmail.com"
var accountPassword = "12345"
accountCity = "Dhanbad" 


/*
Prefer not to use var
because of issue in block scope and functional scope 


Note - When we use var type even within a {} it not work only that it works within the whole code means it has no scope
*/

// accountId = 12

accountEmail = "sachin@gmail.com"
accountPassword = "54321"
accountCity = "Nirsha"


// console.log(accountEmail);

// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountCity]);