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







// ## Diff Two Arrays #2

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the 'symmetric difference' of the two arrays.

// Note: You can return the array with its elements in any order.

// function diffArray(arr1, arr2) {

//     const newArr = arr1
//         .filter(element => !arr2.includes(element))
//         .concat(arr2.filter(element => !arr1.includes(element)))

//     const someArr = arr1
//         .filter(element => {
//             console.log(!arr2.includes(element))
//             return !arr2.includes(element)})
//         .concat(arr2.filter(element => {
//             return !arr1.includes(element)}));

//     const union = [...new Set([...arr1, ...arr2])]
//     console.log(union)

//     const intersection = arr1.filter(i => arr2.includes(i))
//     console.log(intersection)

//     const difference = union.filter(i => !intersection.includes(i))
//     console.log(difference)

//     return  newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));






// ## Seek and Destroy

// You will be provided with an initial array (the first argument in the 'destroyer' function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments

// Note: You have to use the 'arguments' object.

// function destroyer(arr) {
//   // store additional function arguments in 
//   // variable 'removeArguments'
//   const removeArguments = Array.from(arguments).slice(1);
//   // return array without 'removeArguments' 'elements'
//   return arr.filter(element => !removeArguments.includes(element));
// }
  

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))






// ## Wherefore art thou

// Make a funciton that look