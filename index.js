// *****
// ****
// ***
// **
// *
// let n = 5;
// let star = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = n - i + 1; j > 0; j--) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);

// 1
// 12
// 123
// 1234

// const r = 5;
// for (let i = 1; i <= r; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     if (i % 2 !== 0) {
//       line += String.fromCharCode(64 + j);
//     } else {
//       line += j;
//     }
//   }
//   console.log(line);
// }

// const n = 4;

// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= n; j++) {
// if (i == 1 || j == 1 || i == n || j == n) {
//       line += "*";
//     } else {
//       line += "_";
//     }
//   }
//   console.log(line);
// }

// ___####
// __####
// _####
// ####
// const n = 4;

// for (i = 1; i <= n; i++) {
//   let line = "";
//   for (j = i; j < n; j++) {
//     line += "_";
//   }
//   for (let k = 1; k <= n; k++) {
//     line += "#";
//   }
//   console.log(line);
// }

// ***A
// **AB
// *ABC
// ABCD
// const n = 4;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = i; j < n; j++) {
//     str += "*";
//   }
//   for (let k = 1; k <= i; k++) {
//     str += String.fromCharCode(64 + k);
//   }
//   console.log(str);
// }

// const n = 5;
// let counter = 1;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += counter + " ";
//     counter += 2;
//   }
//   console.log(str);
// }

// *___*
// _*_*_
// __*__
// _*_*_
// *___*
// const n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       str += "*";
//     } else {
//       str += "_";
//     }
//   }
//   console.log(str);
// }

// ____*
// ___**
// __***
// _****
// *****
// const n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";

//   for (let j = 1; j <= n; j++) {
//     if (j <= n - i) {
//       str += "_";
//     } else {
//       str += "*";
//     }
//   }

//   console.log(str);
// }

// 0
// 10
// 010
// 1010
// 01010
// const n = 5;
// let a = 0;

// for (let i = 1; i <= n; i++) {
//   let ptr = "";

//   for (let j = 1; j <= i; j++) {
//     if ((j + i) % 2 == 0) {
//       ptr += 0;
//     } else {
//       ptr += 1;
//     }
//   }
//   console.log(ptr);
// }

// ____*____
// ___***___
// __*****__
// _*******_
// *********
// const n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n * 2 - 1; j++) {
//     if (j >= n - i + 1 && j <= n + i - 1) {
//       str += "*";
//     } else {
//       str += "_";
//     }
//   }

//   console.log(str);
// }

// ____*____
// ___*_*___
// __*___*__
// _*_____*_
// *********
// const n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= 2 * n - 1; j++) {
//     if (j === n - i + 1 || j === n + i - 1 || i===n) {
//       str += "*";
//     } else {
//       str += "_";
//     }
//   }

//   console.log(str);
// }

// const n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";

//   for (let k = 1; k <= n - i; k++) {
//     str += " ";
//   }

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     if (j % 2 !== 0) {
//       str += "*";
//     } else {
//       str += "_";
//     }
//   }

//   console.log(str);
// }

// ****#
// ***###
// **#####
// *#######
// #########

// const n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n - i; j++) {
//     str += "*";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     str += "#";
//   }
//   console.log(str);
// }

// ____1
// ___121
// __12312
// _1234123
// 123451234
// const n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n - i; j++) {
//     str += "_";
//   }
//   for (let k = 1; k <= i; k++) {
//     str += k;
//   }
//   for (let l = 1; l < i; l++) {
//     str += l;
//   }
//   console.log(str);
// }

// const n = 9;
// let ml = Math.ceil(n / 2);

// for (let i = 1; i <= ml; i++) {
//   let str = "";
//   for (let j = 1; j <= ml - i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k % 2 !== 0) {
//       str += "#";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

// for (let i = ml - 1; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= ml - i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k % 2 !== 0) {
//       str += "#";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

// const n = 5;

// for (let i = n; i > 0; i--) {
//   let str = "";
//   for (let j = n; j > n - i; j--) {
//     str += "*";
//   }
//   console.log(str);
// }

// const n = 5;

// let i = 1;
// while (i <= n) {
//   let str = "";
//   let j = 1;
//   while (j <= n - i + 1) {
//     str += "*";
//     j++;
//   }
//   i++;
//   console.log(str);
// }

const n = 5;

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
