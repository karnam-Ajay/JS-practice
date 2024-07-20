let indTeam = ["Virat","Rohit","Hardik"];
let ausTeam = ["Head","Warner","Marsh"];

//indTeam.push(ausTeam);

// above code will give push 2nd arr inside 1st arr at last index like below.
//[ 'Virat', 'Rohit', 'Hardik', [ 'Head', 'Warner', 'Marsh' ] ]

// console.log(indTeam);

let mixedTeam = indTeam.concat(ausTeam);  
// it will return new arra by adding 2 arrays
// console.log(mixedTeam);


//  SPREAD OPERATOR
let spredOp = [...indTeam,...ausTeam];  // joins two or more arrays
// console.log(spredOp);


// Flat method.
let fltArr = [1,2,3,[4,5,6],[8,6,[2,3]],7,4];

let fltArr2 = fltArr.flat(Infinity); // will merge all subarrays in single arr.
// console.log(fltArr2);

let isArr = Array.isArray("Ajay");
let isArr2 = Array.from("Ajay");  // Creates an array from an iterable object.

// console.log(isArr);
// console.log(isArr2);

// console.log(Array.from({name:"Ajay"}));  // []
// it will NOT convert into arr, we need to specify is it for key or value?

let score1 = 100;
let score2 = 200;
let score3 = 300;

let arrGroup = Array.of(score1,score2,score3);  // makes arr with diff variables.
// console.log(arrGroup);