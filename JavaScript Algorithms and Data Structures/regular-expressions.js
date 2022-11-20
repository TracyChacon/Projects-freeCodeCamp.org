// # Regular expressions, ofter shortened to "regex" or "regexp", are patterns that help programminers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more compleex, flexible matches.

const { once } = require("lodash");

// In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.






// ## Using the Test Method

// Regular expressions are used in programming languages to match parts of strings. you create patterns to help you do that matching.

// If yo want to find the word 'the' in  the string 'The dog chased the cat', you could use the following regular expression: '/the/'. Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the '.test()' method. The '.test()' method takes the regex, applies it to a string (which is placed inside the parentheses), and returns 'true' or 'false' if your pattern finds something or not.

// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// const regexOutput = testRegex.test(testStr);

// console.log(testRegex, regexOutput);

// The 'test' method here returns 'true'.

// Apply the regex 'myRegex' on the string 'myString' using the '.test()' method.

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result);





// ## Match Literal Strings

// In the last challenge, you searched for the word 'Hello' using the regular expression '/Hello/'. that regex searched for a literal match of the string 'Hello'. Here's another example searching for a literal match of the string 'Kevin':

// let testStr = "Hello, my name is Kevin.";
// let testRegex = /Kevin/;
// testRegex.test(testStr);

// // This 'test' call will return 'true'.

// // Any other forms of 'Kevin' will not match. example, the regex '/Kevin/' will not match 'kevin' or 'KEVIN'.

// let wrongRegex = /kevin/;
// const result = wrongRegex.test(testStr);

// console.log(result);

// This 'test' call will return 'false'.

// A future challenge will show how to match those other forms as well.

// Complete the regex 'waldoRegex' to find '"Waldo"' in the string 'waldoIsHiding' with a literal match.

// let waldoIsHiding = "Somehwere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);

// console.log(result);






// ## Match a Literal String with Different Possibilities

// Using regexes like '/coding/', your can look for the pattern 'codeing' in another string.

// This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the 'alternation' or 'OR' operator: '|'.

// This operator matches patterns either before or after it. For example, if you wanted to match the strings 'yes' or 'no', the regex you want is '/yes|no/.

// You can also search for more than just two patterns. You can do this by adding more patterns with more 'OR' operators separating them, like '/yes|no|maybe/'.

// Complete the regex 'petRegex' to match the pets 'dog', 'cat', 'bird', or 'fish'.


// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Chance this line 
// let result = petRegex.test(petString);
// console.log(result);






// ## Ignore Case While Matching

// Up until now, you've looked at regexes to do literal matches of strings. but sometimes, you might want to alos match case of strings. But sometimes, you might want to also match case differences.

// Case (or sometimes letter case) is the difference between uppercase letterss and lowercase letters. Examples of uppercase are 'A', 'B', and 'C'. Examples of lowercase are 'a', 'b', and 'c'.

// You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case-the 'i'flag. You can use it by appending it to the regex. An example of using this flag is '/igonorecase/i. This regex can match the strings 'igonorecase', 'igNoreCase', and 'IgonoreCase'.

// Write a regex 'fccRegex' to match 'freeCodeCamp', no matter its case. Your regex should not match any abbreviations or variations with spaces.

// let myString = 'freeCodeCamp';
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);

// console.log(result);






// ## Extract Matches

// So far, you have only been checking if a pattern exits or not within a string. You can also extract the actual matches you found with the '.match()' method.

// To use the '.match()' method, apply the method on a string and pass in the regex inside the parentheses.


// Here's an example:

// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// const str = ourStr.match(ourRegex);

// console.log(str);

// Here the first 'match' would return '["Hello"]' and the second would return '["expressions"]'.

// Note that the '.match' syntax isthe "opposite" of the '.test' method you have been using thus far:

// const theMatch = 'string'.match(/regex/);
// const theTest = /regex/.test('string');

// console.log(theMatch, theTest);

// Apply the '.match()' method to extract the string 'coding'.

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
// console.log(result);






// ## Find More Than the First Match

// So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);

// Here 'match' would return '["Repeat"]'.

// To search or extract a pattern more than once, you can use the global search flag: 'g'.

// let repeatRegex = /Repeat/g;
// result = testStr.match(repeatRegex);

// console.log(result);

// And here 'match' returns the value '["Repeat", "Repeat", "Repeat"]

// Using the regex 'starRegex', find and extract both 'Twinkle' words from teh string 'twinkleStar'.

// Note
// You can have multiple flags on your regex like '/search/gi'

// let twinkleStar = "Twinkle, Twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex);

// console.log(result);





// ## Match Anything with Wildcard Period

// Sometimes you won't (or don't need to) know the exact caracters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: '.'

// Teh wildcard character '.' will match any one character. The wildcard is also called 'dot' and 'period'. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match 'hug', 'huh', 'hut', and 'hum', you can use the regex '/hu./' to match all four words.

// let humStr =