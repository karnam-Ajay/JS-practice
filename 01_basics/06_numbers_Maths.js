const score = 49;
//console.log(score);

const balance = new Number(400); // making balance explicitly as number
//console.log(balance); 

//console.log(balance.toString().length);  
// we can convert it into string and apply diffnt methods like find length.

//console.log(balance.toFixed(2));
// To minimize the precision value we use toFixed() method.

const randomNum = 1123.896;
//console.log(randomNum.toPrecision(5));

// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits

const hundreds = 100000;
//console.log(hundreds.toLocaleString('en-IN')); // in indian stanrdard
// Converts a number to a string by using the current or specified locale

// ++++++++++++++++++++++++++ Math ++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(6.8));

console.log(Math.random()); // gives value b/w 0 to 1
console.log((Math.random() * 10) + 1); // shitfted left by 1 decimal.
console.log(Math.floor(Math.random() * 10 + 1)) // to get min value of 1.

// to find values b/w specified range.
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
