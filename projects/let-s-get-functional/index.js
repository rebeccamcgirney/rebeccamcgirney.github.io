// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-rebeccamcgirney');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./rebeccamcgirney.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
 
 //Find number of male customers in the array
//INPUT: array
//OUTPUT: number
//CONSTRAINTS: must use .filter method
var maleCount = function(array){
    //function w/ input of array
let maleCustomers = _.filter(array, function(customerObj){
    //set maleCustomers (what value we are looking for) variable to the filter function
    /*filter takes an array and a function, we will call the function customerObj
    * in reference to the customer objects being searched in the array.
    */
    return customerObj.gender === 'male';
    //return the gender of the customer object if it is male customer
}).length;
//use the .length property to find the number of male customers
return maleCustomers;
//return male customers
};


//Find number of female customers in the array
//INPUT:array
//OUTPUT: number
//CONSTRAINTS: must use .reduce method
var femaleCount = function(array){
    //function w/ input of array
return _.reduce(array, function(seed, customerObj){
    if(customerObj.gender === 'female'){
        //if the customer object has a property of female
        seed++;
        //increment the seed
    }
    return seed;
    //return the seed
},0);
//set the seed to start at 0
};


//Find the oldest customer's name
//INPUT: array
//OUTPUT: string (customer's name)
var oldestCustomer = function(array){
    //function w/ input of array
  return _.reduce(array, function(seed, customerObj){
      if(seed.age > customerObj.age){
          //if the seed age is greater than the current/customerObj age
          return seed;
          //return the seed/customerObj
      }else{
          return customerObj;
          //otherwise return the current/customerObj
      }
  }).name; 
  //use the .name property to find the name of the oldest customer
};


//Find the youngest customer's name
//INPUT: array
//OUTPUT: string (customer's name)
var youngestCustomer = function(array){
    //function w/ input of array
  return _.reduce(array, function(seed, customerObj){
      if(seed.age < customerObj.age){
          //if the seed age is less than the current/customerObj age
          return seed;
          //return the seed/customerObj
      }else{
          return customerObj;
          //otherwise return the current/customerObj
      }
  }).name; 
  //use the .name property to find the name of the youngest customer
};


//Find the average balance of all customers
//INPUT: array
//OUTPUT: number
var averageBalance = function(array){
    //function w/ input of array
    let totalBal = _.reduce(array, function(seed, customerObj){
        //set the totalBal (what we are looking for) variable to the .reduce function
        return seed + Number(customerObj.balance.slice(1).split(",").join(''));
        //return the seed plus the balance
        //convert the balance into a number and remove special chars w/ .slice and separate w/ .split
        //use .join to reform back into a string/number
    },0);
    //set the seed to start at 0
    return totalBal/(array.length);
    //return the totalBal divided by the number of customers in the array
};


//Find how many customer’s names begin with a given letter
//INPUT: array, letter
//OUTPUT: number
var firstLetterCount = function(array, letter){
    //function w/ input of array and a letter
    return _.filter(array, function(customerObj){
        //use .filter on array
        return customerObj.name.toUpperCase().startsWith(letter.toUpperCase());
        //test if customer has name that starts with specific letter
        //use toUpper or toLower to account for caps
    }).length;
    //use .length so we can find the number of customers w/ the starts with char
};


//Find how many friends of a given customer have names that start with a given letter
//INPUT: array, customer, letter
//OUTPUT: Number
var friendFirstLetterCount = function(array, customer, letter){
    //function w/ array, customer, letter input
    let newArr = [];
    //create a new array for output
    _.each(array, function(e, i, array){
        //use .each on each element
        if(e.name === customer){
            //if the customer has a key of name, meaning they have a given name
            _.each(e.friends, function(el, i, array){
                if( el.name[0].toUpperCase() === letter.toUpperCase()){
                    //if the first index of the name starts w/ specific letter
                    //account for caps using toUpper or toLower
                       newArr.push(el);
                       //push name into new array
                }
            });
        }
    });
return newArr.length;
//return new array using length property, to see how many friends names start w/ letter
};


//Find the customers’ names that have a given customer’s name in their friends list
//INPUT: array, name
//OUTPUT: array
var friendsCount = function(array, name){
    //function w/ an array and name input
    let newArr = [];
    //create a new array for ouput
    _.each(array, function(e, i, array){
        //use .each on each element
        _.each(e.friends, function(el, i, array){
            if(el.name.includes(name)){
                //if the particular name is included in the list
                newArr.push(e.name);
                //push name into new array
        }
    });
});
return newArr;
//return the new array
};


//Find the three most common tags among all customers’ associated tags
//INPUT: array
//OUTPUT: array
var topThreeTags = function(array){
    //function w/ array input
    let entireList = [];
    //create new array for entire list of tags for output
 let tagArrays = _.pluck(array,"tags");
 //create new array for our tags, extract tags using .pluck
    _.each(tagArrays,function(e, i ,a){
        //use .each to test each element for tags
      entireList = entireList.concat(e);
      //concat everything together into one list
    });
 let newObj = entireList.reduce(function(acc, e, i){
     //use reduce on the entire list created
        if( acc[e]){
            acc[e] ++;
            //if element exists, increment value
        }else {
            acc[e] = 1;
            //if element does not exist, add new key w/ value of 1
        }
        return acc;
        //return value
    },{});
    //set the seed to an object literal for collection
  let arrayList = Object.entries(newObj);
  //use object.entries to create array of key value pairs
  let finalArray = arrayList.sort(function(a,b){
  //create a new array for final ouput
  //sort thru the elements of the array in order
  return b[1] - a[1];
  //return the difference 
  }).splice(0,3);
  //use .splice to remove exisiting elements (tags)
  return _.map(finalArray,function(e,i){
      //use .map on the final array
    return e[0];
      //return the element (tag) at index 0
  });
};



//Create a summary of genders
//INPUT: array
//OUTPUT: object (3 gender keys w/ number of each gender as value)
//CONSTRAINTS: must use .reduce
var genderCount = function(array){
    //function w/ array as input
    return _.reduce(array, function(customerObj, currVal){
        //use .reduce on array
        if(customerObj[currVal.gender]){
            //if the customer has a gender key
            customerObj[currVal.gender]++;
            //increment the count value
        }else{
            customerObj[currVal.gender] = 1;
            //if the customer does not have a gender key, create one and set value to 1
        }
        return customerObj;
        //return the customer object
    }, {});
    //set seed to an object literal, as we want an object to be our collection for output
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
