const accountId = 12345
let accountEmail = "nisarg555@leak.com"
var accountPassword = "12345678"
accountCity = "Mumbai"
let accountState ;
// accountId = 54321 // not allowed.

accountEmail = "hajkkjbjd@bskajb.com"
accountCity = "Pune"
accountPassword = "87654321"

console.log(accountId);

/*
Prefer not to use var because of issues in function scope and block scope.
*/

console.table([accountEmail, accountCity, accountPassword, accountState]);