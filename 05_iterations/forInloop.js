// loop with objects

let myObject = {
    1:'Gold',
    2:'Silver',
    3:'Bronze'
};

// to loop objects we can use for in loop.

for (const key in myObject) {
    //console.log(`${key} means ${myObject[key]} medal`);
};


let forInarr = [1,2,3,4,5];

for (const key in forInarr) {
    //console.log(key);  
    // if we print keys with for in loop it will print keys of an array, but with for of loop if we print keys of an array it will print values.
}