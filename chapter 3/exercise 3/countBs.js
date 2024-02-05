function countBs(str) {
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === "B") count += 1;
  }
  return count;
}

console.log(countBs("ABOUT"));
console.log(countBs("bbc"));
console.log(countBs("BBC"));
