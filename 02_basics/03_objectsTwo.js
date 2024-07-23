// const singletonObj = new Object(); singleton object creation.

const instaUser = {};

instaUser.id = "ajay_karnam";
instaUser.name = "Ajay";
instaUser.isLoggedIn = false;

// console.log(instaUser);

const fbUser = {                  // object inside object.
    fullName:{
        completeName:{
            firstName:"karnam",
            lastName:"Ajay"
        }
    }
}

// console.log(fbUser.fullName.completeName.lastName);

const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"e",6:"f"};

const obj3 = Object.assign({},obj1,obj2); // merging obj1 and obj2 into new obj of {}.
// console.log(obj3);
const sprdObj = {...obj1,...obj2};   // by Using Spread operator.

// console.log(sprdObj);


// +++++ Getting keys & values from OBJS ++++++++++ //

const keysArr = Object.keys(instaUser);
// returns array with all keys of instaUser obj
// console.log(keysArr);

const valuesArr = Object.values(instaUser);
// returns array with all values of instaUser obj
// console.log(valuesArr);


// console.log(Object.entries(instaUser)); 
 // puts key-value pairs in seperate arr.
// [
//     [ 'id', 'ajay_karnam' ],
//     [ 'name', 'Ajay' ],
//     [ 'isLoggedIn', false ]
//  ]

// console.log(instaUser.hasOwnProperty('isLoggedIn'));
// to check whether property exists in obj.

//+++++ Objects destructuring ++++++//

const myCourse = {
    courseName:"JavaScript",
    teacher:"hitesh",
    courseId:"1232344"
}

const {courseName,teacher} = myCourse;
// like above we can use object destructuring.

console.log(courseName);
console.log(teacher);