const accountId = 12345
let accountEmail = "akash@akash.com"
var accountPassword = "password"
accountCity = "Pune"
let accountState;

//accountId = 6789 //not allowed

console.log(accountId);

/*
Prefer not ot use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])