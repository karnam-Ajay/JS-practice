
                     // OBJECT LITERALS

const user = {
    userName:"Ajay",
    loginCount:5,
    isLoggedIn:true,
    getUserDetails:function(){
        //console.log("get user details from database");
        console.log(`userName: ${this.userName}`);
        // "this" keyword specifies the current object or current context of username
        
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());

// console.log(this) // this will give empty paranthesis {}

// ** but when we run console.log(this) in browser we will get window object which is global object


                    // Constructor Function

// with single object literal we can create multiple instances with constructor functions

// here NEW keyword is used to create new context.

// const promise1 = new Promise();
// const date = new Date()

function Testuser(userName,loginCount,isLoggedIn){
    this.userName = userName;   
    // here left value is varible and right side is value passing from method.
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;  // even if we do not return this we will get the values explicitly.
}

const userOne = new Testuser("Vijay",13,true);
const userTwo = new Testuser("virat",18,true)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor); // it will give reference to particular function


 
// 1. Whenever we use NEW keyword it will create a new empty object which is called as an Instance
// 2. Constructor method will be called and it will take all arguments passed.
// 3. with "This" keyword arguments will be assigned to variable
// 4. Finally we will get the function values.
