//if

let temperature = 41;

// if(temperature === 42){  // === it checks type and value
//     console.log("temp less than 50");
// }
// else{
//     console.log("temp greater than 50");
// }


// <,>,<=,>=,==(only compares the value), ===(compares val and type).


// scope 

// let score = 200;

// if(score > 100){
//     const power = 'fly';
//     console.log(`user power: ${power}`);
// };

// console.log(`${power}`);  // will throw error since power block scoped 


const userLogged = true;
const debitCard = true;

// if (userLogged && debitCard) {
//     console.log("user can buy courses");  
// }

const loggedInwithGoogle = true;
const loggedInwithEmial = false;

if (loggedInwithGoogle || loggedInwithEmial) {
    console.log("user logged in");
    
}