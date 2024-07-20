// Date

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);   // object

let myCreatedDate = new Date(1997,6,12);  // creating our own date
// console.log(myCreatedDate.toDateString());

let indDate = new Date("07-20-2024")  // indain format
// console.log(indDate.toLocaleString());

let nowDate = Date.now();  
//console.log(nowDate);
 // it is value in milli secs from 1970 jan 1st.
// console.log(indDate.getTime()) 
// gives value in milli secs form 1970 1st jan 


// present date in secs.
//console.log(Math.floor(Date.now()/1000));

myDate.toLocaleString('default',{
    weekday:"long"
});