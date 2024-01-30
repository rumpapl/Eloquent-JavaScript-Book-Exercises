// my solution

for (let index = 0; index < 8; index++) {
  let str = "";
  for (let count = 0; count < index; count++) {
    str += "#";
  }
  console.log(str);
}

console.log("------Book Solution------");

for (let index = "#"; index.length < 8; index += "#") {
  console.log(index);
}
