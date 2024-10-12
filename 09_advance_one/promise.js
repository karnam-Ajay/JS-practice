// promise : Promise object represents the eventual completion or failure of an async program or it's resulting value.

// creation of promise.
const promiseOne = new Promise(function(resolve,reject){
    // give any async task ex: getting data from db, network connection.
    setTimeout(() => {
        console.log('Async task is completed');
        resolve(); // need to declare to connect resolve() with then();
    }, 1000);
});

// resolve case
// .then() is directly connected to resolve method of promise mehtod.
promiseOne.then(function(){
    console.log('Promise Consumed');
})

// Method2 to create Promise.

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async 2');
        resolve()
    }, 1000);
}).then(function(){
    console.log('Async task2 completed');
});

// example 3

const dbPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            userName:"karnam ajay",
            emailId:"karnamajay@example.com"
        })
    },1000)
}).then(function(user){
console.log(user)
});

// promise with error handling

const errPromise = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if(!error){
        resolve({
            id:"Ajay",
            password:"Ajay@123!"
        });
    }
    else{
        reject("Error:Something went wrong");
    }
  },1000)
})

errPromise
.then((userDetails)=>{
    console.log(userDetails);
    return userDetails.password;
})
.then((userPassword)=>{
    console.log("userPassword in 2nd .then method",userPassword);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("Promise is either resolved or rejected"));

// Promise with async await and try catch

const asyncPromise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                id:"Vijay",
                password:"Vijay@123!"
            });
        }
        else{
            reject("Error:Something went wrong");
        }
      },1000)
});

async function consumePromise(){
    try {
        const res = await asyncPromise2;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
//consumePromise();

// realtime response with try catch

async function getUserDetails(){
    try {
        const res1 = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res1.json();
        console.log(data)
    } catch (error) {
        console("E:",error);
    }
}
//getUserDetails();


// realtime with promise i.e., fetch() gives us promise

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(resp){
    return resp.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=> console.log(err));