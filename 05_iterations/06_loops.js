// const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop dose not return any value
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filter is also a callback function and it returns value but we have to give some conditions for that  
// const newNums = myNums.filter( (num) => {
//     return num>4 // do not forget to use return keyword
// } )

// const newNums = []

// myNums.forEach(  (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


const books = [
    { title: 'Book 1', genre: 'Non-Fiction', publish: 1981, edition: 2004 },
    { title: 'Book 2', genre: 'Fiction', publish: 1991, edition: 2008 },
    { title: 'Book 3', genre: 'History', publish: 1999, edition: 2009 },
    { title: 'Book 4', genre: 'Non-Fiction', publish: 1999, edition: 2005 },
    { title: 'Book 5', genre: 'Science', publish: 2001, edition: 2010 },
    { title: 'Book 6', genre: 'Fiction', publish: 1888, edition: 1900 },
    { title: 'Book 7', genre: 'History', publish: 1988, edition: 1995 },
];   

let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre === 'History' } )

console.log(userBooks);

