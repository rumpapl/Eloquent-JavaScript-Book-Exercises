// console.log("----solution one----");
// let size = 8;
// for (let row = 0; row < size; row++) {
//   let str = "";
//   if (row % 2) {
//     for (let col = 0; col < size; col++) {
//       if (col % 2 === 0) {
//         str += " ";
//       } else {
//         str += "#";
//       }
//     }
//   } else {
//     for (let col = 0; col < size; col++) {
//       if (col % 2 === 0) {
//         str += "#";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   console.log(str);
// }

// console.log("----solution two----");
// let size = 20;
// for (let row = 0; row < size; row++) {
//   let str = "";
//   for (let col = 0; col < size; col++) {
//     if ((col + row) % 2 === 0) {
//       str += " ";
//     } else {
//       str += "#";
//     }
//   }
//   console.log(str);
// }

// console.log("----solution three----");
// let size = 30;
// let str = "";
// for (let row = 0; row < size; row++) {
//   for (let col = 0; col < size; col++) {
//     if ((row + col) % 2 === 0) {
//       str += " ";
//     } else {
//       str += "#";
//     }
//   }
//   str += "\n";
// }
// console.log(str);

console.log("----solution four----");
const size = 8;
let str = "";
if (size % 2 === 0) {
  evenRow = "";
  oddRow = "";
  for (let index = 0; index < size; index++) {
    if (index % 2 === 0) {
      evenRow += " ";
      oddRow += "#";
    } else {
      evenRow += "#";
      oddRow += " ";
    }
  }

  for (let count = 0; count < size; count++) {
    if (count % 2 === 0) {
      str += evenRow;
    } else {
      str += oddRow;
    }
    str += "\n";
  }
} else {
  for (let index = 0; index < size * size; index++) {
    if (index % 2 === 0) str += " ";
    else str += "#";
    if ((index + 1) % size == 0) str += "\n";
  }
}

console.log(str);
