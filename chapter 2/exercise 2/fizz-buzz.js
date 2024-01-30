for (let index = 1; index <= 100; index++) {
  let str = "";
  if (index % 3 === 0) {
    str += "Fizz";
  }
  if (index % 5 === 0) {
    str += "Buzz";
  }
  console.log(str || index);
}

// -----Book Solution --------

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }
