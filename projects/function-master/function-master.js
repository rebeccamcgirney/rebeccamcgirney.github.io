//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return its values in an array
function objectValues(object) {
//function w/ object parameter
  let array = [];
  // new array created
  for (let key in object) {
  //for in loop used on objects
  array.push(object[key]);
  //push object values into array
    }
   return array;
   // return array
 }
 
//return Object.values(object); // shorter version 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its keys in a string each separated with a space
function keysToString(object) {
//function w/ object param    
   let newArr = [];
   //create new array for output
    for(let key in object){
    //use for in loop to loop thru object
    if(typeof key === 'string'){
    //if the key is a string
    newArr.push(key);
    //push into the array
        }
    }
     return newArr.join(' ');
     //return the array w/ all strings separated by space
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its string values in a string each separated with a space 
function valuesToString(object) {
//function w/ object param    
   let newArray = [];
   //create new array for output
    for(let key in object){
    //use for in loop to loop thru object
    if(typeof object[key] === 'string'){
    //if the value is a string
    newArray.push(object[key]);
    //push into the array
        }
    }
     return newArray.join(' ');
     //return the array w/ all strings separated by space
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
//function w/ collection param
    if(Array.isArray(collection)){
    //if collection is array
        return 'array';
        //return array
    }else if(typeof collection === 'object'){
    //if collection is object
        return 'object';
        //return object
    }
   
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
//function w/ string param that represents one word
    return string.charAt(0).toUpperCase() + string.slice(1);
    //return string w/ index 0 uppercased, use slice to determine the end point
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!' 
function welcomeMessage(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name an a species and return '<Name> is a <Species>'
function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(string, word) {
//function w/ string which is string of words, and word which is single word, params
    if(string.includes(word)){
    //if the string of words includes the word
        return true;
        //return true
    }else{
    return false;
    //otherwise return false
   }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array then return the object
function addFriend (name, object) {
//function w/ name and object params
object['friends'].push(name);
//push name into object's friends array
return object;
//return the object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise 
function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
//function w/ name and a list of people which is an array



}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an array and return an array with all the duplicates removed
function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}