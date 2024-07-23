
function addNums(num1,num2){
    // console.log(num1+num2);  // just printing o/p on console.

    return num1+num2; // function return happens like this.

    // console.log(num1+num2);  // nothing will be executed after return in functions
}

let res = addNums(2,4);  // Function execution
//  console.log(res);   

// const result = addNums(2,4);  // just printing o/p on console
// console.log(result);  

function isUserLogged(userName){
    if(!userName){                  
        console.log("please enter username");
        return      // to stop execution after this.
    }
    return `${userName} just logged in`
}

// console.log(isUserLogged());