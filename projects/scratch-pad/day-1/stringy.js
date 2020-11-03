// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //use .length property
    
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //use toLowerCase property
return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //use to UpperCase property
return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
let splitString = string.toLowerCase().split(" ");
//declare and assign new var called splitString
//we will split w/ a space separating as well as use toLowerCase property to make string lowercase
return splitString.join("-");
//then use join property to join the strings back together w/ a dash

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //given string and char, return true if string begins w/ char, false if not
    //case insensitive
    if(string[0].toLowerCase().includes(char[0].toLowerCase())){
        //compare index 0 of string and index 0 of char
        //make sure that both are to either upper or lower case so when we compare it is exactly the same
        //use the .inlcudes property to see if the string at index 0 contains the char at index 0
        return true;
        //return true if this is true
    } else {
        return false;
        //otherwise return false
    }

    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
     //given string and char, return true if string ends w/ char, false if not
    //case insensitive
if(string[string.length - 1].toLowerCase().includes(char[0].toLowerCase())){
     //compare last index of string and index 0 of char
        //make sure that both are to either upper or lower case so when we compare it is exactly the same
        //use the .inlcudes property to see if the last index of string at index contains the char at index 0
    return true;
    //return true if this is true
} else {
    return false;
    //return false if not
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //we can concat with the + operator or template literals
return `${stringOne}${stringTwo}`;
//concat w/ template literals


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
 return args.join("");
//use the .join property

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //compare two strings to find longest string
    //we need to compare the lengths of both
    if(stringOne.length > stringTwo.length){
        //use length property to compare the strings
        return stringOne;
        //return stringOne if it is greater in length than stringTwo
    }else{
        return stringTwo;
        //it it the length is not greater than stringOne, return stringTwo;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //given 2 strings, if first is higher in alphabet return 1
    //if second is higher in alphabet, return -1
    //if equal, return 0
    //char codes: a = 97, b = 98, c = 99
    if(stringOne > stringTwo){
        return -1;
    } else if(stringOne < stringTwo){
        return 1;
    } else if(stringOne === stringTwo){
        return 0;
        //return 0
    }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

  //given 2 strings, if first is lower in alphabet return 1
    //if second is lower in alphabet, return -1
    //if equal, return 0
    //char codes: a = 97, b = 98, c = 99
    if(stringOne > stringTwo){
        return 1;
    } else if(stringOne < stringTwo){
        return -1;
    } else if(stringOne === stringTwo){
        //if equal
        return 0;
        //return 0
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
