//Singleton object --> Object.Create 
//when we create obj inside constructor then it is singleton obj.

// +++++  Object literals ++++++++

const mySym = Symbol("key1");

const userObj = {
    name:"ajay",
    age:27,
    [mySym]:"symValue",            // syntax to use symbol inside an object
    "full name":"karnam ajay",
    email:"karnamajay@gmail.com",
    location:"Hyderabad",
    isLoggedIn:false,
    loginDays:["Monday","Tuesday"]
}

// two ways to acces object values.
// console.log(userObj.email); 
// console.log(userObj["full name"]);  // correct way because key is in string format.

// console.log(userObj[mySym]);    // printing symbol value from obj.

userObj.email = "karnamajay@ybl.com";
// Object.freeze(userObj);    freezing object means we cannot change any value in obj.

// console.log(userObj);
userObj.email = "karnamajay@okicici.com";
// console.log(userObj);


// function inside object 

userObj.greeting = function() {
console.log("Hello user!!");
}

userObj.greetingTwo = function() {
    console.log(`Hello user, ${this.name}`);
    }
    

// console.log(userObj.greeting);   
// functn not executed just will return reference.

// console.log(userObj.greeting());   // printing message function from object.
// console.log(userObj.greetingTwo());  // by using "this" keyword.
