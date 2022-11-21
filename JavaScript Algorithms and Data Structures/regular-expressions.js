// # Regular expressions, ofter shortened to "regex" or "regexp", are patterns that help programminers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more compleex, flexible matches.

const { join } = require("lodash");

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
// multiple results

// So far, you have only been able to extract or search a pattern once.

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// let result = testStr.match(ourRegex);

// Here 'match' would return '["Repeat"]'.

// To search or extract a pattern more than once, you can use the global search flag: 'g'.

// let repeatRegex = /Repeat/g;
// result = testStr.match(repeatRegex);

// console.log(result);

// And here 'match' returns the value '["Repeat", "Repeat", "Repeat"]

// Using the regex 'starRegex', find and extract both 'Twinkle' words from the string 'twinkleStar'.

// Note
// You can have multiple flags on your regex like '/search/gi'

// let twinkleStar = "Twinkle, Twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex);

// console.log(result);





// ## Match Anything with Wildcard Period

// Sometimes you won't (or don't need to) know the exact caracters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: '.'

// Teh wildcard character '.' will match any one character. The wildcard is also called 'dot' and 'period'. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match 'hug', 'huh', 'hut', and 'hum', you can use the regex '/hu./' to match all four words.

// let humStr = "I'll hum a sont";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// const humResult = huRegex.test(humStr);
// const hugResult =  huRegex.test(hugStr);

// console.log(humResult, hugResult);

// Both of these 'test' calls would return 'true'.

// Complete the regex 'unRegex' so that it matches the strings 'run', 'sun', 'fun', 'pun', 'nun', and 'bun'. Your regex should use the wildcard character.

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/g; // Change this line
// let tResult = unRegex.test(exampleStr);
// let mResult = exampleStr.match(unRegex);

// console.log(tResult, mResult);






// ## Match Single Character with Multiple Possibilites

// You learned how to match literal patterns (/literal/) and wildcard character ('/./'). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

// You can search for a literal patter with some flexibility with character classes. Character classses allow you to define a group of characters you wish to match by placing them inside square ('[' and ']') brackets.

// For wxample, you want to match 'bag', 'big', and 'bug' but not 'bog'. You can create the regex '/b[aiu]g/' to do this. The '[aiu]' is the character class that will only match the characters 'a', 'i', or 'u'.





// let bigStr = 'big';
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;

// let bigResult = bigStr.match(bgRegex);
// let bagResult = bagStr.match(bgRegex);
// let bugResult = bugStr.match(bgRegex);
// let bogResult = bogStr.match(bgRegex);

// console.log(bigResult);
// console.log(bagResult);
// console.log(bugResult);
// console.log(bogResult);

// In order, the four 'match' calls would return the values '["big"]', '["bag"]', '[bug]', and 'null'.

// Use a character class with vowels ('a', 'e', 'i', 'o', 'u') in your regex 'vowelRegex' to find all the vowels in the string 'quoteSample'.

// Note: Besure to match both upper-and lowercase vowels.

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig;
// let result = quoteSample.match(vowelRegex);

// console.log(result);






// ## Match Letters of the Alphabet

// You saw how you can use character sets to specigy a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, htere is a built-in feature that mamkes this short and simple.

// Inside a character set, you can define a range of characters to match using a hyphen character: '-'.

// For example, to match lowercase letters 'a' through 'e' yo uwould us '[a-e]'.

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;

// const catResult = catStr.match(bgRegex);
// const batResult = batStr.match(bgRegex);
// const matResult = matStr.match(bgRegex);

// console.log(catResult);
// console.log(batResult);
// console.log(matResult);

// In order, the three 'match' calls would return the values '["cat"]', '["bat"]', and 'null'.

// Match all the letters in the string 'quoteSample'.

// Note: Be sure to match both uppercase and lowercase letters.

// let quoteSample ="The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

// console.log(result);





// ## Match Numbers and Letters of the Alphabet

// Using the hyphen ('-') to match a range of characters is not limited to letters. It also works to match a range of numbers.

// for example, '/[0-5]/' matches any number between '0' and '5', including the '0' and '5'.

// Also, it is possible to combine a range of letters and numbers in a single character set.

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// const result = jennyStr.match(myRegex);
// console.log(result);

// Create a single regex that matches a range of letters between 'h' and 's', and a range of numbers between '2' and '6'. Remember to include the appropriate flags in the regex.

// let quoteSample = "blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig;
// let result = quoteSample.match(myRegex);
// console.log(result);





// ## Match singel Characters Not specified

// So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of dcharacters sets are called negated characters sets.

// To create a negated character set, you place a caret character ('^') agter the opening bracket and before the characters yo do not want to match.

// For example, '/[^aeiou]/gi' matches all characters that are not a vowel. Note that characters like '.', '!', '[', '@', '/' and white space are matched-the negated vowel characters set only excludes the vowel characters.

// Create a single regex that matches all characters that are not a number or a vowel. remember to include the appropriate flags in the regex.

// let quoteSample = "3 blind mice.";
// let myRegex = /[^1-9aeiou]/gi;  // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// console.log(result);





// ## Match Characters that Occur One or More Times

//Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occures at least once, and may be repeated.

// You can use the '+' character to check if that is the case. Remember, teh character or patter has to be present consecutively. That  is, the character has to repeat one ager the other.

// For example, '/a+/g' would find one match in 'abc' and return '["a"]'. Because of the '+', it would also find a single match in 'aabc' and return '["aa"]'.

// If it were instead checking the string 'abab', it would find two matches and return '["a", "a"]' because the 'a' characters are not in a row-there is a 'b' between them. Finally, since there is no 'a' in the string 'bcd', it wouldn't find a match.

// You want to find matches when the letter 's' occurs one or more times in 'Mississippi'. Write a regex that uses the '+' sign.

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g;
// let result = difficultSpelling.match(myRegex);

// console.log(result);





// ## Match Characters that Occur Zero or More Times

// The last challenge used the plus '+' sign to look for characters that occur one or more times. Theres's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or start: '*'.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut felling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// let soccerWordResult =  soccerWord.match(goRegex);
// let gPhraseResult = gPhrase.match(goRegex);
// let oPhraseResult = oPhrase.match(goRegex);

// console.log(soccerWordResult);
// console.log(gPhraseResult);
// console.log(oPhraseResult);

// In order, the three 'match' calls would return the values '["goooooooo"]', '["g"]', and 'null'.

// For this challenge, 'chewieQuote' has been initialized as the string 'Aaaaaaaaaaaaaaaarrrgh!' behind the scenes. Create a regex 'chewieRegex' that uses the '*' character to match an uppercase 'A' character immediately followed by zero or more lowercase 'a' characters in 'chewieQuote'. Your regex does not need flags or character classes, and it should not match any of the other quotes.

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// // Only change code below this line
// let chewieRegex = /Aa*/g;
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);

// console.log(result);






// ## Find Characters with Lazy Matching

// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part the the string that satisfies the regex pattern.

// You can apply the regex '/t[a-z]*i/' to the string '"titanic"'. This regex is basically a pattern that starts with 't', ends with 'i', and has some letters in between.

// Regular expressions are by default greedy, so the match would return '["titani"]'. It finds the largest sub-string possible to fit the pattern.

// However, you can use the '?' character to change it to lazy matching. '"titanic"' matched against the adjusted regex of '/t[a-z]*?i/' returns '["ti"]'.

// Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

// Fix the regex '/<.*>/' to return the HTML tag '<h1>' and not the the text '"<h1>Winter is comming</h1>"' Remember the wildcard '.' in a regular expression matches any character.

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);

// console.log(result);





// ## Find One or More Criminals in a Hunt

// Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

// Here's an example to review how to do this:

// The regex '/z+/' matches the letter 'z' when it appears one or more times in a row. It would find matches in all of the following strings: 

// "z"
// "zzzzzz"
// "ABCzzzz"
// "zzzzABC"
// "abczzzzzzzzzzzzzzzzzzzzzabc"

// But it does not find matches in the following strings since there are no letter 'z' characters:

// ""
// "ABC"
// "abcabc"

// Write a greedy regex that finds one or more criminals within a group of other people. A crimainal is represented by the capital letter 'C'.

// let strC1 = "P1P5P4CCCcP2P6P3";
// let strC2 = "P6P2P7P4P5CCCCCP3P1"
// let strC3 = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3";
// let reCriminals = /C+/; // Change this line

// let resultC1 = strC1.match(reCriminals);
// let resultC2 = strC2.match(reCriminals);
// let resultC3 = strC3.match(reCriminals);

// console.log(resultC1);
// console.log(resultC2);
// console.log(resultC3);





// ## Match Beginning String Patterns

// Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

//In an earlier challenge, you used the caret character ('^') inside a character set to create a negated character set in the form '[^thingsThatWillNotBeMatched]'. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// let secondRegex = /Ricky/;

// let resultFirstTest = firstRegex.test(firstString);

// const resultFirstMatch = firstString.match(firstRegex);
// const resultSecondMatch = firstString.match(secondRegex);

// let notFirst = "You can't find Ricky now.";
// const resultNotFirstTest = firstRegex.test(notFirst); 

// // console.log(resultFirstMatch);
// // console.log(resultSecondMatch);
// console.log(resultNotFirstTest);

// The first 'test' call would return 'true', while the second would return 'false'.

// Use the caret character in a regex to find 'Cal' only in the beginning of the string 'rickyAndCal'.


// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);






// ## Match Ending String Patterns

// In the last challeng, yo learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

// You can search the end of strings using the dollar sign character '$' at teh end of the regex.