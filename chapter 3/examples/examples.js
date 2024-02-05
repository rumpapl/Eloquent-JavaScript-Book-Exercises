// Arrow Function ()=>

const horn = () => {
  console.log("Toot");
};
horn();

const hornTwo = () => console.log("Toot");

hornTwo();

// the call stack
// function chicken() {
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// console.log(chicken() + "first call");   **Output: => RangeError: Maximum call stack size exceeded
