////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

const multiply = (num1, num2, callback) => callback(num1 * num2);
//multipy is a function with the parameters num1, num2, and a callback function
//inside the function, the callback(num1*num2) means that the callback is being invoked 
//where you pass the product of two numbers as the argument

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

//Higher Order Function
multiply(4, 3, answer => {
  console.log('The answer is ' + answer)}); //should console.log 12

//Here, the callback is declared within as an argument to the multiply function. The function will print out the statement and the product.
// It looks like this:
// multiply(4, 3, answer)
//   In multiply, we have declared that the product of the two numbers will be taken as an argument for the answers function. So in multiply
//   the function multiplies the two numbers, 4 * 3 = 12, first, then plug that argument in to the answers function. As invoked in the higher order
//   function, the argument, 12, goes into the arguments function, which states that it will print out the statment, plus whatever was put into
//   answer as an argument (12). Thus we should see the following:
//     'The answer is 12';

////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.


////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

const first = (arr, callback) => callback(arr[0]);


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

first(names, firstName => {
  console.log('The first name in names is ' + firstName)
})

////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

const last = (arr, callback) => callback(arr[arr.length-1]);


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

last(names, lastName => {
  console.log('The last name in names is ' + lastName)
})

////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

const contains = (arr, name, callback) => {
  for (let i = 0; i < arr.length; i++){
    if (arr.includes(name))
      return callback(true); //return keyword is not necessary
    else
      return callback(false);
  };
}; 

// SOLUION:
// includes actually returns a boolean, so we could also just do this 
// the 'arr.includes(name)' will evaluate first and result in true or false
// and then the callback will be invoked with that boolean
// const contains = (arr, name, cb) => {
//   return cb(arr.includes(name))
// }

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

//The first two arguments gets passed to the function 'contains', which will return true or false. This return will
//then get sent into the callback argument, and fulfill the arguments in the callback as follows
contains(names, 'Colt', result => {
  if(result === true){
    console.log('Colt is in the array')
  } else {
    console.log('Colt is not in the array')
  }
})

////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
//var names1 = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan', 'Colt', 'Tyler']
const uniq = (arr, callback) => {
  for (let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length; j++){
      if (arr[j] === arr[i] && j !== i){ //Needs this second and condition or the loop will delete names that are not duplicates
        arr.splice([j], 1);              //If you want to see it, erase the NOT condition j !== i
      };
    }
  }

  callback(arr);
};

//SOLUTION
// const uniq = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//       for (let x = i + 1; x < arr.length; x++) {
//           if (arr[i] === arr[x]) {
//               arr.splice(x, 1)
//               x--
//           }
//       }
//   }

//   cb(arr)
// }

/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

uniq(names, uniqArr => {
  console.log('The new names array with all the duplicate items removes is ', uniqArr)
});

////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

const each = (arr, callback) =>{
  for (let i = 0; i < arr.length; i++){
    callback(arr[i], [i + 1]);
  };
};

//SOLUTION
//const each = (arr, cb) => arr.forEach((el, i) => cb(el, i))
// Here, forEach takes two parameters, elem and i. The function loops through the arr and 
// logs out the value (elem) and the value’s index (i) to the screen

/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

each(names, callback = (item, index) => {
  console.log(`The item at index ${index} is ${item}`)}
);

////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for 
  the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

const getUserById = (arr, id, callback) => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i].id === id) //This arr[i] refers to the first object in the array. The dot notation will then access the id property
                          //of that object
      return callback(arr[i]);
  };
};

//SOLTUION
// one line with ternary
//Here, forEach takes in a function with one parameter, the object (element) then the 
//conditional if statement that if the object @ the property .id is equal to the parameter id,
//return the callback function with the object. Else, return null
//const getUserById = (arr, id, cb) => arr.forEach(elem => elem.id === id ? cb(elem) : null)

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

getUserById(users, '16t', user => {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
})

//Here, once the object with the matching id is found, then we can access that objects
//properties and print them out.

////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

const addingFactory = (num1) => {
  return (num2) => { //recall that the inner function can take the parameters of the outer function
    return num1 + num2}};

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an argument
*/

const addTen = addingFactory(10);

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

console.log(addTen(12));
console.log(addTen(29));

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

let addNumber = addingFactory(8);

console.log(addNumber(8));