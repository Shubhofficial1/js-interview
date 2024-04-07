// Hoisting is a feature in js that involves moving all variable/fucntion decleration to the top of lexical scope

// Var variable is hoisted to the top & its value become undefined, whereas let & const keyword gives reference error if accessed before initialization. The area between the decleartion of let/const variable & initialization is called temporal dead zone since it can't be accessed in that region.

// eg:

// fn();
// function fn() {
//   var a = 10;
//   console.log(a);
// }
// console.log(b);
// var b = "hello";
// OP: 10;
// undefined;

// Q1 .What will be the output

// var x = 21;

// var fun = function () {
//   console.log(x);
//   var x = 20;
// };

// fun();

// OP: undefined;

// Q2.  Difference between params & arguments

// function square(num) {
//   return num * num;
// }

// console.log(square(4));

// Above : num is the params & 4 is the argument.

// Q3. OP Based question

// const fn =(a,...rest,x,y)=>{
//     console.log(x,y);
// }

// fn(1,2,3,4);

// Op : rest parameter will always be at the last

// Q4. Diff between spread & rest parameter

// Spread:

// spread is used to spread values out of an array. it is usually used to combine 2 arrays.used anywhere
// eg :

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2];
// console.log(combined);

// While rest parameter is used mostly as function parameter to collect arguments.
// Rest combined elements into array. Only be used at last position in params
// For eg : function log(a,b,...rest){
//          console.log(a,b,rest)
// }
// log(1,2,3,4);

// Callback fn : a callback function is a function passed into another fun as an argument , which is then invoked inside the outer function to complete some kind of routing /action
// Eg  : setTimeout, filter , reduce ,map, addEventListeners
