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