
// // Task 1

// let arrA = [1, 2, 3];
// let arrB = [4, 5, 6];
// let arr = arrA.concat(arrB);
// console.log(arr);

// // Task 2

// let arrA = [1, 2, 3];
// console.log(arrA.reverse());

// // Task 3

// let arrA = [1, 2, 3];
// arrA.push(4, 5, 6);
// console.log(arrA);

// // Task 4

// let arrA = [1, 2, 3];
// arrA.unshift(4, 5, 6);
// console.log(arrA);

// // Task 5  

// let array = [`js`, `css`, `jq`];
// let firstEl = array.shift(); 
// console.log(firstEl);

// // Task 6

// let array = [`js`, `css`, `jq`];
// let lastEl = array.pop();
// console.log(lastEl);

// // Tasks 7 & 8

// let array = [1, 2, 3, 4, 5];
// let arrayNew = array.splice(3, 2);
// console.log(array);
// console.log(arrayNew);

// // Task9 

// let array = [1, 2, 3, 4, 5];
// array.splice(1, 2);
// console.log(array);

// //Task 10 

// let array = [1, 2, 3, 4, 5];
// array = array.slice(1, -1);
// console.log(array);

// //Task 11

// let array = [1, 2, 3, 4, 5];
// array.splice(3, 0, 'a', 'b', 'c');
// console.log(array);

// //Task 12

// let array = [1, 2, 3, 4, 5];
// array.splice(1, 0, 'a', 'b');
// array.splice(6, 0, 'c');
// array.push('e');
// console.log(array);

// //Task 13

// let array = [3, 4, 1, 2, 7];
// array.sort();
// console.log(array);

// //Task 14

// let array = [5, 6, 7, 8, 9];
// let sum = 0;
// array.forEach(function (item) {
//         sum += item;
// });

// console.log(sum);

// // Task 15

// let array = [5, 6, 7, 8, 9];

// array = array.map(function (item) {
//     return Math.pow(item, 2);
// });

// console.log(array);

// // Task 16

// let array = [1, -3, 5, 6, -7, 8, 9, - 11];

// array = array.filter(function (item) {
//     if (item < 0) return item;
// });

// console.log(array);

// // Task 17 

// let array = [1, -3, 5, 6, -7, 8, 9, - 11];

// array = array.filter(function (item) {
//     if (item % 2 === 0) return item;
// });

// console.log(array);

// //Task 18 

// let array = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

// array = array.filter(function (item) {
//     if (item.length > 5) return item;
// });

// console.log(array);

// // Task 19

// let array = [1, 2, [3, 4], 5, [6, 7]];

// array = array.filter(function (item) {
//     return Array.isArray(item);
// });

// console.log(array);


// //Task 20

// let array = [5, -3, 6, -5, 0, -7, 8, 9];
// let i = 0;

// array = array.map(function (item) {
//     if (item < 0) i++;
// });
// console.log(i);




