// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case
  if(n === 0 || n === 1){
    //if n is equal to 0 or 1
    return 1;
    //return 1
  }else if(n < 0){
    //if n is less than 0 (a negative number)
    return null;
    //return null to stop recursing
  }
  //recursive case
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case
  if(array.length === 1){
    //if the array length is equal to 1
    return array[0];
    //return array index 0
  }
  //base case
  if(array.length === 0){
    //if the array length is equal to 0
    return 0;
    //return 0
  }
  //recursive case
  return array[0] + sum(array.slice(1));
  //return array index 0 + the array sliced at index 1
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base case
  if(n === 0){
    //if n is equal to 0
    return true;
    //return true
  }
  //base case
  if(n === 1){
    //if n is equal to 1
    return false;
    //return false
  }
  //recursive case (to account for negs)
  if(n < 0){
    //if n is less than 0 (negative)
    return isEven(n + 2);
    //return num + 2 (so we can get back to 0)
  }
  return isEven(n - 2);
  //return num - 2 (to get back to 0)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base case
  if(n === 0){
    //if n is equal to 0
    return 0;
    //return 0
  }
  //recursive case (for positive)
  if(n > 0){
    //if n is greater than 0
    return n - 1 + sumBelow(n - 1);
     //return num minus 1 (to acct for the other nums, not including that num) + (num minus 1) recursion
  }
  //reursive case (for negative)
  if(n < 0){
    //if n is less than 0
    return n + 1 + sumBelow(n + 1);
     //return num plus 1 (to acct for the other nums, not including that num) + (num plus 1) recursion
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //base case
  if(x === y || x + 1 === y){
    //if no numbers in range
    return [];
    //return empty array
  }
  let outcome = true;
  //set the result/outcome to true
  if(x > y){
  //if x is greater than y (negative), swap values out
    let temporaryVal = x;
    //temporarily hold value of x, so we can swap values
    x = y;
    y = temporaryVal;
    outcome = false;
    //set the result/outcome to false
  }
  //recursive case
  let newOutcome = range(x, y - 1);
  //set the final result/outcome
  newOutcome.push(y - 1);
  //push value into array
  return outcome ? newOutcome : newOutcome.reverse();
  //return the updated result
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case
  if(exp === 0){
    //if exponent is 0
    return 1;
    //return 1
  }
  //recursive case (for negs)
  if(exp < 0){
    return 1 / (base * exponent(base, -1 * exp -1));
  }else{
    //recursive case
    return base * exponent(base, exp -1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n === 1){
    //if n is equal to 1
    return true;
    //return true
  }
  if(n === 0){
    //if n is equal to 0
    return false;
    //return false
  }
  return powerOfTwo(n/2);
  //return num divided by 2
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
   //base case
   if (string === ''){
     //if string is empty
    return ''; 
    //return the string
   } 
   //recursive case
  return reverse(string.slice(1)) + string[0];
  //return the string reversed w/ first char sliced plus the char at index 0
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base case
  if(string.length <= 2){
    //if string length less than or equal to 2
    return true;
    //return true
  }else if(string[0].toUpperCase() !== string[string.length - 1].toUpperCase()){
    //if string index 0 is not equal to the last index
    //account for upper or lower case chars
    return false;
    //return false
  }
  //recursive case
  return palindrome(string.slice(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if(y == 0){ 
    return 0;
  }
  if(y > 0 ){ 
    return (x + multiply(x, y-1));
  }
  if(y < 0 ){
    return -multiply(x, -y);
  }

 };

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case
  if(str1.length === 0 && str2.length === 0){
    //if strings are equal
    return true;
    //return true
  }
  //recursive case
  else if(str1[0] === str2[0]){
    //if index 0 of str1 is equal to index[0] of str2
    return compareStr(str1.slice(1), str2.slice(1));
  }
  return false;
  //otherwise return false
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
     let array = [];
    //create new array for output
    
    //base case
    if(str.length === 0) {
      //if string length is equal to 0
        return array;
        //return empty array
    }
    //recursive case
    array.push(str[0]);
    //push string into array
    array = array.concat(createArray(str.slice(1)));
    //concatenate
    return array;
    //return array
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
      let arrayRev = [];
    //create new array for output
    
    //base case
    if(array.length === 0) {
    //if array length is equal to 0
    return arrayRev; 
    //return empty array
  } else {
  }
  //recursive case
  arrayRev.push(array.pop());
  //push array into new rev array
  //pop off end
  arrayRev = arrayRev.concat(reverseArr(array.slice(0)));
  //concatenate
  return arrayRev;
  //return rev array
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  let newArr = [];
  //create new array for output
  
  //base case
  if(length === 0){
    //if length is equal to 0
    return newArr;
    //return empty array
    
    //recursive case
  } else {
    newArr.push(value);
    //push value into new array
    return newArr.concat(buildList(value, length - 1));
    //return new array concatenated 
  }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    //base case
  if(array.length === 0){
    //if array isequal to 0 (empty)
    return 0;
    //return 0
    
    //recursive case
  } else {
    return (array[0] === value) + countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    //base case
  if(array.length === 1){
    //if array length is 1
    return callback(array);
    //return the callback
    
    //recursive case
  } else {
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
  }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n){
  //edge case
  if(n < 0) {
  //if negative num
    return null;
    //return null
  }
  //base case
  else if(n === 0){
    //if num is equal to 0
    return 0;
    //return 0
  }
  //base case
  else if(n === 1) {
  //if num is equal to 1
    return 1;
    //return 1
  }
  //recursive case
  return nthFibo(n - 1) + nthFibo(n - 2);
  //each index is equal to the sum of the previous 2
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    let array = [];
  //create a new array for output
  
  //base case
  if(input.length === 0){
    //if input length is equal to 0
    return array;
    //return the empty array
    
    //recursive case
  } else {
    array.push(input[0].toUpperCase());
    //push input at index 0, capitalized into the array
    array = array.concat(capitalizeWords(input.slice(1)));
    //concatenate the capitalized input, and slice
    return array;
    //return the array
  }

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    let newArr = [];
  //create new array for the output
  
  //base case
  if(array.length === 0){
    //if array length is 0
    return newArr;
    //return empty array
  }
    let firstLetter = array[0][0].toUpperCase();
    //set first letter of word to upper case
    let word = firstLetter + array[0].slice(1);
    //set the word to first letter and array index 0 
    let final = capitalizeFirst(array.slice(1));
    //set final result to capitalized first letter of string
    final.unshift(word);
    //add new items to beginning w/ unshift method
    return final;
    //return final result
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
   let newArray = Array.from(arguments)[1] || {};
    //create new array for output from args or object literal

    //base case
    if(str.length === 0) {
      //if string length is 0
        return newArray;
        //return the empty array
    }
    if(!newArray[str[0]]) {
        newArray[str[0]] = 1;
    } else {
        console.log(newArray[str[0]], 'potato');
        newArray[str[0]]++;
    }
    return letterTally(str.slice(1), newArray);

};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //base case
  if (list.length < 2){
  //if list length is less than 2, first 2 elements are different, so we want to keep
    return list;
    //return the list
}
  if (list[0] != list[1]) {
  //if list index 0 and list index 1 are not equal
    return [list[0]].concat(compress(list.slice(1)));
    //return index 0 and concat w/ rest of list
  }
  return compress(list.slice(1));
  //return rest of list
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    //base case
  if(array.length === 0){
  //if array length is equal to 0
    return array;
    //return the empty array
  }
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0){
      return minimizeZeroes(array.slice(1));
      
    //recursive case
  } else {
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //base case
  if (array.length === 0) {
  //if array length is equal to 0
    return array; 
    //return the empty array
  }
    if(array[0] < 0){
    //if array index 0 is less than 0 (neg)
      array[0] = -array[0];
      //set pos index 0 to neg
    }
    if(array[1] > 0){
    //if array index 1 is greater than 0 (pos)
      array[1] = -array[1];
      //set pos index 1 to neg
    }
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
    //return array index 0 and concatenate 
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    //base case
    if(str.length === 0){
    //if string length is equal to 0
    return "";
    //return the empty string
  }
  //recursive case
  let temporaryString = numToText(str.slice(0, str.length-1));
  //set temp to string sliced
  let replace;
  //set replacement variable
  switch (str[str.length-1]) {
    //create object and use switch statements to convert numbers to strings
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
    default: replace = str[str.length-1];
      break;
  }
  return temporaryString + replace;
  //return the string and replaced values
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
