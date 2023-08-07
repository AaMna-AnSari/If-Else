//  Write a js program to check whether a number is divisible by 5 and 11 or not.

function checkNumber(number) {
  if (number % 5 === 0 && number % 11 === 0) {
    return `${number} is divisible by 5 and 11`;
  } else {
    return `${number} is not divisible by 5 and 11`;
  }
}

// test the function

let num = 6;
console.log(checkNumber(num));
