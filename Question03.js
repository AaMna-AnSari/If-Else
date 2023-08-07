//  Write a js program to check whether a number is negative, positive or zero.
function checkNumber(number) {
  if (number > 0) {
    return `${number} is positive`;
  } else if (number < 0) {
    return `${number} is negative`;
  } else if (number == 0) {
    return `${number} is Zero`;
  }
}

let number = 18;
console.log(checkNumber(number));
