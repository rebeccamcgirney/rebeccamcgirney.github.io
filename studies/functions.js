/*
 * FUNCTIONS:
 *
 * 0. Functions are predefined commands for performing an action. They are reusable 
 * blocks of code that accept and process inputs, and returns a new value. We use 
 * functions so we can reuse the code. We can define the code once, and use it 
 * multiple times. We can use the same code over and over again with different 
 * arguments, which produce different results.
 *
 * There are 4 parts to creating the function:
 *
 * 0a. The function name (we should name this something related to what it will do).
 *
 * 0b. The parameters, which are named variables listed as a part of the function, are 
 * essentially place holders. Parameters are initialized to the values of the arguments
 * supplied, and arguments are the actual values passed to the function when it is 
 * invoked. Functions can take as many arguments as needed or they can take none.
 * Arguments can be any data type. 
 *
 * 0c. The function body, which is where the code is executed.
 * 0d. The Return Statement, which is where a value is returned. Just like arguments,
 * the return statement is also optional, it may not need one.
 * The function call is the process we use to instruct the computer to perform the action,
 * This usually happens outside of the function. 
 * Not all function calls require arguments.
 */
 
// 1. NAMED FUNCTION //

/* A named function is a function that has a function name. They can either be declared
* in a statement or used in an expression.
 */
 
function multiply(num1, num2) { // declaring function 
  return num1 * num2;
}
multiply(3,4);  // returns 12 // invoking function
multiply(4,5); // returns 20 // invoking function
multiply(5,6); // returns 30 // invoking function

// 2. ANONYMOUS FUNCTION //

/* An anonymous function is a function that does NOT have a function name. Only function 
* expressions are anonymous. Function declarations must have a name. They are usually
* written while they are being passed to functions.
*/

let introduce = function () {
    console.log('Hello, my name is Anonymous.'); // prints 'Hello, my name is Anonymous'
};
introduce();

// 3. CALLBACK FUNCTION //

/* A callback function is a function passed into another function as an argument. It 
* is then invoked or called inside the outer function to complete an action.
*/

let numbers = [12, 32, 73, 14, 54, 67, 74, 81, 99, 105];
function isOddNumber(number) {
    return number % 2;
}
const oddNumbers = numbers.filter(isOddNumber); // prints [ 73, 67, 81, 99, 105 ]
console.log(oddNumbers); 

