// # An algorithm is a series of styp-by-step instructions that describe how to do something.

const { result, split, find } = require("lodash");

// To write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code.

// In this course, you'll learn the fundamentals of algorithmic thinking by writing algorthms that do everything from converting tempeeatures to handling complex 2D arrays.





// ## Convert Celsius to Fahrenheit

// The formula to convert from Celsuius to Fahrenheit is the temperature in Celsius times '9/5'. plus '32'.

// You are given a variable 'celsius' representing a temperature in Celsius. Use the variable 'fahrenheit' already defined and assign it the Fahrenheit temperature equivalent to th given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

// function convertCtoF(celsius) {
//     let fahrenheit = celsius * 9/5 + 32;
//     return fahrenheit;
// }

// console.log(convertCtoF(30));





// ## REverse a String

// Reverse the provided string.

// You may need to turn the string into an array before yo ucan reverse it.

// Your result must be a string.

// function reverseString(str) {
//     // create empty array 'charArr' to hold each character of 'str' var
//     let charArr = [];
//     // iterate over 'str' string variable 
//     for(let i = 0; i < str.length; i++) {
//         // add each character of 'str' string variable to the beginning 'charArr' 
//         charArr.unshift(str[i]);
//     }
//     // 
//     reversedStr = "";
//     charArr.forEach(char => reversedStr += char);
//     console.log(reversedStr)
//     // str = charArr.join('');
//     return reversedStr;
// }
  
// console.log(reverseString("hello"));





// ## Factorialize a Number

// Return the factorial of the provided integer

// If the integer is represented with the letter 'n', a factorial is the product of positive integers less than or equal to 'n'.

// Factorials are often represented with the sorthand notation 'n!'

// For example: '5! = 1 * 2 * 3 * 4 * 5 = 120

// // Only integers greater than or equal to zero will be supplied to the function

// function factorialize(num, n = num) {
//     if (n === 1){
//         return num * 1;
//     } else if (n === 0) {
//         return 1;
//     }

//     return factorialize(num * (n - 1), n - 1);
// }

// console.log(factorialize(5));





// ## Find the Longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// function findLongestWordLength(str) {
//     let wordArr = str.match(/\S+/gi);
//     largerLen = 0;

//     for (let i = 0; i < wordArr.length; i++) {
//         if (wordArr[i].length > largerLen) largerLen = wordArr[i].length;
//     }

//     return largerLen;
// };

// function findLongestWordLength2(str) {
//     strArr = str.split(" ");
//     console.log(strArr);
//     mapArr = strArr.map(word => word.length);
//     console.log(mapArr);
//     console.log(...mapArr);
//     let largerNum = Math.max(...mapArr);
//     console.log(largerNum)

//     return Math.max(...str.split(" ").map(word => word.length));
// };

// function findLongestWordLength3(str) {
//     console.log(str);
//     console.log(str.split(' '));
//     console.log(str.split(' ').reduce((longest, word) => Math.max(longest, word.length), 0))

//     return str
//         .split(' ')
//         .reduce((longest, word) => Math.max(longest, word.length), 0);
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWordLength3("The quick brown fox jumped over the lazy dog"));





// ## Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax 'arr[i]'.

// function largestOfFour(arr) {
//     let maxArray = [];
//     arr.forEach(element => maxArray.push(Math.max(...element))); 

//     return maxArray;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));






// ## Confirm teh Ending

// Check if a string (first argument, 'str') ends with the given target string (second argument, 'target').

// This challege can be solved with the '.endsWith()' method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// function confirmEnding(str, target) {
//     return str.substring(str.length - target.length) === target;
// };

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Bastian", "an"));
// console.log(confirmEnding("Bastian", "on"));





// Repeat a String Repeat a String

// Repeat a given string 'str' (first argument) for 'num' times (second argument). Return an empty string if 'num' is not a positive number. For the purpose of this challenge, do not use the built-in '.repeat()' method.

// function repeatStringNumTimes(str, num) {
//     if(num < 1) return '';
//     const strVal = str;
//     for (let i = 0; i < num - 1; i++) {
//         str += " " + strVal;
//     }
//     return str;
// }

// console.log(repeatStringNumTimes("abc", 3));






// ## Truncate a String

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

// function truncateString(str, num) {
//     if(str.length > num) return str.substring(0, num) + '...';
//     return str;
// }

// console.log(truncateString("A-ticket a-tasket A green and yellow basket", 8));





// ## Finders Keepers

// Create a function that looks through an array 'arr' and returns the first element in it that passes a 'truth test'. This means that given an element 'x', the 'truth test' is passed if 'func(x)' is 'true'. If no element passes the test, return 'undefined'.

// function findElement(arr, func) {
//     return arr.find(func);
// };

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// console.log(findElement([1, 11, 3, 13], num => num % 2 === 0));





// Boo who

// check if a value is classified as a boolean primitive. Return 'true' or 'false'.

// Boolean primitives are 'true' and 'false'.

// function booWho(bool) {
//     return typeof bool == typeof true;
// }

// console.log(booWho(null));
// console.log(booWho(false));
// console.log(booWho(true));






// ## Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.


// function titleCase(str) {
//     // const regexCapitalizeFirst = /(^\S{1})|(\s+\w{1})/g;
//     // const regexToLowerWordBody = /(.)/g
//     // const newStr = str.replace(regexToLowerWordBody, letter => letter.toLowerCase())
//     // return newStr.replace(regexCapitalizeFirst, letter => letter.toUpperCase());
    
//     return str.toLowerCase().replace(/(^|\s)\w/g, letter => letter.toUpperCase());
// }

// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("sHoRt AnD sToUt"));
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));





// ## Slice and Splice

// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index 'n' of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
// }

// // console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// // console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2));
// // console.log(frankenSplice([1, 2, 3], [4, 5, 6], 3));
// // console.log(frankenSplice([1, 2, 3], [4, 5, 6], 0));
// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))





// ## Falsy Bouncer

//  Remove all falsy values from an array. return a new array; do not mutate the original array.

// Falsy values in JavaScript are 'false', 'null', '0', '""', 'undefined', and 'NaN'.

// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//     return arr.filter(element => !!element);
// }

// console.log(bouncer([7, "ate", "", false, 9]));





// Where do I Belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, 'getIndexToIns([20, 3, 5], 19) should return '2' because once the array has been sorted it will look like '[3, 5, 20]' and '19' is less than '20' (index 2) and greater than '5' (index 1).

// function getIndexToIns(arr, num) {
//     // arr.sort((a, b) => a - b);

//     // if(arr[arr.length - 1] < num || !arr.length) return arr.length
    
//     // return arr.findIndex((element) => num <= element);
// // ONE LINER!!!! DOESN'T NEED THE SORT METHOD
//     return arr.filter(val => num > val).length
// };
// console.log(getIndexToIns([20, 3, 5], 19))
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) 
// console.log(getIndexToIns([40, 60], 50))
// console.log(getIndexToIns([3, 10, 5], 3)) 
// console.log(getIndexToIns([5, 3, 20, 3], 5)) 
// console.log(getIndexToIns([2, 20, 10], 19))
// console.log(getIndexToIns([2, 5, 10], 15)) 
// console.log(getIndexToIns([], 1) )





// ## Mutations

// Return 'true' if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, '["hello", "Hello"]', should return 'true' because all of the letters in the second string are present in the first, ignoring case.

// The arguments '["hello", "hey"]' should return 'false' because the string 'hello' does not contain a 'y'.

// Lastly, '["Alien", "line"]', should return 'true' because all of the letters in 'line' are present in 'Alien'.

// function mutation(arr) {
//     let count = 0;
//     for (let i = 0; i < arr[1].length; i++) {
//         let regex = new RegExp(arr[1][i], 'i')

//         if(regex.test(arr[0])) count++;
//     }
//     return arr[1].length === count;
// }

// console.log(mutation(["hello", "Hello"]))
// console.log(mutation(["hello", "hey"]))
// console.log(mutation(["Alien", "line"]))






// ## Chunky Monkey

// Write a funciton that splits an array (first argument) into groups the length of 'size' (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let outputArr = [];
    for (let i = 0; i < arr.length; i += size) {
        outputArr.push(arr.slice(i, i + size));
    }
    return outputArr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
