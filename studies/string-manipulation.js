 /*
 * STRING MANIPULATION:
 *
 * 0. String manipulation is the action of the fundamental operations on strings, 
 * This includes creating them, as well as manipulating them with various methods.
 * There is a lot we can do with strings. Some more common methods include: 
 * Concatenation of strings, splitting strings, and comparing strings. 
 * There are endless possibilites.
 */

// 1. STRING CONCATENATION //
        // concat() //
        
/* String concatenation is when two or more strings are joined together and returns
* a new joined string. This method does not change the existing strings.
*/

var string1 = 'Hi, my name is Becca'
var string2 = 'I like tacos'
console.log(string1 + " " + string2); //prints both strings combined

// Another example:

var string1 = 'My name is Becca';
var string2 = 'I like art, music and reading';
var string3 = 'I also like cooking and biking';
console.log(string1.concat(string2, string3)); // prints all three strings combined.

// Another example using template literals:

var string1 = 'My name is Becca'
var string2 = 'I like dogs'
console.log(`${string1} ${string2}`); // prints both strings combined as in ex. 1
 

// 2. STRING SPLITTING //
       // split() //

/* String splitting is a method used to split a string into an array of substrings.
* This returns a new array with the strings. It does not change the original string.
* If an empty string ("") is used as the separator, the string is split between 
* each character. If using (" ") with a space, each word is returned.
*/

var string = 'The sky is blue.';
console.log(string.split()); // prints [ 'The sky is grey.' ]

// Another example using (" ") w/ space:

var string = 'The sky is blue.';
console.log(string.split(" ")); // prints [ 'The', 'sky', 'is', 'grey.' ]

// Another example using ("") w/ out space:

var string = 'The sky is blue.';
console.log(string.split("")); 
 
 /* prints [
 
  'T', 'h', 'e', ' ',
  's', 'k', 'y', ' ',
  'i', 's', ' ', 'b',
  'l', 'u', 'e', '.'
]

*/


// 3. STRING SLICE //
     // slice() //

/* In Javascript, the slice() method extracts a part of a string and returns 
* the extracted part in a new string. This method takes 2 parameters: the starting
* position, and the ending position of where we want to extract to and from. The
* ending position we choose is not included in the new string.
*/

var vegtables = "avocado, onion, cilantro";
var toppings = vegtables.slice(8, 14); // start at index 8 and stop at 14
console.log(toppings); // onion is printed to console


// 4. STRING REPLACEMENT //
       // replace() //

/* String replacement is a method used to replace one value with another value
* within a string This method is case sensitive and replaces only the first
* match found.
*/

string2 = "It is sunny outside.";
var replacement = string2.replace("sunny", "raining"); // replace sunny w/ raining
console.log(replacement);// "It is raining outside."


// 5. STRING CHARACTER EXTRACTING  //
          // charAt() //

/* The charAt method is used to extract a particular character from a string. We
* are able to choose which index we are extracting the character from.
*/

var str = "brontosaurus";
str.charAt(0);  // returns b  
str.charAt(5) // returns o


// 6. STRING CAPITALIZATION  //
// toUpperCase() + toLowerCase() //

/* In Javascript we are able to convert strings to upper and lower case with this 
* particular method. It changes the existing string.
*/

var text1 = "It is almost Thanksgiving."; // string
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
console.log(text2); // prints "IT IS ALMOST THANKSGIVING."

var text3 = "It is almost Thanksgiving."; // string
var text4 = text3.toLowerCase();  // text2 is text1 converted to upper
console.log(text4); // prints "it is almost thanksgiving."

