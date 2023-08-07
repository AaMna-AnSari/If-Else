//  Write a js program to check whether a character is uppercase or lowercase alphabet.
function checkCharacter(char, char) {
  if (char >= "A" && char <= "Z") {
    return `${char} Is upperCase alphabet`;
  } else if (char >= "a" && char <= "z") {
    return `${char} Is lowerCase alphabet`;
  }
}
// testing
let char1 = "c";
let char2 = "C";
console.log(checkCharacter(char1, char2));
