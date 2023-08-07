// . Write a js program to find the maximum between three numbers.
function maxNum(a, b, c) {
  if (a > b) {
    return `${a}  is the maximum number.`;
  } else if (b > c) {
    return `${b}  is the maximum number`;
  } else if (c > a) {
    return `${c}  is the maximum number`;
  }
}

let a = 1;
let b = 2;
let c = 3;
console.log(maxNum(a, b, c));
