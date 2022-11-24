// # Basic Data Structures

// Data can be stroed and Accessed in many ways. You already know some common JavaScript data structures-arrays and objects.

// In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like 'splice()' and 'Object.keys()' to access and manipulate data.





// ## Use an Array to Store a Collection of Data

// The below is an example of the simplest implementation of an array data stucture. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any ohter arrays nested within it. Notice it contains booleans, strings, and numbers, amoung other valid JavaScript data types:

// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length);

// The 'console.log' displays '7'.

// All arrays have a length property, which as shown above, can be very easily accessed with the syntax 'Array.length'. A more complex implementation of an array can seen below. This is known as a multi-dimensional array, or an array that contains other Arrays. Notice that this array also contains JavaScript objects, which we'll examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

// let complexArray = [
//     [
//         {
//             one: 1,
//             two: 2
//         },
//         {
//             three: 3,
//             four: 4
//         }
//     ],
//     [
//         {
//             a: "a",
//             b: "b"
//         },
//         {
//             c: "c",
//             d: "d"
//         }
//     ]
// ];

//  We have defined a variable called 'yourArray'. Complete the statement by assigning an array of at least 5 elements in length to the 'yourArray' variable. Your array should contain at least one String, one number, and one boolean.

// let yourArray = [
//     ['first'],
//     "string",
//     3,
//     true,
//     ['last']  
// ] ; // Change this line
// console.log(yourArray);





// Access an Array's Contents Using Bracket Notation

// The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.

// When we define a simple array as seen below, there are 3 items in it:

// let ourArray = ["a", "b", "c"];

// In an array, each array item ahs an index. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JvaScript arrays zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is konwn as bracket notation. for example, if we want to retrieve the 'a' from 'ourArray' and assign it to a variable, we can do so with the following code:

// let ourVariable = ourArray[0];

// Now 'ourVariable' has the value of 'a'.

// In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

// ourArray[1] = "not b anymore";

// Using bracket notation, we have now reset the item at index 1 from the string 'b' to 'not b anymore'. Now 'ourArray' is '["a", "not b anymore", "c"]'.

// In order to complete this challenge, set the 2nd position (index '1') of 'myArray' to andything you want, besides the letter 'b'.

// let myArray = ["a", "b", "c", "d"];
// // Only change code below this line
// myArray[1] = [1];
// // Only change code above this line
// console.log(myArray);





// Add Items to an Array with push() and unshift()

// An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are mutable. In this callenge, we will look at two methods with which we can programmatically modify an array: 'Array.push()' and 'Array.unshift()'.

// Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the 'push()' method adds elements to the end of an array, and 'unshift()' adds elements to the beginning. Consider the following: 

// let twenthThress = 'XXIII';
// let romanNumerals = ['XXI', 'XXII'];

// romanNumerals.unshift('XIX', 'XX');

// console.log(romanNumerals);

// romanNuerals.push(twentyThree);

// 'romanNumerals' would have the value '['XIX', 'XX', 'XXI', 'XXII', 'XXIII']'. Notice that we can also pass variables, which allows us even greater flexiblility in dynamically modifying our array's data.

// We have defined a function , 'mixedNumbers', which we are passing an array as an argument. Modify the function by using 'push()' and 'unshift()' to add ''I', 2, 'three'' to the beginning of the array and '7, 'VIII', 9' to the end so that the returned array contains representations of the numbers 1-9 in order.

// function mixedNumbers(arr) {
//     // Only change code below this line
//     arr.unshift('I', 2, 'three');
//     arr.push(7, 'VIII', 9);
//     // Only change code above this line
//     return arr;
// }
// console.log(mixedNumbers(['IV', 5, 'six']));





// ## Remove Items from an Array with pop() and shift()

// Both 'push()' and 'unshift()' have corresponding methods that are nearly functional opposites: 'pop()' and 'shift()'. As you may have guessed by now, instead of adding, 'pop()' removes an element from the end of an array, while 'shift()' removes an element from the beginning. The key difference between 'pop()' and 'shift()' and their cousins 'push()' and 'unshift();, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

// Let's take a look:

// let greetings = ['whats up?', 'hello', 'see ya!'];

// greetings.pop();

// console.log(greetings);

// // 'greetings' would have the value '[whats up?' , 'hello']'.

// greetings.shift();

// console.log(greetings);

// // 'greetings' would have the value '['hello']'.

// // We can also return the value of the removed element with either method like this:

// let popped = greetings.pop();

// 'greetings' would have the value '[]', and 'popped' would have the value 'hello'.

// We ahve defined a function, 'popShift', which takes an array as an argument and returns a new array. Modify the function, using 'pop()' and 'shift()', to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

// function popShift(arr) {
//     let popped = arr.pop(); //Change this line
//     let shifted = arr.shift(); // change this line
//     return [shifted, popped];
// }
// console.log(popShift(['challenge', 'is', 'not', 'complete']));






// ## Remove Items Using splice()

// Ok, so we've learned how to remove elements from the beginning and end of arrays using 'shift()' and 'pop()', but what if we want to revove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where 'splice()' copmes in. 'splice()' allows us to do just that: remove any number of consecutive elements from anywhere in an array.

// 'splice()' can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of 'splice()' are integers which represent indexes, or positions, of items in the array that 'splice()' is being called upon. And remember, arrays are zero-indexed, so to indicate the first elelment of an array, we would use '0'. 'splice()''s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elelment to delete. For example:

// let array = ['today', 'was', 'hot', 'so', 'great'];

// array.splice(2, 2);

// console.log(array);

// Here we remove 2 elements, beginning with the third element (at index 2). 'array' would have the value '['today', 'was', 'great'].

// // 'splice()' not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements;

// let array = ['I', 'am', 'felling', 'really', 'happy'];

// let newArray = array.splice(3, 2);

// console.log(newArray);

// // 'newArray' has the value '['really', 'happy']'.

// // We've initialized an Array 'arr'. Use 'splice()' to remove elements from 'arr', so that it only contains elements that sum to the value of '10'.

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(0, 4);
// arr.splice(1, 1);

// console.log(arr.reduce((prev, curr) => prev + curr))
// // Only change code above this line
// console.log(arr);





// ## Add Items Using splice()

// Remember in the last challenge we mentioned that 'splice()' can take up to three parameters? Wll, you can use the third parameter, comprised of one or more elements(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14)
// console.log(numbers);

// // The second occurrence of '12' is removed, and we add '13' and '14' at the same index. The 'numbers array would now be '[10, 11, 12, 13, 14, 15]'.

// Here, we begin with an array of numbers. Then, we pass the following to 'splice()': The index at which to begine deleting elements (3), the nuber of elements to be deleted (1), and the remaining arguments (13, 14) will be inserted starting at the same index. Note that there can be any number of elements (sparated by commas) following 'amountToDelete', each of which gets inserted.

// We have defined a function, 'htmlColorNames', which takes an array of HTML color as an argument. Modify the funcitno using 'splice()' to remove the first tow elements of the array and add ''DarkSalmon'' and ''BlanchedAlmond'' in their respective places.

// function htmlColorNames(arr) {
//     // Only change code below this line
//     arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
//     // Only change code above this line
//     return arr;
// }


// console.log(htmlColorNames(['DarkGoldenRod', 'Whitesmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick',]));





// ## Copy array Items Using slice()

// The next method we will cover is 'slice()'. Rather than modifying an array, 'slice()' copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. 'slice()' takes only 2 parameters--the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up, but not including the element at this index). Consider this:

// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
// let todaysWeather = weatherConditions.slice(1,3);

// console.log(todaysWeather);

// // 'todaysWeather' would have the value '['snow', 'sleet']', while 'weatherConditions' would still have '['rain', 'snow', 'sleet', 'hail', 'clear']'.

// // In effect, we have created a new array by extracting elements from an existing array.

// // We have defined a function, 'forecast', that takes an array as an argument. Modify the funciton using 'slice()' to extract informaiton from the argument array and return a new array that contains the string elements 'warm' and 'sunny'.

// function forecast(arr) {
//     // Only change code below this line

//     return arr.slice(2, 4);
// }

// // Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));






// ## Copy an Array with the Spread Operator

// While 'slice()' allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this '...'

// In practice, we can use the spread operator to copy an array like so:

// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];

// console.log(thatArray);

// // 'thatArray' equals '[true, true, undefined, false, null]. 'thisArray' remains unchanged and 'thatArray' contains the same elements as 'thisArray'.

// We have defined a function, 'copyMachine' which takes 'arr'(an array) and 'num' (a number) as arguments. The function is supposed to return a new array made up of 'num' copies of 'arr'. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!). 

// function copyMachine(arr, num) {
//     let newArray = [];
//     while(num >= 1) {
//         // Only change code below this line
//         newArray.push([...arr]);
//         // Only change code above this line
//         num--;
//     }
//     return newArray;
// }

// console.log(copyMachine([true, false, true], 2));





// ## Combine Arrays with the Spread Operator

// Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

// let thatArray = ['basil', 'cilantro', ...thisArray,'coriander'];

// console.log(thisArray);
// console.log(thatArray);

// // 'thatArray' would have the value '['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']'.

// // Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

// // We have defined a function 'spreadOut' that reuturns the variable 'sentence'. Modify the function using the spread operator so that it returns the array '['learning', 'to', 'code', 'is' 'fun']'.

// function spreadOut() {
//     let fragment = ['to', 'code'];
//     let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
//     return sentence;
// }

// console.log(spreadOut());





// ## Check For The Presense of an Element With indexOf()

// Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, 'indexOf()', that allows us to quickly and easily check for the presence of an element on an array. 'indexOf()' takes an element as a parameter, and when called, it returns the position, or index, of that element, or '-1' if the element does not exist on the array.

// For example:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');