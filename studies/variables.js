/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  
 * Variables are named identifiers that can point to values of a particular type, 
 * like a Number, String, Boolean, Array, Object or another data-type.  
 * Variables are called so because once created, we can CHANGE the value 
 * (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) 
 * for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization 
 * (or assignment).
 */

// 1. DECLARATION //

var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT 
 * initialized it to anything.
 */
 
console.log(myName); // prints => undefined

// 2. INITIALIZATION OR ASSIGNMENT //

myName = 'john';
console.log(myName); // prints => john

// 3. RE-ASSIGNEMNT //

myName = 'joe';
console.log(myName); // prints => joe

/* NOTE: We can assign and re-assign anything to a variable - we cannot do this with 
constants */

// var myVariable = 1;
// var myVariable = true;
// myVariable = "someString";

// 4. VAR, LET, CONST //

// var name = 'Becca';
// let age = 32;
// const hometown = 'Philadelphia';

/* Var, let and const are all variables that have different properties. They hold values.
* Var, is a re-assignable variable. Can be hoisted.
* Let, is a re-assignable variable. Can NOT be re-declared. Can NOT be hoisted.  
* Const, is NOT a re-assignable variable. Can NOT be hoisted.
*/

var name = 'Becca';
name = 'Rebecca'; // allowed //
console.log(name);

let myAge = 32;
myAge = 33; // allowed //
console.log(myAge);

const myHometown = 'Philadelphia';
console.log(myHometown);
// myHometown = 'New Orleans'; // not allowed, TypeError thrown // 


// 5. HOISTING //

/* Hoisting is when variables and function declarations are moved (hoisted) to the top of 
* their scope before the code is executed. 
*
* Var variables are hoisted to the top of their scope and initialized with a value 
* of undefined.
*
* Let declarations are hoisted to the top and are not initialized. If you try to use 
* a let variable before declaration, a reference error will be thrown.
* 
* Const declarations are hoisted to the top, and are not initialized, just like let.
*/

