////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a range function that takes two arguments, start and end, and returns 
//an array containing all the numbers from start up to (and including) end.

//As a bonus assignment, modify your range function to take an optional third 
//argument that indicates the “step” value used when building the array. If no 
//step is given, the elements go up by increments of one, corresponding to the old behavior.
function range(start, end, step = start < end ? 1 : -1) {
   //function called range w/ 2 args start/end, third step added as ternary
  let resultArray = [];
  //create new array for result output
if(start === end){
  //if start is equal to end
  return [];
  //return array
}
  for(let i = start; step >= 0 ? i <= end : i >= end; i+= step){
    //loop over array, iteration for positive values are incremented and negative values are decremented
    //if step is pos, i <= end
    //if step is neg, i >= end
    resultArray.push(i);
    //push range into new array
  }
  return resultArray;
  //return new array


}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Next, write a sum function that takes an array of numbers and returns the 
//sum of these numbers. Run the example program and see whether it does indeed return 55.
function sum(array) {
  //function w/ array of nums param 
  let totalSum = 0;
  //set total to 0
  for(let i = 0; i < array.length; i++){
    //loop over the array of nums
    totalSum += array[i];
    //add the sum to each index of the array to accumulate total
  }
  return totalSum;
  //return the total

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//reverseArray, takes an array as argument and produces a new array that has 
//the same elements in the inverse order. 
function reverseArray(array) {
  //function w/ array param
  let newArr = [];
  //create a new array for output
for(let i = array.length - 1; i >= 0; i--){
  //use for loop and decrement for reversal
  newArr.push(array[i]);
  //push values into the new array
}
return newArr;
//return the new array
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//reverseArrayInPlace, does what the reverse method does: it modifies the array 
//given as argument by reversing its elements.
function reverseArrayInPlace(array) {
  //function w/ array param
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    //set the old array to each element in array
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
  //return the array

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function arrayToList that builds up a list structure like the one shown
//when given [1, 2, 3] as argument.
function arrayToList(array) {
  //function w/ array param
    let list = null;
    //set list equal to null
  for (let i = array.length - 1; i >= 0; i--){
    //use a for loop to loop thru array
    list = {value: array[i], rest: list};
  }
  return list;
  //return the list


}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//write a listToArray function that produces an array from a list. 
function listToArray(object) {
  //base case once we hit null stop recursing
if(object.rest === null) {
  return [object.value];
} else {
  //recursive statement
    return [object.value].concat(listToArray(object.rest));
}

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//add a helper function prepend, which takes an element and a list and creates 
//a new list that adds the element to the front of the input list
function prepend(element, list) {
 let newList = {value: element, rest: list};
  return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//nth, which takes a list and a number and returns the element at the given position
//in the list (with zero referring to the first element) or undefined when there 
//is no such element.

////If you haven’t already, also write a recursive version of nth.
function nth(list, num){
    if (!list){ 
    //if not a list, return undefined
      return undefined;
    }else if(num === 0){
       //if num is 0, we can return value due to the fact it is the outermost list
      return list.value;
    }else{
    } return nth(list.rest, num - 1);
  //if num is not 0, it references the inner list
  //pass in list.rest to keep iterating
  //keep going until num is 0
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function deepEqual that takes two values and returns true only if they 
//are the same value or are objects with the same properties, where the values of 
//the properties are equal when compared with a recursive call to deepEqual.
function deepEqual(a, b) {
  //function w/ 2 params
  if (a === b){
  //if a is equal to b
  return true;
  //return true
  }
  if (a == null || typeof a != "object" || b == null || typeof b != "object"){
    //if a is null or not an object ot if b is null or not an object
  return false;
  //return false
  }
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  
  if (keysA.length != keysB.length){
    //if object keys are not equal
  return false;
  //return false
  }
  for(let key of keysA){
    if(!keysB.includes(key) || !deepEqual(a[key], b[key])){
      return false;
  }
  }

  return true;
  //otherwise return true

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
