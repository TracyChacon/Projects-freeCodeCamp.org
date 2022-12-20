// # Intermediate Algorithm Scripting

const { split } = require("lodash");

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






// ## Seek and Destroy #3

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








// ## Wherefore art thou #4

// Make a function that to look through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]', and  the second argument is '{ last: "Capulet" }' then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// function whatIsInAName(collection, source) {
//   const souceKeys = Object.keys(source);
//   return collection.filter(obj => {
//     for (let i = 0; i < souceKeys.length; i++) {
//       if (!obj.hasOwnProperty(souceKeys[i]) ||
//           obj[souceKeys[i]] !== source[souceKeys[i]]) {
//         return false;
//       }
//     }
//     return true;
//   });
// }

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// should return [{ first: "Tybalt", last: "Capulet" }]

// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) ) 
// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) )
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].








// ##  Spinal Tap Case #5

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// function spinalCase(str) {
//   var regex = /\s+|_+/g;
 
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
//   return str.replace(regex, "-").toLowerCase();
// }

// console.log(spinalCase('This Is Spinal Tap'));
// console.log(spinalCase('thisIsSpinalTap'));
// console.log(spinalCase('The_Andy_Griffith_Show'));
// console.log(spinalCase('Teletubbies say Eh-oh'));
// console.log(spinalCase('AllThe-small Things'));







// ## Pig Latin #6

// Pig Latin is a way of altering English Words. The rules are as follows:
// -If a word begins with a consonant, take the first consolnant or consonant cluster, move it to the end of th eword, and add 'ay' to it.

// -If a word begins with a vowel, just add 'way' at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// function translatePigLatin(str) {
//     return str
//       .replace(/^[aeiou]\w*/g, "$&way")
//       .replace(/(^[^aeiou]+)(\w*)/g, "$2$1ay");
// }

// console.log(translatePigLatin("consonant crazy speech"));
// console.log(translatePigLatin("paragraphs"));
// console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("schwartz"));



