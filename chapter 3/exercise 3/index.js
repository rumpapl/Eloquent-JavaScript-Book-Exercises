function countChar(str, char) {
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === char) count += 1;
  }
  return count;
}

console.log(countChar("ABOUT", "T"));
console.log(countChar("bbc", "b"));
console.log(countChar("BBC", "C"));
console.log(countChar("BBC", "B"));

console.log("-----------------");

function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("ABOUT"));
console.log(countBs("bbc"));
console.log(countBs("BBC"));
