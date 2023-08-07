//  Write a js program to input the month number and print the number of days in that month.

function numberDay(number) {
  switch (number) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return "This month have 31 days";
    case 4:
    case 6:
    case 9:
    case 11:
      return "This month have 30 days";
    case 2:
      return "This month have 28 days";
  }
}

let number = 2;
console.log(numberDay(number));
