// # Basic JavaScript




// ## Storing Values with the Assignment Operator

// In JavaScript, you can store a value in a variable with the assignment operator ('=').

// myVariable = 5;

// This assigns the 'Number' value '5' to 'myVariable'.

// If there are any calculations to the right of the '=' operator, those are performed before the value is assigned to the variable on the left of the operator.

// var myVar;
// myVar = 5;

// First, this code creates a variable named 'myVar'. Then, the code assigns '54' to 'myVar'.
// Now, if 'myVar' appears again in the code, the program will treat it as if it is '5'.





// ## Nesting For Loops
// if you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

// const arr = [
//     [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0 ; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// ## Iterate with JavaScript Do...While Loops
//The next type of loop you will learn is called a 'do...while' loop. It is called a 'do...while' looop because it will first 'do' one pass of the code inside the loop no matter what, and then continue to run the loop 'while' the specified condition evaluates to 'true'.

// const ourArray = [];
// let i = 0;

// do{
//     ourArray.push(i);
//     i++;
// } while (i < 5);

// console.log(ourArray);

// The example above behaves similar to other types of loops, and the resulting array will look like '[0, 1, 2, 3, 4]'. However, what makes the 'do...while'different from other loops is how it behaves when the condition fails on the first check. Let's  see this in action. Here is a regular 'while' loop that will run the code in the loop as long as       'i < 5':

// const ourArray = [];
// let i = 5;

// while (i < 5) {
//     ourArray.push(i);
//     i++;
// }

// In this example, we initialize the value of 'ourArray' to an empty array and the value of 'i' to 5. When we execute the 'while' loop, the condition evaluates to 'false because 'i' is not less than 5, so we do not execute the code inside the loop. The result is that 'ourArray' will end up with no values added to it, and it will still look like '[]' when all of the code in the example above has completed running. Now, take a look at a 'do...while' loop: 

// const ourArray = [];
// let i = 5;

// do {
//     ourArray.push(i);
//     i++;
// } while (i < 5);

// console.log(ourArray); 

// In this case, we initialize the value of 'i' to 5, just like we did with the 'while' loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment 'i' before we ge tto the condition check. when we finally evaluate the condition 'i < '5' on the last line, wee that 'i' is now 6, wich fails the conditional check, so e exit the loop and are done. at the end of the avoe example, the value of 'ourArray' is '[5]'. essentially, a 'do..while' loop ensures that teh code inside the loop will run at least once. Let's try getting a 'do...while' loop to work by pushing values to an array.

// ##Replace Loops using Recursion
//Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the firsrt 'n' elements of an array to create the product of those elements. Using a 'for' loop, you could do this:

// function multiply(arr, n) {
//     let product = 1;
//     for(let i = 0; i < n; i++) {
//         product *= arr[i];
//     }
//     return product;
// }

// console.log(multiply([1, 2, 3], 3));    

// const n = 3;
// const anArray = [1, 2, 3];
// const notice = multiply(anArray, n - 1) * anArray[n - 1];
// console.log(notice);


// However, notice that 'multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]'.
// That means you can rewrite 'multiply' in terms of itself and never need to use a loop.

// function multiply(arr, n) {
//     if (n <= 0) {
//         return 1;
//     } else {
//         return multiply(arr, n - 1) * arr[n - 1];
//     }
// };

// The  recursive version of 'multiply' breaks doewn like this. In the base case, where 'n <= 0', it returns 1. for larger values of 'n', it calls itself, but with 'n = 1'. that function call is evaluated in The same way, calling 'multiply' again until 'n <= 0'. At this point, all the functions can return and the original 'multiply' returns the answer.


// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when 'n <= 0), otherwise they can never finish executing.






// ## Profile Lookup
// We have an array of objects representing different people in our contacts list.

// A 'lookUpProfile' function that takes 'name' and property ('prop') as arguments has been pre-written for you.

// The function should check if 'name' is an actual contact's 'firstName' and the given property ('prop') is a property of that contact.

// If both are true, then return the "value" of that property.

// If 'name' does not correspond to any contacts then return the string 'No such contact'.

// if 'prop' does not correspond to any valid properties of a contact found to match 'name' then return the string 'No such property'.


// Setup
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
//     // Only change code below this line
//     function lookUpProfile(name, prop) {
//         for (let i = 0; i < contacts.length; i++) {
//             if (contacts[i].firstName === name) {
//                 if (contacts[i].hasOwnProperty(prop)) {
//                     return contacts[i][prop];
//                 } else {
//                     return "No such property";
//                 }
//             }
//         } return "No such contact";
//     }
    
//     // Only change code above this line
// }

// lookUpProfile("Akira", "likes");

// ### Code Explanation
/*****************
 *  The 'for' loop runs, starting at the first object in the contacts list.
 *  If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the 'if' statement passes.
 *  Then, we use '.hasOwnProperty()' method (checks if there's a given propety and returns a boolean) with prop as an argument. If it's true, the value of prop is returned.
 * 
 */




// ## Generate Random Fractions with JavaScript
// Random numbers are useful for creating random behavior.

// JavaScript has a 'Math.random()' function that generates a random decimal number
//between '0' (inclusive) and '1' (exclusive). ( Thus 'Math.random()' can return a '0' but never return a 1.

// Note: Like Storing Values with the Assignment Operator, all function calls will be resolved
//before the 'return' executes, so we can 'return' the value of the 'Math.random()' function.




// ## Generate Random Whole Numbers with JavaScript

// It's great that we can gernerate random decimal number, but it's even more usefue if we use it to generate random whole numbers.

// 1. Use 'Math.random()' to generate a random decimal.
// 2. Multiply that random decimal by '20'.
// 3. Use another function, 'Math.floor()' to round the number down to its nearest whole number.

// Remember that 'Math.random()' can nver quite return a'1' and, because we're rounding down, it's impossible to actually get '20'. This technique will give us a whole number between '0' and '19'.

// Putting everything together, this is what our code looks like:

// Math.floor(Math.random() * 20);

// We are calling 'Math.random()', multiplying the result by 20, then passing the value to 'Math.floor()' function to round the value down to the nearst whole number.

// Use this technique to generate and return a random whole number between '0' and '9'.S





// ## Generate Random Whole Numbers within a Range
// Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

// to do this, we'll define a minimum number 'min' and a maximum number 'max'.

// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

// function randomRange(myMin, myMax) {
//    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// } 

// console.log(randomRange(5, 10));




// ## Use the parseInt Function
// The 'parseInt()' function parses a string and returns an integer. Here's an example:

// const a = parseInt("007");
// console.log(a);

// The above function converts the string '007' to the integer '7'. If the first character in the string can't be converted into a number, then it  returns 'NaN'.




// ## Use the parseInt Function with a Radix
// The 'parseInt()' function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

// The function call looks like:
//parseInt(string, radix);

// And here's an example:

// const a = parseInt("11", 2);
// console.log(a);

// The radix variable says that '11' is in the binary system, or base 2. This example converts the string '11' to an integer '3'.





// ## Use the Conditional (Ternary) Operator
// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

// The syntax is 'a ? b : c', where 'a' is the condition, 'b' is the code to run when the condition returns 'true', and 'c' is the code to run when the condition returns 'false'.

// The following function usea an 'if/else' statement to check a condition:

// function findGreater(a, b) {
//     if(a > b) {
//         return "a is greater";
//     } else {
//         return "b is greater or equal";
//     }

// }

// let a = 10;
// let b = 20;
// console.log(findGreater(a, b));

// This can be re-written using the conditional operator:

// function findGreater(a, b) { 
//     return a > b ? "a is greater" : "b is greater or equal";
// }

// let a = 10;
// let b = 20;
// console.log(findGreater(a, b));




// ## Use Multiple Conditional (Ternary) Operators
// In the previous challenge, you used a single conditional operator. You can also chain them together to check for multipel conditions.

// The following function uses 'if', 'else if', and 'else' statements to check multipel conditions:

// function findGreaterOrEqual(a, b) {
//     if (a === b) {
//         return "a and b are equal";
//     } else if (a > b) {
//         return "a is greater";
//     } else {
//         return "b is greater";
//     }
// };

// let a = 10;
// let b = 10;
// console.log(findGreaterOrEqual(a, b));

// The above function can be re-written using multiple conditional operators:

// function findGreaterOrEqual(a, b) {
//     return (a === b) ? "a and b are equal" 
//         : (a > b) ? "a is greater"
//         : "b is greater";
// }

// let a = 45;
// let b = 10;
// console.log(findGreaterOrEqual(a, b));

// It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown ablove. Using multipel conditional operators without proper indentation may make your code hard to read. For example:

// function findGreaterOrEqual(a, b) {
//     return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
// }

// let a = 45;
// let b = 10;
// console.log(findGreaterOrEqual(a, b));





// ## Use Recursion to Create a Countdown
// In a previous challenge, you learned how to use recursion to replace3 a 'for' loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with '1' through the number passed to the function.

// As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call iteself. It is a simple case where the return value is already known. there will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

// For example, say you want to write a recursive function that returns an array containing the numbers '1' through 'n'. This function will need to accept an argument, 'n', representing the final knumber. Then it will need to call itself with progressively smaller values of 'n' until it reaches '1'. You could write the function as follows:

// function countup(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countArray = countup(n - 1);
//         countArray.push(n);
//         return countArray;
//     }
// }
// console.log(countup(5));

// The value '[1, 2, 3, 4, 5]' will be displayed in the console.

// At first, this seems counterintuitive since the value of 'n' decreases, bute the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where 'n' is pushed into the array 'countup(n - 1)' has already been evaluated and returned '[1, 2, ..., n - 1]'.

// We have defined a bunction called 'countdown' with one parameter ('n'). The function should use recursion to return an array containing the integers 'n' through '1' based on teh 'n' parameter. If the function is called with a number less than 1, the function should return an empty array. for example, calling this funciton with 'n = 5' should return teh array '[5, 4, 3, 2, 1]'. Your function must use recursion by calling itself and must not use loops of any kind.

// function countdown(n){
    
//     if ( n < 1) {
//       return [];
//     } else {


//         const countArray = countdown(n - 1)
//         countArray.unshift(n);
//         return countArray;
//     }
//   }

//   console.log(countdown(5));

// ## Use Recursion to Create a Range of Numbers

// Contiuning from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem

// We have defined a function named 'rangeOfNumbers' with two parameters. The function should return a array of integers which begins with a number represented by the 'startNum' parameter and ends with a number represented by the 'endNum' parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both 'startNum' and 'endNum' are the same.

function rangeOfNumbers(startNum, endNum) {
    // base case:
    if (startNum === endNum) {
        return [startNum];
    //recursive case:
    } else if (startNum < endNum) {
        const numArr = rangeOfNumbers(startNum + 1, endNum - 1);
              numArr.unshift(startNum);
              numArr.push(endNum);
              return numArr;
    // unexpected case:
    } else {
        return [];
    }
};

console.log(rangeOfNumbers(1, 1));