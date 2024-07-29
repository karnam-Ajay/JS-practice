// this and arrow functions
// this refers to current context of the value to a function or a variable
const userObj = {
    userName:"Kohli",
    price:999,

    welcomeMessage:function (){
        console.log(`${this.userName}, welcome to website`);
        // console.log(this); // gives us current context
    }
};

// userObj.welcomeMessage(); // context here is userName = kohli;
// userObj.userName = "Ajay";
// userObj.welcomeMessage(); // context here is userName = Ajay;




// *******IMP for interviews *** //

// below log will give you empty object {} since we are in node environment.
// the global object inside browser is window
// window object nothing but we can all the events like click,formsubmit etc.,

// console.log(this);  


const chai = function(){
    let urName = "vijay";
    // console.log(this);  will give all access and info
    // console.log(this.urName);  will give undefined, we cannot access like this.
}

// chai();

const chaiArr = ()=>{
    const firstName = "Ajay";
    // console.log(this.firstName);  // undefined
    // console.log(this);   // {}
}

// chaiArr();




// basic arrow function

const addTwo = (n1,n2) =>{
    return n1 + n2;
};

// Implicit return (no need to write return)

const addTwo1 = (n1,n2) => n1 + n2;
// or we can write

const addTwo2 = (n1,n2) => (n1 + n2);  //used in REACTJS

const objPrint = () => ({lastName:"Karnam"}); // to print object

// console.log(addTwo(2,4));

// console.log(addTwo1(2,4));

// console.log(addTwo2(2,4));

// console.log(objPrint());
