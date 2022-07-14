function reverseWords(str) {
  // Go for it
  result = [];
  array = str.split(" ");
  array.forEach((element) => {
    let splitString = element.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    result.push(joinArray);
  });
  return result.join(" ");
}

const testString = "This is an example";

console.log(reverseWords(testString));
