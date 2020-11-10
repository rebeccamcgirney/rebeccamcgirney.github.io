/*
 * OPERATORS:
 *
 * 0. JavaScript has various differnt operators that process and return new data.
 * These all work in different ways. There are unary and binary operators, and 
 * one special ternary operator, which is conditional. Operators have operands, 
 * which are the values that operators act on. These are like arguments. Unary 
 * operators work with one operand, binary operators with two operands, and 
 * ternary with three operands.
 */

// 1. ASSIGNMENT OPERATORS //

/* Assignment operators are binary operators. They assign a value to the left 
* operand based on the value of the right operand. Compund assignment operators
* can be used as a shortcut for the expression.
*/

// a = b // assignment operator (initializes variable) 
// a += b // addition assignment (a = a + b) compound assignment operator
// a -= b // subtraction assignment (a = a - b) compound assignment operator
// a *= b // multiplication assignment (a = a * b) compound assignment operator
// a /= b // division assignment (a = a / b) compound assignment operator
// a %= b // remainder assignment ( a = a % b) compound assignment operator

// 2. ARITHMETIC OPERATORS //

/* Arithmetic operators are binary operators. They are used in mathematical 
* expressions.
*/

// a + b // addition
// a - b // subtraction
// a * b // multiplication
// a / b // division
// a % b // remainder of division (modulo)


// 3. COMPARISON OPERATORS//

/* Comparison operators are binary operators. They compare data and return a 
* boolean value.
*/

4 > 2; // greater than (returns true)
4 < 2; // less than (returns false)
4 >= 2; // greater than or equal to (returns true)
2 <= 4; // less than or equal to (returns true)
2 == '2'; // non-strict comparison (returns true)
2 === 2; // strict comparison (preferred, compares value, and other prperties such as type)
2 != 4; // not equal (returns true)
2 !== '2'; // strictly not equal (returns true)

// 4. LOGICAL OPERATORS //

/* Logical operators are binary operators. They are typically used to test true or false, 
* and return a boolean value when used in this manner.
*
   &&   // and operator
   ||  // or operator
   !  // not operator 
*
*/

if (3 >= 1 || 3 <= 4);
console.log(true); /* returns true (3 is greater than or equal to 1, 
                    and less than or equal to 4) */

// 5. UNARY OPERATORS //

/* Unary operators are operators that take a single argument/operand and performs an 
* operation. The operator can come before or after the operand. They are more 
* efficient than function calls, as they can not be overridden.
*/

/*

typeof // returns a string which is the type of the operand
! // logical not operator (converts to boolean value then negates it)
+ // unary plus operator (tries to convert the operand into a number)
- // unary negation operator (tries to convert operand into a number and negates after)
++ // increment operator (adds one to its operand)
-- // decrement operator (decrements by one from its operand)

*/

console.log(typeof 50); // prints "number"
console.log(typeof false); // prints "boolean"

!false // returns true
+10 // returns 10
-5; // returns -5

// var x = 14;     
// x = ++x      // returns 15 (increment by one)

// var x = 14; 
// x = --x    // returns 13 (decrement by one)

// 6. TERNARY OPERATORS//

/* A ternary operator is an operator that takes three arguments. It is the only 
* operator that takes three operands. The structure has a condition followed by a 
* question mark (?), and an expression to execute to determine if the condition is 
* true followed by a colon (:), and the expression to execute if the condition is 
* false. This operator can be used as a shortcut for the if statement. Aside from 
* false, null, NaN, 0, the empty string (""), and undefined, are all possible falsy 
* results after executing.
*/

var age = 21;
var drink = (age >= 21) ? "Go drink!" : "Sorry, you can't drink.";
console.log(drink); // returns "Go drink!" (age is greater than or equal to 21)

