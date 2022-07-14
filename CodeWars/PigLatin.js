// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  array = str.split(" ");
  result = [];
  Punc = new RegExp(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "");
  for (let i = 0; i < array.length; i++) {
    firstLetter = array[i].slice(0, 1);
    word = array[i].slice(1, array[i].length);
    constructedWord =
      i !== array.length - 1
        ? `${word}${firstLetter}ay`
        : i === array.length - 1 && Punc.test(array[i])
        ? `${array[i]}`
        : `${word}${firstLetter}ay`;
    result.push(constructedWord);
    console.log(constructedWord);
  }
  // convert string in array
  // manipulate each element.
  // function to Move First letter to End and append 'ay'
  return result.join(" ");
}

sample = "This is my string";
console.log(pigIt(sample));

/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "";
