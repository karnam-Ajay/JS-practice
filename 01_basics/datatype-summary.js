// Primitive dataypes:

// generally datatypes are divided based on 
// memory management.
// here primitive means "call by value"
// "call by value" means the datatype or variable gives us only 
// copy of value but the memory address of the variable.

// 7 types: string,number,boolean,null,undefined,
// bigInt,symbol.

const score = 100;  // number
const scoreDeci = 100.4; 
const isLoggedIn = false;  // boolean
const heat = null;   // null
let user;  // undefined

const id = Symbol('123');  //symbol
const anotherId = Symbol('123'); //symbol

console.log(id === anotherId)

const bigInt = 23849218387235n  // bigInt

// Reference (Non primitive) datatype:
// it will gives us the memory reference of the variable.

// types: Array,Objects,functions

const indTeam = ["rohit","virat","bumrah"];
const myObj = {
    name:"ajay",
    age:27
}

const myFunction = function(){
    console.log("Hello!");
}

// return type of all Non-primitive datatypes is "object"
// and datatype of all Non-primitive datatypes is "function"