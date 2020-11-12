// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object. x
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list. x
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list. x
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list. x
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//create function w/ 3 params: id, nameFirst, nameLast, that returns a contact object
   return {
       //return object
       id: id,
       nameFirst: nameFirst,
       nameLast: nameLast
   };
} 
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    //create an array for output
   return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length
            //return number of contacts in list w/ .length method
        },
        addContact: function(contact){
            contacts.push(contact);
            //add object to contact list called addContact, w/ .push method

        },
 //   };
//}
        findContact: function(fullName){
    //findContact func takes str that is a full name
    for(let i = 0; i < contacts.length; i++){
        //loop thru the contact list
        if(fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast){
            //if the fullName (made up of first and last name) exists
            return contacts[i];
            //return contact
        }
            
        }
        return undefined;
        //if contact not found in list, return undefined
        },
        
        removeContact: function(contact){
            //function removeContact w/ contact param
            for(let i = 0; i < contacts.length; i++){
                //loop thru the contact list
                if(contact.id === contacts[i].id){
                    //if the contact id is found
                contacts.splice(i, 1);
                //remove w/ splice method, .splice we need a start index and the num of contacts we want removed
            }
        }
   },
                   printAllContactNames: function() {
                    var contactsArray = [];
                    //create new array for ouput
                    for(let i = 0; i < contacts.length; i++) {
                        //loop thru the contacts array
                        let firstName = contacts[i].nameFirst;
                        let lastName = contacts[i].nameLast;
                        contactsArray.push(`${firstName} ${lastName}`);
                        //push full name into the new array
                    }
                    return contactsArray.join("\n");
                    //return new array w/ .join method, don't forget to use new line break
            }
            
        };
    }




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
