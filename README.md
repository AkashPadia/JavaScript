# JavaScript
A code repo for JavaScript while learning it.

# Lecture 1: Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.

# Main difference between Var vs Let vs Const

Var ::
Scope - Global, Local
Redeclaration && Reassignment - Yes/Yes
Hoisting - Yes with default value undefined

Let::
Scope - Global, Local, Block
Redeclaration && Reassignment - No/Yes
Hoisting - Yes without default value, reference error will come

Let::
Scope - Global, Local, Block
Redeclaration && Reassignment - No/No
Hoisting - Yes without default value, reference error will come

# Console types
console.table([group of variables you want to show in tabular form])

# Lecture 2: Datatypes and ECMA standards
number = 2 ^ 53
bigint = for large numbers
string = "assembly of characters"
boolean = true or false
null = stand alone value (type = object)
undefined = kindda place holder for a value which is not defined yet (type = undefined)
symbol = uniquness