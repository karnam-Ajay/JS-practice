// var c = 300;
let a = 300;

if(true){
    let a = 10;   // scope of a will be in the curly braces only
    const b = 20;
   // console.log("INNER: ",a);  
}

// console.log(a);




// scope in nested funcitons

function one(){
    const username = "Ajay";

    function two(){
        const platForm = "Youtube";
        console.log(username);
    }
    console.log(platForm);

    two();
}

// one();


// Scopes in if else conditions

if(true){
    let demoName = "maths ";
    if(demoName === "maths"){
        const teacher = "shyam";
        //console.log(demoName + teacher);
    }
   // console.log(teacher); // gives error since scope ends in 2nd if conditon
}

//console.log(demoName); // gives error since scope ends in first if conditon.




//++++++++++++++   function hoisting +++++++

//the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// console.log(addOne(9));  // this is mini hoisting.

function addOne(plusOne){
    return plusOne + 1;
};



// addTwo(5)  this will throw error, this type of declaration is not allowed.

const addTwo = function(plusTwo){
    return plusTwo + 2;
};