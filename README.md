# JavaScript
A code repo for JavaScript while learning it.

# Lecture 1: Variables and Data Types
__const__ = can't be re-assigned a value and can't be declared again (block scope)\
__let__ = can be re-assigned a value but can't be declared again (block scope)\
__var__ = it can be re-assigned a value and it can also be declared again (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.

# Main difference between Var vs Let vs Const

__Var :__
Scope - Global, Local
Redeclaration && Reassignment - Yes/Yes
Hoisting - Yes with default value undefined

__Let :__
Scope - Global, Local, Block
Redeclaration && Reassignment - No/Yes
Hoisting - Yes without default value, reference error will come

__Let :__
Scope - Global, Local, Block
Redeclaration && Reassignment - No/No
Hoisting - Yes without default value, reference error will come

# Console types
console.table([group of variables you want to show in tabular form])

# Lecture 2: Datatypes and ECMA standards
__number =__ 2 ^ 53 \
__bigint =__ for large numbers \
__string =__ "assembly of characters" \
__boolean =__ true or false \
__null =__ stand alone value (type = object) \
__undefined =__ kindda place holder for a value which is not defined yet (type = undefined) \
__symbol =__ uniquness

# Lecture 3.1: Datatype conversion
__Number conversion__ \
 "33" => 33 \
 "33abc" => NaN (Not a Number) \
 true => 1, false => 0 \
 null => 0 \
 undefined => NaN

__Boolean conversion__ \
 1 => true, 0 => false \
 "" => false \
 "abc" => true

 # Lecture 3.2: Operations
 Link to study \
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

# Lecture 4: Comparison of datatypes

__Comapring String and Number__

console.log("2" > 5); \
//Output: false (Here, the string value is getting change into number and then it is getting compared with the given no. 5)

__Comapring String and Boolean__

console.log("0" >= false); \
//Output: false (Here, the string value is getting change into number and then it is getting compared with the given boolean value false)

__Comapring Null and Number__

console.log(null > 0); \
//Output: false (Here, > sign is changing the Null value into number i.e. 0 and 0 > 0 will give false)

console.log(null == 0); \
//Output: false (Here, == can't change the Null because {>,<,>=,<=} & {==} behave differently)

console.log(null >= 0); \
//Output: true (Here, >= made the Null change into 0 and then 0 >= 0 so yeah that's true)

__Comapring Undefined and Number__

console.log(undefined > 0);  //Output: false \
console.log(undefined == 0); //Output: false \
console.log(undefined >= 0); //Output: false \
//All three outputs were false because undefined can't change into number in these situations.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

# Data types of javascript summary

__JavaScript__ is a dynamically typed language. This means that variables do not have to be declared with a specific type, and their type can change at runtime.

var x=0; /*var have no type */ \
x="hello"; /*values have types */ \
console.log(x); /*var changes type dynamically */

PRIMITIVE :
- string => string
- number => number
- boolean => boolean
- null => null
- undefined => undefined
- symbol => symbol
- bigint => bigint

NON PRIMITIVE (Reference) :
- array => object
- object => object
- function => function

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


# Lecture 5: Stack and Heap memory in javascript
Datatypes are based on memory allocation

__Primitive datatypes__ \
call by value (string,number,boolean,null,undefined,BigInt,symbol) -> __Stack memory__

__Reference/Non primitive datatypes__ \
call by reference (array,object, function) -> __heap memory__

__Primitive datatype__ goes in stack memory; and it provides copy of that element. So when we change something (through assigned variable) it gets changed in copy of element not in original.

__Non primitive datatype__ get stored in HEAP memory; and it gives reference value to assigned elements. So when assigned variable makes changes it changes the both values(original and assigned one. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop

# Lecture 6: Strings in javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

# Lecture 7: Numbers and Maths in javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

# Lecture 8: Date and Time in javascript
__Date:__ Date is an object in javascript.\
__JavaScript__ stores dates as number of milliseconds since January 01, 1970

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

# Lecture 9: Arrays in javascript
- JavaScript arrays are resizable and can contain a mix of different data types.
- JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers as indexes.
- JavaScript arrays are zero-indexed: the first element of an array is at index 0.
- JavaScript array-copy operations create shallow copies.

__Shallow Copy__ A shallow copy of an arrays or object is one where they both have the same reference in memory. Array/object values are copied by reference instead of by value. As a result, when you change either the source or the copy, you may also cause the other object to change too.

__Deep Copy__ A deep copy of an arrays or object is one where they both have the different reference in memory. Array/object values are copied by value instead of by reference. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

__Array Methods__
- push - insert element to the end of an array
- pop - removes last element of an array
- unshift - insert element at the start of an array
- shift - removes first element of an array
- join - adds all elements of an array to string
- slice - returns a copy of a section of an array with in a provided range
- splice - removes an elements from an original array and returns new array of removed elements.
- concat - combine two or more arrays and retuns new array without modifying existing array
- flat - returns new array with all sub-array element concatinated into specified depth
- isArray - check if provided argument is array or not
- from - create an array from argument
- of - returns new array from set of elements

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

# Lecture 10: Objects in javascript
Their are 2 ways to declare objects
1. Construtor method - const marvelUser = new Object() //Singleton object
2. Literals method - marvelUser = {} //Non-Singleton ojject

__Object Methods__
- assign - Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
- keys - Returns the names of the enumerable string properties and methods of an object.
- values - Returns an array of values of the enumerable properties of an object.
- entries - Returns an array of key/values of the enumerable properties of an object.
- hasOwnProperty - Determines whether an object has a property with the specified name.
- freeze - Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

__Object Destructuring__ is used to make it easy to create variables from an object's properties.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

# Lecture 11: Functions
Types of functions
- Function declaration traditional way \
  function functionName(){}
- Function Expression \
  const functionName = function(){}
- Immediately Invoked Function Expressions \
  (function () {})();
  (function functionName(){ })(); //Named IIFE
- Arrow function \
  const functionName = () => {}; \
  const functionName = (param1, param2) => param1 + param2; \
  const functionName = (param1, param2) => (param1 + param2); \
  const functionName = () => ({name: "YourName"}); \
  (() => {})(); //IIFE

In Arrow function if we use {} then we have to use return, but if () used then return not needed.\

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

# Lecture 12: Scopes
https://developer.mozilla.org/en-US/docs/Glossary/Scope

# Lecture 13: Immediately Invoked Function Expressions (IIFE)
IIFEs are used in JavaScript for several reasons:

- __Prevent global pollution__: Variables and functions inside stay private, avoiding conflicts with other code.
- __Create modules__: Encapsulate code to organize and isolate functionality.
- __Run code immediately__: Useful for initialization tasks or ensuring execution on page load.
- __Control 'this' behavior__: Bind 'this' explicitly within the IIFE for specific scenarios.

(function () {})();
(function functionName(){ })(); //Named IIFE
(() => {})(); //IIFE

If you want to write two IIFE in file. Then add semicolon(;) at the end of first IIFF \
(function () {})();
(function functionName(){ })();