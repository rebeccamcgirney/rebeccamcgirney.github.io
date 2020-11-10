/*
 * LOOPS:
 *
 * 0. Loops are used as a quick and easy solution to to do something repeatedly. There are 
 * various kinds of loops used in different instances, but they all ultimately do the same
 * thing. They repeat an action a specific number of times. The different types of loops
 * offer different ways to determine the starting and ending point of the loop.
 *
 * 1. Loops are usually constructed with three separate pieces:
 * The starting condition- the condition set to tell your loop where to begin. We usually
 * use i, as in index.
 * The stopping condition- the condition set to tell you when loop will stop, which is 
 * based on a boolean value. It is important we use i =, so our loop eventually stops.
 * An increment- how much we will move per iteration. We can also use decrement to loop
 * in reverse.
 * 
 * 2. Loops do NOT always have to start at zero!
 *
 */ 

// 1. FOR LOOPS //

/*
 * A for loop, loops through a block of code a certain number of times and repeats until a 
 * specified condition evaluates to false.
 */
 
for (var i = 0; i < 5; i++) {
    console.log('Becca'); // prints Becca to console 5 times
}

var colors = ['teal', 'orange', 'purple'];

for (var i = 0; i <= 2; i++) {
    console.log(colors[i]); // prints teal, orange, purple to console.
}

for (var i = colors.length; i--;) {
  console.log(colors[i]); // prints purple, orange, teal to console.
}

// 2. FOR IN LOOPS //

/* For in loops are used for objects only. They loop through the properties of an object. 
* The block of code inside the loop will be executed one time for each property.
*/

var place = {
    city: 'Philadelphia',
    state: 'Pennsylvania',
    country: 'United States',
    climate: 'Humid Continental',
    stateFlower: 'Mountain-Laurel',
    stateBird: 'Ruffed Grouse',
};

for (var key in place) { // for property (key) in object (place)
    console.log(key); // prints keys only to console
    console.log(place[key]); // prints keys and values (key value pairs) to console
}

// 3. WHILE LOOPS //

/* While loops are esentially the same as for loops. They loop through a block of code
* while a specified condition is true. It is important that we don't forget to increment
* the variable, otherwise, we won't break out of our loop and it will be infinite.
*/

var count = 25;

while (count <= 50) {
  console.log(count); // prints numbers 25 through 50 to the console.
  count++; 
}

