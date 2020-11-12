/*
 * DATA TYPES:
 *
 * 0. JavaScript has built-in data structures with different properties.  
 * These properties can be used to build other data structures. 
 * There are two kinds of Data Types. There are primitive types, which are simple,
 * and there are complex types, which as the name states, complex.
 *
 */

// 1. PRIMITIVE DATA TYPES //

/* Primitive data types DO NOT hold, collect or aggregate to other values, 
 * they are immutable. They return new values without altering the original value.
 * When assigning or passing, they are copied from one value to the next.
 */

 var x = 7;
 var y = x; // value stored in x is copied to y
 
 y = 8; // changing value at y does not effect what is stored in x

// 1a. NUMBER //

/* Numbers are any numerical value. They can be positive, negative or decimals, and 
* do not need quotes to function properly.
*/

var number = 13; // this is a number 

// 1b. STRING //

/* Strings are a sequence of characters wrapped in quotes, with zero or more characters.
* They need quotes to function properly. Characters in a string can be accessed using 
* bracket notation.
*/

var weather = "cloudy"; // this is a string
console.log(weather); //prints "cloudy" to console
console.log(weather[3]); // prints "u" to console as we are accessing index number 4

// 1c. BOOLEAN //

/* Booleans are values based on logic. They can only be true or false. We can think 
* of them like an on/off switch. They are mostly used to decide which sections of code 
* to execute or repeat. They can be used with comparison operators. 
* They must be lowercase and DO NOT need quotes to function properly.
*/

Boolean(500 < 1000); // returns true
Boolean(500 > 1000); // returns false
Boolean(1000 === 500); // returns false 

// 1d. UNDEFINED //

/* Undefined is a variable that has not been assigned a value, if the variable has 
* just been declared, or if it does not have the correct value.
*/

var color;
console.log(color); // prints undefined to console (not assigned value)

var color;
// console.log(name); // prints undefined to console (incorrect value)

// 1e. NULL //
/* Null is the absence of any object value. It is intentional.  
* The variable is set to have no value.
*/

var favColor = null;
console.log(favColor); // prints null to console

// 1f. NAN //
/* NaN means not a number. It usually represents an error as a result of an incorrect 
* or an undefined mathematical operation.
*/

('purple' / 3); // prints NaN to console (purple not a number)

// 1g. INFINITY AND -INFINITY //
/* Positive infinity represents a special value that’s greater than any 
* other numerical value. 
* It is a result when dividing by zero.
*/

console.log( 5 / 0 ); // prints infinity to console (dividing by zero)


// 2. COMPLEX DATA TYPES //

/* Complex data types DO aggregate to other values, which makes them indefinite in size.
 * When assigning or passing, they are copied by reference.
 */
 

// 2a. ARRAY //
/* Arrays are list like data used to store similar values. Common values include numbers, 
* booleans and strings. Arrays can even store other arrays. The values are stored 
* inside a pair of brackets []. Arrays are ordered with a numeric index starting at zero,
* and can be manipulated with various methods.
*/

var hobbies = ['photography', 'biking', 'reading'];
console.log(hobbies); // prints strings from hobbies array to console
// we can also manipulate arrays with different methods =>
hobbies.pop(); // .pop() removes reading from end of array
hobbies.unshift('cooking'); // .unshift() adds cooking to front of array
console.log(hobbies);

// 2b. OBJECT //
/* Objects collect data in the form of key value pairs, which are properties. 
* The key value pairs are stored inside of a pair of curly braces {}.
* Just like arrays, there are various methods that can be used on objects.
*/

var person = {
  firstName: 'Becca',
  lastName: 'McGirney',
  age: 32,
  city: 'New Orleans',
  state: 'Louisiana',
};
console.log(person); // prints key value pairs to console
// we can also manipulate objects with different methods =>
person.favFood = "tacos"; // adds favFood key value pairs to object
delete person.age; // removes age key value pair from object
console.log(person); // prints key value pairs to console (age removed, favFood added)


// 2c. FUNCTION //
/* Functions are predefined commands for performing acitions, as well as reusable blocks
* of code that accept and process inputs and returns a new value. 
* A function is declared with the function keyword, followed by a name, followed by 
* parentheses (). Inside the parentheses, are the function parameters or arguments, 
* which are optional. They can take none or as many arguments as required. 
* In order for the code to be executed, the function body must be inside a pair of 
* curly brackets {}. When the function is called, it instructs the computer to 
* perform the action previously declared. 
* Functions can optionally have return statements. The return statement will pull a 
* value from a function call. If there is no return in the function, it will 
* be undefined.
*/

function add(num1, num2) {
 return num1 + num2;
}
add(5,4); // prints 9 to console
add(10,8); // prints 18 to console
add(20,16); // prints 36 to console


// 3. COPY BY VALUE AND COPY BY REFERENCE //

/* Javascript is always pass by value, and has five data types that are passed by value: 
 * booleans, null, undefined, strings, and numbers. Changing the value of a variable NEVER
 * changes the underlying primitive or object, it just points the variable to a new 
 * primitive or object.
 */
 
var color1 = 'blue'; // color var created and given value 'blue'
var newColor = color1; // newColor var created and given copy of color's value
color1 = 'red'; // change value of color to 'red'
console.log(color1); // prints 'red'
console.log(newColor); // prints 'blue'

/*
 * When a variable refers to an object or array, the "value" is a reference to the object.
 * There are 3 data types that are passed by reference: array, function, and object. 
 * Changing a property of an object referenced by a variable DOES change the underlying 
 * object.
 */
 
 var myName = { // var myName created and given value of object
  firstName1: 'Becca' // firstName has value of "Becca"
};
var identity = myName; // var identity created and points to myName
myName.firstName1 = 'Rebecca'; // change value of firstName property
console.log(myName.firstName1); // prints "Rebecca", the new value
console.log(identity.firstName1); // prints "Rebecca", the new value, 
                                  //as identity only points to myName
                                  
