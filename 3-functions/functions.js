// function decleration
// eg :

// function square(num) {
//   return num * num;
// }

// console.log(square(5));

// // Function expressions

// const square1 = function (num) {
//   return num * num;
// };

// console.log(square1(4));

// First Class Functions

// In a language like js where function can be treated as varaibles , those functions are called first class functions
// Eg:

// function square(num) {
//   return num * num;
// }

// function displayName(fn) {
//   console.log("Square is : " + fn);
// }

// displayName(square(6));

// IIFE - immediately invoked function expression

// eg:
// (function square(num) {
//   console.log(num * num);
// })(2);

// eg:
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

// OP: 1 - 1 is there due to closure

// Output based question
// Q1
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1 * 1000);
// }

// OP:
// 0;
// 1;
// 2;
// 3;
// 4;

// Q2
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1 * 1000);
// }

// Op :
// 5;
// 5;
// 5;
// 5;
// 5;
