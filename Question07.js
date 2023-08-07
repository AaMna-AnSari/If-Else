//  Write a js program to input any alphabet and check whether it is vowel or consonant.
// using switch statement
let checkAlphabet = (alphabet) => {
  switch (alphabet) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return `${alphabet} is Vowel`;
    default:
      return `${alphabet} is consonant`;
  }
};

// testing

let alphabet = "u";
console.log(checkAlphabet(alphabet));
