// # Debugging is the process of going through your code, finding any issues, and fixing them.

const { sum, first } = require("lodash");

// Issues in code generally come in three froms: syntax errors that prevent your program from running, runtime errors whedre your code has unexpected behaior, or logical errors where your code doesn't do what you inteded.

// In this course, you'll learn hwo to use the JavaScript console to debug programs and prevent common issues before they happen.






// ## Use the JavaScript Console to Check the Value of a Variable

// Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging yhour JavaScript.

// You can find Developer tools in your Chrome's menu or Web Consolle in Firefox's menu. If you're using a diffenrent browser, or a mobile phone, we strongly recommenmd switching to desktop Firefox or Chrome.

// The 'console.log()' method, which "prints" the output of what's within its parentheses to the console, will likely be the moset helpful debugging tool. Placing it at strategic pints in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

// Here's an example to print the string 'Hello world!' to the console:

// console.log('Hello world!');

// Use the 'console.log()' method to print the value of the variable 'a' where noted in the code.

// let a = 5;
// let b = 1;
// a++;
// // Only change code below this line
// console.log(a)

// let sumAB = a + b;
// console.log(sumAB);





// ## Understanding the Differences between the freeCodeCamp and Browser Console

// You may have noticed that some freeCodeCamp challenges include their own console. This console behaves a little differently than the browser console.

// There are many methods to use with 'console' to output messages. 'log', 'warn', and 'clear' to name a few. The freeCodeCamp console will only output 'log' messages, while the brower console will output all messages. When you make changes to your code, the will automatically run and show the logs. The freeCodeCamp console is then cleared each time your code runs.

// First, open your browser console so yo can see the logs. To do that, you can right-click the freeCodeCamp navigation bar at the top and click 'inpect' on most browsers. Then find the 'console' tab in the window that opens.

// after that, use 'console.log' to log the 'output' variable. View the tow consoles to see the log. Finally, use 'console.clear' after your log to clear the browser console. View the difference in the two consoles.

// let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

// console.log(output);
// console.clear();






// ## Use typeof to Check the Type of a Variable

// You can use 'typeof' to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the from of a JavaScript Object Notation (JSON) object.

// Here are some examples using 'typeof':

// console.log(typeof "");
// console.log(typeof 0);
// console.log(typeof []);
// console.log(typeof {});

// In order, the console will display the stings 'string', 'number', 'object', and 'object'.

// JavaScript recognizes seven primitive (immutable) data types: 'Boolean', 'Null', 'Undefined', 'Number', 'String', 'Symbol'(new with ES6), and 'BigInt(new with ES2020), and one type for mutable items: 'Object'. Note that in JavaScript, arrays are technically a type of object.

// Add two 'console.log()' statements to check the 'typeof' each of the two variables 'seven' and 'three' in the code.

// let seven = 7;
// let three = "3";
// console.log(seven + three);
// // Only change code below this line
// console.log(typeof seven);
// console.log(typeof three)








// ## Catch Misspelled Variable and Function Names

// // The 'console.log()' and 'typeof' methods are the two primary ways to check intermediate values and types of program output. Now it's time to get into the common forms that bugs take. One syntaz-level issue that fast typers can commiserate with is the humble spelling error.

// Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist-and complain in the from of a reference error. JavaScript variable and function names are case-sensitive.

//Fix the two spelling errors in the code so the 'netWorkingCapital' calculation works. 

// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = receivables - payables;
// console.log(`Networking capital is: ${netWorkingCapital}`);






// ## Catch Unclosed Parentheses, Brackes, Braces and Quotes

// Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing parir. forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. Also, take care when nesting code blocks into others, such as adding a callback function asa an argument to a method.

// One way to avoid this mistake is as soon as the opening character is typed, immdiately include the closing match, then move the cursor back between them and continue coding. Fortunately, most modern code editors generate teh second half of the pair automatically.

// Fix the two pair errors in the code.

// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) => previous + current);
// console.log(`Sum of array values is: ${arraySum}`);





// ## Catch Mixed Usage of Singel and Double Quotes

// JavaScript allows the use of both single (''') and doulbe('"') quotes to declare string. Deciding which one to use generally comes down to personal preference, with some exceptions.

// Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't closde the string too early, which causes a syntax error.

// Here are some examples of mixing quotes:

// const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
// const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';


// Teh first two are correct, but the third is incorrect.

// Of course, it is onkay to use only one style of quotes. You can escape the quotes inside the string by using the backslash ('\') escape character:

// const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
// console.log(allSameQuotes);

// Fix the string so it eithere uses different quotes fo the 'href' value, or escape teh existing ones. Keep the double quote marks around the entire string.

// let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
// console.log(innerHtml);





// #Catch Use of Assignment Operator Instead of Equality Operator

//  Branching programs, i.e. ones that do different things if certain conditions are met, rely on 'if', 'else if', and 'else' statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.

// This logic is spke (in English, at least) as "if x equals y then ..." which can literally translate into code using the '=', or assignment operator. This leads to unexpected control flow in your program.

// As covered in previous challenges, the assignmetn operator ('=') in JavaScript assigns a value to a variable name. And the '==' and '===' operators check for equality (the triple '===' tests for strict equality, meaning both value and type are the same).

// The code below assigns 'x' to be 2, which evaluates as 'true'. Almost every value on its own in JvaScript evaluates to 'true', except what are known as the "falsy" values: 'false', '0', '""'(an empty string), 'NaN', 'undefined', and 'null'.

// let x = 1;
// let y = 2;
// if (x = y) {
//     console.log(`Code in 'if' statement is running with the x value: ${x}`)
// } else {
//     console.log(`Code in the 'else' statement is running because the if statement was falsty with a value of x: ${x}`)
// }

// In this example, the code block within the 'if' statement will run for any value of 'y', unless 'y' is falsy. The 'else' block, which we expect to run here, will not actually run.


// Fix the condition so the program runs the right branch, and the appropriate value is assigned to 'result'.

// let x = 7;
// let y = 9;
// let result = "to come";

// if( x === y) {
//     result = "Equal!";
// } else {
//     result = "Not equal!";
// }






// ## Catch Missing Open and Closing Parenthesis After a Function Call

// When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.

// The variables in teh following example are different:

// function myFunction() {
//     return "You rock!";
// }
// let varOne = myFunction;
// let varTwo= myFunction();

// console.log(`varOne output is: ${varOne}`);
// console.log(`varTwo output is: ${varTwo}`);

// console.log(`varOne typeof is: ${typeof varOne}`);
// console.log(`varTwo typeof is: ${typeof varTwo}`);

// Here 'varOne' is the function 'myFunction', and 'varTwo' is the sting 'You rock!'.

// Fix the code so the variable 'result' is set to the value returned from calling the function 'getNine'.

// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
// }

// let result = getNine();
// console.log(result);






// ## Catch Arguments Passed in the Wrong Order When Calling a Function

// Continuing the discussion on calling functions, the next bug to watch out for is when a functions's arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.

// The function 'raiseToPower' raises a base to an exponent. Unfortunately, it's not called properly-fix the code so the value of 'power' is the expected 8.

// function raiseToPower(b, e) {
//     return Math.pow(b, e);
// }

// let base = 2;
// let exp = 3;
// let power = raiseToPower(base, exp);
// console.log(power);









// ## Catch Off By One Errors When Using Indexing

// Off by one error (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means teh last index is always one less than the length of the item. If yo try to access an index equal to the length, the program may throw an "index out of range" reference error or print 'undefined'.

// When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if tehy are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors:

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//     console.log(alphabet[i]);
// }
// for (let j = 1; j < len; j++) {
//     console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//     console.log(alphabet[k]);
// }

// The first example here loops one too many times, and the second loops one too few times (missing the first index, 0). The third example is correct.

// Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.

// function countToFive() {
//     let firstFive = "12345";
//     let len = firstFive.length;
//     // Only change code below this line
//     for (let i = 0; i < len; i++) {
//     // Only change code above this line
//         console.log(firstFive[i]);
//     }
// }

// countToFive();






// Use Caution When Reinitializing Variables Inside a Loop

// Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particlarly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

// Printing variable values with each cycle of your loop by using 'console.log()' can uncover buggy behavior related to resetting, or failing to reset a variable.

// The following function is supposed to create a two-dimensional array with 'm' rows and 'n' columns of zeroes. Unfortunately, it's not producing the expected output because the 'row' varialbe isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes which look like [[0, 0], [0, 0], [0, 0]]'.

// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeros
//     let newArray = [];
//     let row = [];
//     for (let i = 0; i < m; i++) {
//         // Adds the m-th row into newArray

//         for (let j = 0; j < n; j++) {
//             // Pushes n zeroes into the current row to create the columns
//             row.push(0);
//         }
//         // Pushes the current row, which now has n zeroes in it, to the array
//         newArray.push(row);
//         // Resets row variable to '[]' so extrenous '0's are not added to each sub-array
//         row = []
//     }
   
//     return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);







// ## Prevent Infinite Loops with a Valid Terminal Condition

// The final topic is the dreaded infinite loop, Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping, Infinite loops are likely to freeze or crush the browser, and cause general program execution mayhem, which no one wants.

// There was an exampe of an infinite loop in the introduction to this section- it had no terminal condition to break out of the 'while' loop inside 'loopy()'. Do NOT call this function!

// function loppy() {
//     while(true) {
//         console.log("Hello, world!");
//     }
// }

// It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of icrementing or derementing it.

// The 'myFunc()' function contains an infinite loop because the terminal condition 'i != 4' will never evaluate to 'false' (and  bread the looping)-'i' is odd to start. Fix the comparison operator in the terminal condition so teh loop only runs for 'i' less than or equal to 4.

// function myFunc() {
//     for (let i = 1; i <= 4; i += 2) {
//         console.log("Still going!");
//     }
// }

// myFunc();