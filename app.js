/*
Given this function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

Refactor it to use the rest operator & an arrow function:

*/

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = ((...arguments) => arguments.filter((num) => (num % 2 === 0)));

/*
findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/

const findMin = ((...value) => value.reduce((acc, next) => (next < acc ? next : acc)));

// ANSWER: const findMin = (...args) => Math.min(...args)

/*
mergeObjects
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
*/


const mergeObjects = (a,b) => ({...a,...b});

/*
doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/

const doubleAndReturnArgs = ((arr, ...args) => 
    args.reduce(function(acc,nxt){
        arr.push(nxt*2)
        return acc;
    },arr)
);

/* ANSWER 
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

    Expanded :
    function doubleAndReturnArgs (arr, ...args) {
        return [
            ...arr,
            ...args.map(function(v){
                return v*2
            })
        ]
    }
*/

/*
Slice and Dice!
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.
*/

/** remove a random element in the items array
and return a new array without that item. */

let items = [1,2,3,4,5,6,7,8,9]

function removeRandom(items) {
    // let newArray = [];
    let randomNumber = Math.floor(Math.random() * items.length);
    // let random  = items.slice(0, randomNumber)
    // let nextValue = items.slice(randomNumber+1)
    console.log(`randomNumber = ${randomNumber}`);
    // console.log(`random = ${random}`);
    // console.log(`nextValue = ${nextValue}`);
    // newArray.push(random);
    // newArray.push(nextValue);
    // console.log(items.slice(0,randomNumber));
    // console.log(items.slice(randomNumber+1));
    return [...items.slice(0,randomNumber-1), ...items.slice(randomNumber)];
}

/* ANSWER: const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
*SPlice - changing the original array vs slice = separating pieces without changing initial

QUESTION: Walk through return statement: "return [...items.slice(0, idx), ...items.slice(idx + 1)];"
*/

/*
Random item to remove: Math.random() * (items.length)
Remove item: splice()
new array: items.map(function(v){
    return 
})
*/

/** Return a new array with every item in array1 and array2. */

let array1 = [1,2,3];
let array2 = [4,5,6];


const extend = (array1, array2) => ([...array1, ...array2]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

obj = {
    a:'1',
    b:'2',
    c:'3'
}


const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}   


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj3 = {...obj}
    delete newObj3[key];
    return newObj3;
}


/** Combine two objects and return a new object. */
obj1= {
    a:'1',
    b:'2',
    c:'3'
}
obj2 = {
    d:'4',
    e:'5',
    f:'6'
}
const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj2 = {...obj};
    newObj2[key] = val;
    return newObj2;
}