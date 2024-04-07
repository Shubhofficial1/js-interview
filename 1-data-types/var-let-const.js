//  var let const
//                                  var                 let                 const
// Scope                            Function/Global     Block               Block
// Updated & redecleration          Updated : yes       Updated : yes       Updated : NO
//                                  Redeclared : Yes    Redeclared : No     Redeclared:NO
// Initialization                   Declared Without    Declared Without    Declared Without
//                                  Init : Yes          Init : Yes          Init : No
// Access                           Undefined           Reference error     Missing init
// Hoisting                         Hoisted             Hoisted But Tdd     Hosited But Tdd

// Variable shadowing

// function test() {
//   let a = 10;
//   {
//     let a = "shubham";
//     console.log(a);
//   }
//   console.log(a);
// }

// test();

//Op:   shubham
//      10

// function test1() {
//   var b = 10;
//   {
//     let b = "shubham";
//     console.log(b);
//   }
//   console.log(b);
// }

// test1();

//Op:   shubham
//      10

// function test2() {
//   var c = 10;
//   {
//     var c = "shubham";
//     console.log(c);
//   }
//   console.log(c);
// }

// test2();

// OP : shubham
//      shubham

// Illegal Shadowing

// function test3() {
//   let d = 10;
//   {
//     var d = "shubham";
//     console.log(d);
//   }
//   console.log(d);
// }

// test3();

// OP : Identifier 'd' has already been declared

// Hoisting

// console.log(a); //undefined
// var a = 10;

// console.log(a); //reference error
// let a = 10;

// console.log(a); //reference error
// const a = 10;

// TDD - temporal dead zone

// Portion of code after let/const is in scope but not declared;
