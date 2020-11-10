/*
 * CONTROL FLOW:
 *
 * 0. Control flow refers to the order in which a sequence of code is executed,
 * based on true or false values. The code will execute from top to bottom. 
 * There are structures we use that can change or influence the control flow, 
 * such as conditionals, functions and loops. 
 */

// 1. IF STATEMENTS //

/* The if condtional statement uses if to execute a block of code, if a specified
 * condition is true. It is the fundamental control statement that allows JavaScript 
 * to make decisions and execute statements conditionally. If the result is true, 
 * the given statement(s) are executed. If the expression is false, then we would
 * move onto an else if statement to get to our final output.
 */

/* The syntax should look like this =>
 *
 *  if (condition) {
 *      //  block of code to be executed if the condition is true
 *   };
 */

let age = 18;

if (age >= 18) {
  console.log('You can vote!');
}

// 2. IF ELSE STATEMENTS //

/* The else conditional statement uses else to execute a block of code, if the
* same condition is false. The statement is the next form of 
* control statement that allows JavaScript to execute statements in a more controlled way.
* If the resulting value is true, the given statement(s) in the ‘if’ block, are executed. 
* If the expression is false, then the given statement(s) in the else block are executed.
*/

/* The syntax should look like this =>
 *
 *  if (condition) {
 *    //  block of code to be executed if the condition is true
 *  } else {
 *    //  block of code to be executed if the condition is false
 *  }
 */
 
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('Sorry, you can not vote.'); // prints 'Sorry, you can not drink.'
}

// 3. IF ELSE IF STATEMENTS //

/* The else if conditional statement uses else if to execute a new condition 
* to test, if the first condition is false. The if...else if... statement allows 
* JavaScript to make a correct decision out of several conditions. It is a series of
* if statements, where each if, is a part of the else clause of the previous statement. 
* The statement(s) are executed based on the true condition. If none of the conditions 
* are true, then the else block is executed. We can have as many else if statements as 
* needed for our code to execute. The final statement would be else, indicating for 
* our statement to have a final outcome.
*/

/* The syntax should look like this =>
 *
 *  if (condition1) {
 *    //  block of code to be executed if condition1 is true
 * } else if (condition2) {
 *    //  block of code to be executed if the condition1 is false and condition2 is true
 *  } else {
 *    //  block of code to be executed if the condition1 is false and condition2 is false
 *  }
 */
 
if (age >= 18) {
  console.log('You can vote!');
} else if (age >= 17) {
  console.log('Almost!');
} else {
  console.log('Sorry, you can not vote.'); // prints 'Almost!' to console.
}

// 4. SWITCH STATEMENTS //

/* Switch statements can be used in place of else if statements. They execute a block 
* of code depending on different cases. They evaluate an expression and match the 
* expression's value to a case clause. They will then execute statements associated 
* with that particular case, as well as statements in other cases that follow the 
* matching case. 
* We must have breaks in the statement in order to break out of the switch block. 
* The break keyword will stop the execution of code inside of the block. 
* If we do not use the break, the next code block in the switch statement is executed.
*/

let x = 10 + 5;

switch (x) {
  case 14:
    console.log( 'sum is larger' );
    break;
  case 15:
    console.log( 'That is right!' );  // prints 'That is right!' to the console.
    break;
  case 16:
    console.log( 'sum is smaller' );
    break;
  default:
   console.log( 'Sorry, that is wrong.' );
}

