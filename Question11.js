// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics, and Computer. Calculate percentage and grade according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// inner function
function getPercentage(num1, num2, num3, total) {
  let sum = num1 + num2 + num3;
  let percentage = (sum * 100) / total;
  return percentage;
}

//  outer function

function getGrade(num1, num2, num3, total) {
  let Per = getPercentage(num1, num2, num3, total);
  if (Per >= 90) {
    return "Grade A";
  } else if (Per >= 80) {
    return "Grade B";
  } else if (Per >= 70) {
    return "Grade C";
  } else if (Per >= 60) {
    return "Grade D";
  } else if (Per >= 50) {
    return "Grade E";
  } else if (Per >= 40) {
    return "You are Fail";
  }
}

// testing
let num1 = 60;
let num2 = 80;
let num3 = 40;
let total = 300;
console.log(getGrade(num1, num2, num3, total));
