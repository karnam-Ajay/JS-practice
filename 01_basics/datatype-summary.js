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


//------------------------------------------------------------

// Stack memory(primitive datatypes stored) --> it gives copy of value.

let myYoutube = 'techsavour';

let anotherchnl = myYoutube;

anotherchnl = 'karnamajay';  // so here copy of orginal value is given,  
 //but original value remains same

console.log(myYoutube);
console.log(anotherchnl);

// Heap memory(Non-primitive datatypes stored)--> it gives reference of 
//original value from memory

const firstUser = {
    email:'karnam@google.com',
    age:27
}

const secondUser = firstUser;

secondUser.email = 'ajay@google.com';

console.log(firstUser.email);
console.log(secondUser.email);

//In Non-primitive datatype we will be able to change the original value
// whereas in primitive datatype we can change only copy of value.