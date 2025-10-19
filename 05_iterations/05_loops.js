// for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) { // Her we do not have to give the name of the function because it is a callback function and it automatically gets value from the array 
//     console.log(item);
    
// } )


// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "JS"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "C-Programming",
        languageFileName : "C"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})