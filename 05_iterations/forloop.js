// for loop

for(let i = 0;i <= 10; i++){
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");  // this will print first then no 5 will be printed
        
    }
   // console.log(element);   
}

// console.log(element);  // this will throw error since using element outside of its scope.

// nested for

for (let i = 1; i <=10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <=10; j++) {
        //console.log(`inner loop value ${j} outer loop value ${i}`);
        // console.log(i + "*" + j + "=" + i*j );  // prints tables for 1 to 10
    }
}


// for with arrays

const myArr = ["Neeraj","Sindhu","Bajrang"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    //console.log(element);
    
}


// for with some examples

// for (let i = 1; i <=20; i++) {
//     if (i == 5) {
//         console.log("5 is detected");
//         break;   // prints till 4 and comes out of the loop.
//     }
//     console.log(`value of i is ${i}`); 
// }

for (let i = 1; i <=20; i++) {
    if (i == 5) {
      //  console.log("5 is detected");
        continue;   // it will skip just one condition i.e., 5 will not print.
    }
  //  console.log(`value of i is ${i}`); 
}


