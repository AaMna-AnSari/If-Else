// . Write a js program to check whether a number is even or odd.

let checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
};
// testing
let num = 6;
console.log(checkEvenOdd(num));
