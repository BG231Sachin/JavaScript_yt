// Reduce in JS

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue 
);

//Accumulator does not know what is itsfirst value so at first we have to declare its value
// Accumulator is a empty vairable and it store the initial value which is given by the user
// first time the current value is the first element in the array here it is 1
// Note :- Only first time the accumulator takes the initial value after that it is equal to the sum of accumulator + currentVlaue

// console.log(sumWithInitial);

const shoppingCart = [
    {
        itemName : "js-Course",
        price : 2999
    },
    {
        itemName : "PY-Course",
        price : 1999
    },
    {
        itemName : "App dev-Course",
        price : 5999
    },
    {
        itemName : "Data Science-Course",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)

console.log(priceToPay);
