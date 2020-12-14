// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
////Use the reduce method in combination with the concat method to “flatten” an array 
//of arrays into a single array that has all the elements of the original arrays.
function flatten(array) {
//function w/ array of arrays arg
return array.reduce((a,b)=>{return a.concat(b)});
/*The reduce method takes in a function that has the first array(a) and the second array(b) as arguments.
*It uses the concat method to merge these arrays. Here it merges b to a(so a= [1,2,3,4,5]). 
*Then reduce continues with the next element of the array [6] as argument b and concatenates 
*this to a(which is now [1,2,3,4,5]) once more.
*/
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Write a higher-order function loop that provides something like a for loop statement. 
//It takes a value, a test function, an update function, and a body function. 
//Each iteration, it first runs the test function on the current loop value and stops
//if that returns false. Then it calls the body function, giving it the current value. 
//Finally, it calls the update function to create a new value and starts from the beginning.
function loop(start, testFunc, updateFunc, bodyFunc) {
//function w/ 4 params
    for (let value = start; testFunc(value); value = updateFunc(value)) {
    bodyFunc(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Implement every as a function that takes an array and a predicate function as parameters. 
//Write two versions, one using a loop and one using the some method.
function every(array, predFunc) {
    for (let element of array){
      if (!predFunc(element)){ 
        return false;
      }
  }
  return true;
}
function every2(array, predFunc) {
  return !array.some(element => !predFunc(element));
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
////Write a function that computes the dominant writing direction in a string of text. 
//Remember that each script object has a direction property that can be "ltr" (left to right),
//"rtl" (right to left), or "ttb" (top to bottom).
function dominantDirection(str) {
    //function w/ string param
  const arr = countBy(str, function(char){
    const unicode = char.charCodeAt();
    //get unicode value for current char
    const script = characterScript(unicode);
    //find script obj from unicode char
    if(script !== null){
      return script.direction;
    } else {
      return script;
    }
  });
  
  arr.sort(function(a, b){
    //sort array to find highest count 
    return b.count - a.count;
  })
  return arr[0].name;
}
  
  
//   let counted = countBy(text, char => {
//     //declare and assign counted
//     let script = characterScript(char.codePointAt(0));
//     //declare and assign script
//     return script ? script.direction : "none";
  
//   }).filter(({name}) => name != "none");

//   if (counted.length == 0) return "ltr";
//   //if counted length is 0, return ltr

//   return counted.reduce((a, b) => a.count > b.count ? a : b).name;
//   //use reduce function and return

//}


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
