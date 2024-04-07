// Arrow function are a consise way of writing function expressions in javascript.They were introduced in ecmascript version 6 & provided a more compact syntax as compared to traditional function decleration.

// const log = (x) => {
//   console.log(x);
// };

// log("hello world");

// Advantage over normal/traditional functions

// 1. Consise Syntax
// 2. Implicit return
// 3. Lexical "this " binding
// 4. No binding of argument object

// Output based questions

// let user = {
//   name: "Shubham",
//   rc1: () => {
//     console.log("Name is " + this.name);
//   },
//   rc2: function () {
//     console.log("Name is " + this.name);
//   },
// };

// user.rc1(); // undefined since arrow function does point to the window object
// user.rc2(); // Shubham since this is a normal traditional function & thus pointing to user object
