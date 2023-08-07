// . Write a js program to input the week number and print weekday.

//  switch case
function weekDay(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "No exited";
  }
}
// testing
let day = 7;
console.log(weekDay(day));
