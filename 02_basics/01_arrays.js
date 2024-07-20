// arrays

const myarr = [0,1,2,3,4,5];
const myArr2 = ["one","two","three"];
const newarr = new Array();

//console.log(myarr[3]);

// array Methods

// myarr.push(6);  // adds element at the end of an array.
// myarr.push(7);  
// myarr.pop();  // removes element at the end of an array.
// console.log(myarr);

// myarr.unshift(9)  // adds element at the starting of an array.
// myarr.shift()    // removes element of starting index.
// console.log(myarr)

let newArray = myarr.join(); 
// it will join two arrays & converts into string format

// console.log(newArray);


// +++++++++++++++ slice and splice +++++++++++++++

console.log(myarr);

let sliceArr = myarr.slice(1,4);
console.log("slice Arr: ",sliceArr);  
console.log("org arr:",myarr);
// returns part of the array, will not include the end index. not effect org array

let spliceArr = myarr.splice(1,4);
console.log("splice Arr: ", spliceArr);
console.log("org arr:",myarr);

// returns part of the array, will include the end index. 
// removes the specified elements from original array.