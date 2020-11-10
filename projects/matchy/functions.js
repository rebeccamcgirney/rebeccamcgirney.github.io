/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, str){
    //function w/ animal array and str that represents animal name as params
    for(let i = 0; i < animals.length; i++){
        //loop thru the animal array
        if(animals[i].name.includes(str)){
            //if the animal w/ the name exists or is found
            return animals[i];
            //return the animal
           }
        
        } return null; 
        //otherwise return null
    }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    //function w/ animal array, str representing a name, and obj representing replacement animal
    for(let i = 0; i < animals.length; i++){
        //loop thru animal array
        if(animals[i].name === name){
            //if the animal exists within the array
            animals[i] = replacement;
            //replace with the replacement animal obj
        }
    }return null;
    //otherwise do nothing
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        //loop thru animal array
        if(animals[i].name.includes(name)){
            //if the animal exists within the array 
           animals.splice(name);
           //remove the animal
          }
     }return null;
     //otherwise do nothing
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    //function w/ animals array and animal abj to be added, as params
    for(let i = 0; i < animals.length; i++){
        //loop thru animals array
        if(animals[i].name.toLowerCase() === animal.name.toLowerCase()){
            //compare animals to see if the animal has a unique name (use to upper or lower just in case one of them uses)
            return;
        }
    }
      if(animal.name.length > 0 && animal.species.length > 0){
          //if the animal name and species length is greater than 0
            animals.push(animal);
            //push the animal into the animals array only if other conditions pass
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
