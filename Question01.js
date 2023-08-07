// 1. Write a js program to find the maximum between two numbers.

function maxNum(a, b) {
  if (a > b) {
    return `${a}  is the maximum number.`;
  } else {
    return `${b}  is the maximum number`;
  }
}

let a = 10;
let b = 2;
console.log(maxNum(a, b));
