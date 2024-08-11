
let testArr = [1,2,3,4,5,6,7,8,9,10];

// FILTER
// it will return new array with the items which satisfy the condition.

// const res = testArr.filter((num)=> num > 4);
// console.log(res);

let newArr = [];
 testArr.filter((nums)=>{
    if(nums > 4){
        newArr.push(nums);  // pushing into seperate array.
    }
});

// console.log(newArr);


let employees=[  
    {
        "name":"Shyam", "email":"shyamjaiswal@gmail.com","salary":23000
    },  
    {
        "name":"Bob", "email":"bob32@gmail.com","salary":24000
    },  
    {
        "name":"Jai", "email":"jai87@gmail.com","salary":21000
    }  
];

let res = employees.filter((emp)=> emp.salary > 23000);
let res1 = employees.filter((emp)=> {return emp.salary > 22000}) 

// have to use return if we open scope i.e., {}
// console.log(res1);

//map method
// map method will be applied on each element of an array returns new arr.
let arrMap = [1,2,3,4,5,6,7,8,9,10];

let res2 = arrMap.map((ar)=> ar*10);
// chaining: we can apply map method at a time.
let res3 = arrMap.map((ar)=> ar*10).map((ar)=>ar+1);
// console.log(res3);


// REDUCE

let numArr = [1,2,3,4,5];


let response = numArr.reduce((acc,curVal)=>{
    // console.log(`acc: ${acc} curVal:${curVal}`); 
    // acc: 0 curVal:1 // 0+1
    // acc: 1 curVal:2 // 1+2
    // acc: 3 curVal:3 // 3+3
    // acc: 6 curVal:4 // 6+4
    // acc: 10 curVal:5 // 10 +5
    return acc+curVal;  // 15
},0);

//console.log(response);

