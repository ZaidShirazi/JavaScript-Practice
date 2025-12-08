
// Variables in JavaScript
// There are 3 types of Variables in JavaScript.

// var , let and const.

//but we mainly use only 2 ( let and const).

// var is function scoped while let is block scoped.

let totalMarks, obtMarks; // Declaration

totalMarks = 800; // Assigns Value
obtMarks = 400; // Assigns Value


const percentage = (obtMarks/totalMarks) * 100; // const cannot be empty so we have to initialize it everytime we use it.

let firstName = "Zaid"; // Initialization
let lastName = "Shirazi"; // Initialization

console.log(firstName);
console.log(lastName);
console.log(percentage);

// Data Types in JavaScript

// Primitive Data Types:
// 1. String - represents a sequence of characters
// Example: "hello", 'hello'
// 2. Number - represents a numerical value
// Example: 42, 3.14
// 3. Boolean - represents a true or false value
// Example: true, false
// 4. Null - represents the absence of any object value
// Example: null
// 5. Undefined - represents an uninitialized or non-existent variable
// Example: undefined
// 6. Symbol - represents a unique symbol (introduced in ECMAScript 2015)
// Example: Symbol('unique')
// 7. BigInt - represents an integer with arbitrary precision (introduced in ECMAScript 2020)
// Example: 123n

// Non-Primitive Data Types:
// 1. Object - represents a collection of key-value pairs
// Example: { name: 'John', age: 30 }
// 2. Array - represents an ordered collection of values
// Example: [1, 2, 3, 4, 5]
// 3. Function - represents a reusable block of code
// Example: function add(a, b) { return a + b; }

// Primitive Data Types

// 1. string
let fullName = "Muhammad Zaid Ullah Shirazi";
// 2. Number
let age = 22;
// 3. boolean
let isFollow = true;
// 4. Null
let emptyValue = null;
// 5. Undefined
let unInitializedVariable;
// 6. BigInt
let bigInt = BigInt(123); 
// 7. Symbol
let symbol = Symbol('unique');

console.log(fullName);
console.log(age);
console.log(isFollow);
console.log(emptyValue);
console.log(unInitializedVariable);
console.log(bigInt);
console.log(symbol);
// Non Primitive Data Types

// 1. Object
// 2. Array ( Note: Arrays are objects in JavaScript.)
// 3. Function