//  Write a js program to check whether a year is leap year or not.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 === 0) || year % 400 === 0) {
    return `${year} is leap year`;
  } else {
    return `${year} is not leap year`;
  }
}

// testing

let year = 2024;
console.log(isLeapYear(year));
