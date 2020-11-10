/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'Zebra';
animal['name'] = 'Zoe';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises = ['snort'];
noises.push('bark');
noises.unshift('bray');
noises[noises.length] = 'whinny';

console.log(noises.length);
console.log(noises[3]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
noises.push('gallop');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: 'Duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);

var lemur = {
    species: 'Lemur',
    name: 'Larry',
    noises: ['howl', 'chirp', 'purr']
};
animals.push(lemur);

var wombat = {
    species: 'Wombat',
    name: 'William',
    noises: ['hiss', 'squeal', 'grunt', 'growl']
};
animals.push(wombat);

console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
//create a new array for output, arrays are good for list like structures
function getRandom(animals){
    //function called getRandom w/ param of animals which is our array
    return Math.floor(Math.random() * animals.length);
    //use math.random to find random value
    //array.length for max value
    //math.floor rounds down to nearest integer
}
friends.push(animals[getRandom(animals)].name);
////add name of random animal using .push method
console.log(friends);

animals[3].friends = friends;
/*add friends list as a property also called friends, on one of the animals
*from animals array. use bracket notation. 
*add friends to our previously created objects.
*/
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}