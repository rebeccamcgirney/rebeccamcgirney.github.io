////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function min that takes two arguments and returns their minimum.
function min(num1, num2){
  //create a function w/ 2 args which will be nums
  if(num1 > num2){
    //if num1 is greater than num2
    return num2;
    //return num2 (lesser amount)
  }else if(num1 < num2){
    //if num2 is greater than num1
    return num1;
    //return num1 (lesser amount)
  }else if(num1 === num2){
    //if nums are equal
    return num1;
    //return one of them
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Define a recursive function isEven corresponding to this description. 
//The function should accept a single parameter (a positive, whole number) and return a Boolean.
//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
function isEven() {

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Next, write a function called countChar that behaves like countBs, 
//except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
//Rewrite countBs to make use of this new function.
function countChars(str, char) {
  //function w/ 2 args, a str and a char to be counted
  let count = 0;
  //set starting count at 0
  for(let i = 0; i < str.length; i++){
    //loop thru the string
    if(str[i] === char){
      //if current position in string is equal to the character searching for
      count += 1;
      //add 1 to the count
    }
  }
return count;
//return the count
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function countBs that takes a string as its only argument 
//and returns a number that indicates how many uppercase “B” characters there are in the string.
function countBs(str){
  //function w/ string as only argument
 return countChars(str, 'B');
    
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
