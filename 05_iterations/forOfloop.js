// for of

// ["","",""]
// [{},{},{}]

let numArr = [1,2,3,4,5];

for (const nums of numArr) {
   // console.log(`number is ${nums}`);
}

let myStr = "Ajay";

for (const str of myStr) {
   // console.log(`char is ${str}`);
}


// Map : it is an object holds data in key-value pairs, stores only unique values, and follows order.

let myMap = new Map();

myMap.set('IN',"India");
myMap.set('CH',"China");
myMap.set('UK',"United Kingdom");

for (const [key,value] of myMap) {
    // console.log(key,':',value);
    //console.log(key);
    
}

// printing object with for of loop.

let myObj = {
    'game1':'cricket',
    'game2':'football'
};

// for (const [key,value] of myObj) {
//     //console.log(key,":",value);  // can't print object with for of loop.
// }

