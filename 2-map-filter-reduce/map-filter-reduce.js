// Map function

// const nums = [1, 2, 3, 4];
// const mulByTwo = nums.map((num, i, arr) => num * 2);

// console.log(nums);
// console.log(mulByTwo);

// Filter function

// const nums1 = [1, 2, 3, 4, 5];

// const greatorThan2 = nums1.filter((num, i, arr) => num > 2);

// console.log(nums1);
// console.log(greatorThan2);

// Reduce function

// const nums2 = [1, 2, 3, 4, 5];

// const sum = nums2.reduce((acc, curr, i, arr) => acc + curr);

// console.log(nums2);
// console.log(sum);

// Map Polyfill

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i],i,this));
//   }
//   return temp;
// };

// const arr = [1, 2, 3, 4, 5];
// const mulByThree = arr.myMap((a) => a * 3);

// console.log(arr);
// console.log(mulByThree);

// Filter Polyfill

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }

//   return temp;
// };

// const arr1 = [1, 2, 3, 4, 5];
// const greatorThan3 = arr1.myFilter((a) => a > 3);

// console.log(arr1);
// console.log(greatorThan3);

// Reduce Polyfill

// Array.prototype.myReduce = function (cb, initialValue) {
//   var accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

// const arr2 = [1, 2, 3, 4, 5, 6];
// const sum = arr2.myReduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(arr2);
// console.log(sum);
