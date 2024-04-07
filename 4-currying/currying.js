// Q1. Implement sum(5)(6);

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(sum(5)(6));

// Q2 : implement mul(2)(3)(5)

// function mul(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// console.log(mul(2)(3)(5));

// Q3. Make this work :
// evaluate("sum")(1)(2)
// evaluate("mul")(4)(8)
// evaluate("divide")(30)(3)
// evaluate("substract")(40)(2))

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation == "sum") return a + b;
//       if (operation == "mul") return a * b;
//       if (operation == "divide") return a / b;
//       if (operation == "substract") return a - b;
//     };
//   };
// }

// console.log(evaluate("sum")(1)(2));
// console.log(evaluate("mul")(4)(8));
// console.log(evaluate("divide")(30)(3));
// console.log(evaluate("substract")(40)(2));

// Q4 . Infinite currying sum(1)(2)() & sum(3)(4)(6) should both work for this implementation

// Hint : use recursion

// function sum(a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// }

// console.log(sum(1)(2)());
// console.log(sum(3)(4)(6)());

// Q5. Difference between currying & partial application

// Example of partial application is as follows
// sum(1)(4, 5);

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// console.log(sum(1)(4, 5));
// or
// const x = sum(1);
// console.log(x(4, 5));

// Q6. Real world application of currying

// function updateElementText(id) {
//   return function (content) {
//     document.getElementById("#" + id).textContent = content;
//   };
// }

// const updatedHeader = updateElementText("heading");
// updatedHeader("Hello World");

// Q7 : Currying Implementation (convert f(a,b,c) to f(a)(b)(c))

// function curry(func) {
//   return function curriedFunc(...args) {
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return function (...next) {
//         return curriedFunc(...args, ...next);
//       };
//     }
//   };
// }

// const sum = (a, b, c, d) => a + b + c + d;

// const totalSum = curry(sum);

// console.log(totalSum(1)(5)(6)(6));
