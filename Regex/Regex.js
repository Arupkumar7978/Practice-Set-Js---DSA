// Checks for the text hello with case - insensitvie  - "i" Flag used
let stringx = 'Hello World !';
let regex = /hello/i;
console.log(regex.test(stringx));

// The typical OR operator --> Here its checking for the text cat | dog with case sensitive
let myStr = 'Hello cat !';
let regexNew = /dog|cat/;
console.log(regexNew.test(myStr));

// The match is used to return the match text
let myStr2 = "Extract from here the word 'coding' ";
let regexMatch = /coding/;
console.log(myStr2.match(regexMatch));

// Here Flag "g" is used to macth all the global text and it should return all the match text and Flag "i" is used for case-Insensitive
let repeatedText = 'Repeat , Repeat, Repeat ';
let repeatRegex = /repeat/gi;
console.log(repeatedText.match(repeatRegex));

// Match the start and End of the text  [for start use the text with dot and vice-versa for end .]
let startText = 'AND 1 OR 2 OR ';
let regexStEd = /AN./;
console.log(startText.match(regexStEd));

// start of the word should b and end should be g and in between these two it should contain one letter that should be [aiu]
let bgRegex = /b[aiu]g/i;
// /[aeiou]/gi  ->  use this to find all the vowels in a sentance
let quote = 'BIG';
console.log(quote.match(bgRegex));

//  match a range of letters and numbers
let regexLetters = /[0-9a-z]/gi;
let myStr3 =
  "Extract from here the word 'coding . 1 and 2 are 3 of 14 and 5 are 6 of 7 and 8 is 9' ";
console.log(myStr3.match(regexLetters));

// match everything except /[condition]/
let myStr4 = "Extract from here the word 'coding 1 , 2, 3 ";
let matchExcept = /[^2-3aeiou]/gi;
console.log('Here :', myStr4.match(matchExcept));

let longText = 'gooooooooooaaaaaal!';
let regexP = /go*/gi;
console.log(longText.match(regexP));

// greedy and lazy macthing
let text = 'Titanic';
let greddyRegex = /t[a-z]*i/gi;
let lazyText = "<h1>Hey there I'm here</h1>";
let lazyMatch = /<.*?>/;
console.log(text.match(greddyRegex));
console.log(lazyText.match(lazyMatch));

// Find the criminal - who contains C that one is Criminal
let criminals = 'P1P2P3P4P5P6CCCP7P8P9';
let findRegex = /c+/i;
console.log(criminals.match(findRegex));

// match char using ^
let cond = 'AND 1 OR 2';
let regexPer = /^AND/;
let res = regexPer.test(cond);
console.log(res);

// match char using $ for end string
let cond1 = '(AND 1 OR 2)';
let regexPer2 = /^\($\)/; // ToDo need to correct
console.log(regexPer2.test(cond1));

// use /\w/g for [a-z][all digits][_underscore]
let myName = 'Arup Kumar Padhi_12345'; // length : 20 = name{14} + underscore{1} + digits{5} ==> Excluding spaces
let oneMega = /\w/g;
console.log(myName.match(oneMega));

// [NOTE] : use Uppercase W fro vice-versa , it will check for the spaces nd other spcial characters .

// short hand character class to match all the numbers  /\d/
let numbers = 'Arup kumar 123456';
let numRegx = /\d/g;
console.log(numbers.match(numRegx));

// short hand character class to match all the Non numbers  /\d/
let nonNumbers = 'Arup kumar 123456';
let nonRegx = /\D/g;
console.log(nonNumbers.match(nonRegx));

// Q1 . numbers should at the end and letters can be lower and upper case , min char length 2 and 2 letter name can not have numbers
let assume = 'Arup7978';
let regexForAssume = /^[A-Za-z]{2,}\d*$/;
console.log(regexForAssume.test(assume));
