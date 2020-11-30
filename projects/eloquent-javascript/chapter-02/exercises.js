
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/
function triangles(args){
  //function w/ args as param
for(let i = "#"; i.length <= args; i+= "#"){
  //use a for loop, i doesn't always have to be a defined number
  //set start at # and increment with # for every iteration
  console.log(i);
  //print i
   }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
//For numbers divisible by 3, print "Fizz" instead of the number, 
//and for numbers divisible by 5 (and not 3), print "Buzz" instead.

//When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible
//by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function fizzBuzz() {
//function called fizzBuzz
for(let i = 1; i <= 15; i++){
//use a for loop to loop thru numbers
  if(i % 3 === 0 && i % 5 === 0){
  //if num is divisible by 3 and 5
    console.log('fizzbuzz');
    //print fizzbuzz
  }else if(i % 3 === 0){
  //if num is divisible by 3 
    console.log('fizz');
    //print fizz
  }else if(i % 5 === 0){
  //if num is divisible by 5
    console.log('buzz');
    //print buzz
  }else{
  //anything else
    console.log(i);
    //print value of i
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
