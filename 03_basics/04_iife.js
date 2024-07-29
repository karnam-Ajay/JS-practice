// Immediately Invoked Function Expression
// To avoid global scope issue we use IIFE
// usecase: while connecting to db.

(function dbConnect(){
    console.log("db Connected");
})();  // *** Need to add ; if we run two IIFE


// with arrow function

((dbType) => {
        console.log(`${dbType} db connected`);
    })("postgresql")
