// # ES6
//ECMAScript, or ES, is a standardized version of JavaScript. because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.

// Most of the JavaScript you've learned up to this point was in ES5 (ECMAScript5), which was finalized in 2009. While yo can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year.

//ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules.




// ## Compare Scopes of the var and let Keywords
// If you are unfamiliar with 'let', check out this challenge about the difference between 'let' and 'var'.

// When you declare a variable with the 'var' keyword, it is declared globally, or locally if declared inside a function.


// The 'let' keyword keyword behaves similarly, but with some extra features. When you declare a variable with the 'let' keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

// For example:

// var numArray = [];
// for (var i = 0; i < 3; i++) {
//     numArray.push(i);
// }
// console.log(numArray);
// console.log(i);

// Here the console will display the values [0, 1, 2] and 3.

// With the 'var' keyword, 'i' is declared globally. So when 'i++' is executed, it updates the global variable. This code is similar to the following:

// var numArray = [];
// var i;
// for (i = 0; i < 3; i++) {
//     numArray.push(i);
// }
// console.log(numArray);
// console.log(i);

// Here teh console will display the values '[0, 1, 2]' and '3'.

// This behavior will cause problems if you were to create a function and strore it for later use inside a 'for' loop that use the 'i' variable. This is because the stored function will always refer to the value of the updated global 'i' variable.

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function() {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());


// Here the console will display the value '3'.

// As you can see, 'printNumTwo()' prints 3 and not 2. This is because the value assigned to 'i' was updated and the 'printNumTwo()' returns the global 'i' and not the value 'i' had when the function was created in the for loop. The 'let' keyword does not follow this behavior:

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function() {
//             return i;
//         }
//     };
// }
// console.log(printNumTwo());
// console.log(i);

// Here the console will display the value '2', and the error that i is not defined'.

// 'i' is not defined because it was not declared in teh global scopoe. It is only declared within the 'for' loop SVGPatternElement. 'printNumTwo()' returned the correct value because three different 'i' variables with unique values (0, 1, and 2) were created by the 'let keyword within the loop statement.




// ## Mutate an Array Declared with const

// If your are unfamiliar with 'const', check this challenge about the con 'const' keyword.

// The 'const' declaration has many use cases in dodern JavaqScript.

// Some developers prefer to assign all their variables using 'const' by default, unless they know they will need to reassign the value. Only in that case, they use 'let'.

// However, it is important to understand tha objects (including arrays and functions) assigned to a variable using 'const' are still mutable. Using the 'const' declaration only prevents reassignment of the variable identifier.

// const s = [ 5, 6, 7];
// // s = [1, 2, 3];
// s[2] = 45;
// console.log(s);

// 's = [1, 2, 3]' will result in an error. After commenting out that line, the 'console.log' will display the value '[5, 6, 45]'.

// As you can see, you can mutate the object '[5, 6, 7]' itself and the variable 's' will still point the altereed array '[5, 6, 45]'. Like all arrays, the array elements in 's' are mutable, but because 'const' was used, you cannot use the variable identifier 's' to point to a different array using the assignment operator.





// ## Prevent Object Mutation

// As seen in teh previous challenge, 'const' declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function 'Object.freeze' to prevetn data mutation.

// Any attempt at changing the object will rejected, with an error thrown if the script is running in strict mode.

// let obj = {
//     name: "FreeCodeCamp",
//     review: "Awesome"
// };

// Object.freeze(obj);
// obj.review = "bad";
// obj.newProp = "Test";
// console.log(obj);

// The obj.review' and 'obj.newProp' assignments will result in error, because our editor runs in strict mode by default, and the console will  display the value '{name: "FreecodeCamp", review: "Awesome"}'.


