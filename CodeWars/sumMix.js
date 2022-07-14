// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  result = 0;
  for (let i = 0; i < x.length; i++) {
    result += parseInt(x[i]);
  }
  return result;
}

array = [9, 3, "7", "3"];
console.log(sumMix(array));
