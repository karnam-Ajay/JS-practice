const name = 'Ajay';
const repos = 4;

//console.log(name + repos + 'github');  //old way.

//console.log(`My name is ${name} my github repo count is ${repos}`); 
//modern way.

// string defining

const str = new String('karnamajay');   
// it gives advtage of more methods.

// console.log(str.toUpperCase());
// console.log(str.charAt(3));
// console.log(str.indexOf('j'));

const newStr = str.substring(0,4); // it will not include last index.
//console.log(newStr);

const sliceStr = str.slice(-10,6); 
// -10 means it will start counting form the end.

//console.log(sliceStr);

const trimStr = ' karnamAjay ';
//console.log(trimStr)
//console.log(trimStr.trim());  // trim removes leading and trailing spaces.

const replStrurl = 'https://you-tube.com';

// console.log(replStrurl.replace('-','%20'));
// console.log(replStrurl.includes('tbe'));

const spltStr = 'karnam-ajay';

//console.log(spltStr.split('-')) 
// converts string to array based condition we give, here i gave based on "-".

