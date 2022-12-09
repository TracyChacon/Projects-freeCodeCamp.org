// # Intermediate Algorithm Scripting

// Now that you know the basics of algorithmic thinking along with OOP and Functional Programming, test your skills with the Intermediate Algorithm Scripting challenges.








// ## Sum All Numbers in a Range #1

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, 'sumAll([4, 1])' should return '10' because sum of all the numbers between 1 and 4 (both inclusive) is '10'.

// function sumAll(arr) {
//     let amountOfNumbers = (Math.abs(arr[0] - arr[1]) + 1)
//     return amountOfNumbers/2 * (arr[0] + arr[1]);    
// };

// console.log(sumAll([1, 4]));
// console.log(sumAll([4, 1]));

// console.log(sumAll([5, 10]));
// console.log(sumAll([10, 5]));