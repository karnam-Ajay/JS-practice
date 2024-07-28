
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


// taking multiple values in function args

function calculateItemsPrice(...total){   // rest operator
    return total;  // puts all values in an array.
};

//  console.log(calculateItemsPrice(200,300,500)); 


// rest operator with multiple variables.
function calculateItemsPrice2(val1,val2,...total){   
    return total;  // puts all values in an array.
};

//console.log(calculateItemsPrice2(200,300,500,1500));  

// val1 = 200,val2 = 300, total = [500,1500];


// Passing object in a function

const demoObj = {
    username:"Ajay",
    price:199
};

function funObj(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
};

// funObj(demoObj);

// passing object in args

// funObj(
//     {
//         username:"vijay",
//         price:399
//     }
// );



// passing array values in function.

const myfuncArr = [200,400,300,500];

function myfuncArray(getArr){
    return getArr[2];
}

// console.log(myfuncArray(myfuncArr));
//console.log(myfuncArray([600,300,200,700]));  passing directly in args.