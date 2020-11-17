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
//function w/ string param
let array = [];
//create array for our output
let splitString = string.split(' ');
//split strings into array of substrings w/ split method
for(let i = 0; i < splitString.length; i++){
//loop thru our array of strings
array.push((splitString[i].charAt(0).toUpperCase()) + (splitString[i].slice(1)));
//capitalize first character, combine and use .slice and push into new array
}
return array.join(" ");
//return string of new values combined w/ spaces using.join method

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!' 
function welcomeMessage(object) {
//function w/ object param that has name property
let valueArray = Object.values(object);
//assign object.values to value array
let newArray = [];
//create a new array for output
newArray.push((valueArray[0].charAt(0).toUpperCase()) + (valueArray[0].slice(1)));
//push and slice method, account for uppercase characters, push into new array
return `Welcome ${newArray}!`;
//return 'Welcome Name!' string
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name and a species and return '<Name> is a <Species>'
function profileInfo(object) {
//function w/ object param that has name and species key
let valueArray = Object.values(object);
//assign object.values to value array
let newArray = [];
//create a new array for output
for(let i = 0; i < valueArray.length; i++){
//loop thru the array
newArray.push((valueArray[i].charAt(0).toUpperCase()) + (valueArray[i].slice(1)));
//push and slice method, account for uppercase characters, push into new array
}
return `${newArray[0]} is a ${newArray[1]}`;
//return string "Name is a Species"

}


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them as a string separated by a space,
// if there are no noises return 'there are no noises'
function maybeNoises(object) {
//function w/ object param
for(let key in object){
//use for in loop to loop thru object
if(object[key].length > 0 && Array.isArray(object[key]) && key.includes('noises')){
//if object has a noises array w/ key called noises
return object[key].join(' ');
//return noises array as string w/ space
}
}
return "there are no noises";
//if no noises, return "there are no noises."
};


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
//function w/ parameters name and object
  if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
   //see if array <name> is a friend of <object> and has property of friends, we want to make sure it exists
  for (var i = 0; i < object.friends.length; i++) {
  //loop thru friends array 
  if (name === object.friends[i]) {
   return true;
   //if <name> is a friend of <object> return true
        }
    }
     }
    return false;
    //otherwise return false
        }



//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
//function w/ name and a list of people which is an array
   let notAFriend = [];
   //create a new array for the output, which will be a list that are not friends
   for(let i = 0; i < array.length; i++){
   //loop thru the friends array
   if(array[i]['name'] === name || array[i]['friends'].includes(name)){
   //if the object we are currently at is equal to the name param ignore OR 
   //if the object we are currently at is inside of the name array param ignore
   continue;
   }else{
   notAFriend.push(array[i]['name']);
   //push the names who are not friends into the new array, if the previous conditions are not met
      }
   }
   return notAFriend;
   //return the friend array w/ names that are not friends
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
//function w/ object, key and value params
    object[key] = value;
    //update prperty key on object w/ a new value
    return object;
    //return updated object

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(object, array) {
//function w/ object and array of strings params
    for(let key in object){
    //use for in loop to loop thru object
        if(array.includes(key)){
        //if the array exists and includes properties on object
            delete object[key];
            //delete the properties
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an array and return an array with all the duplicates removed
function dedup(array) {
//function w/ array param
    let unique = [...new Set(array)];
    //use the spread and new operators to convert array into a new set of values
    return unique;
    //return the array w/ dups removed
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