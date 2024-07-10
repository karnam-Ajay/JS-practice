const accountId = 12342;
let accountEmail = "ajay@gmail.com";
var accountPass = "ajay1234";
accountCity = "Hyderabad";

let accountState;

accountEmail = "aj@gmail.com";
accountPass = "ajay321";
accountCity = "Goa";

//  prefer not to use "var" because of block scope and functional scope issue

console.table([accountId,accountEmail,accountPass,accountCity,accountState]);
