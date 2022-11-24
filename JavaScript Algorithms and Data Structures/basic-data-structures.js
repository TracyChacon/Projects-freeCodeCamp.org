// # Basic Data Structures

// Data can be stroed and Accessed in many ways. You already know some common JavaScript data structures-arrays and objects.

// In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like 'splice()' and 'Object.keys()' to access and manipulate data.





// ## Use an Array to Store a Collection of Data

// The below is an example of the simplest implementation of an array data stucture. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any ohter arrays nested within it. Notice it contains booleans, strings, and numbers, amoung other valid JavaScript data types:

// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length);

// The 'console.log' displays '7'.

// All arrays have a length property, which as shown above, can be very easily accessed with the syntax 'Array.length'. A more complex implementation of an array can seen below. This is known as a multi-dimensional array, or an array that contains other Arrays. Notice that this array also contains JavaScript objects, which we'll examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

let complexArray = [
    {
        one: 1,
        two: 2
    }
];