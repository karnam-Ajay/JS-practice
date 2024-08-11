// for each loop

const demoArr = ["Sindhu","Manu","Neeraj","Aman"];

// demoArr.forEach(function (arrVals) {
//     console.log(arrVals);
// });

//forEach loop can print three params item,index,arr see below code

demoArr.forEach((item,index,arr)=>{
    //console.log(item,index,arr); prints value, index and total arr.

// Sindhu 0 [ 'Sindhu', 'Manu', 'Neeraj', 'Aman' ]
// Manu 1 [ 'Sindhu', 'Manu', 'Neeraj', 'Aman' ]
// Neeraj 2 [ 'Sindhu', 'Manu', 'Neeraj', 'Aman' ]
// Aman 3 [ 'Sindhu', 'Manu', 'Neeraj', 'Aman' ]
});


// printing values from database with arrofObj.

const arrObj = [
    {
        playerName:"Virat",
        game:"Cricket"
    },
    {
        playerName:"Neeraj",
        game:"Javelin"
    },
    {
        playerName:"Sunit",
        game:"football"
    }
];

// output with forEach loop
arrObj.forEach(
    (item)=>{
        //console.log(`${item.playerName} plays ${item.game}`);
        // Virat plays Cricket
        // Neeraj plays Javelin
        // Sunit plays football
    }
);

// forEach will not return anything.

let result = arrObj.forEach(
    (item)=>{
        //console.log(item);
        return item;
    }
);
//console.log(result); // undefined.
