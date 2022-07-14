// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const result = [...numbers];
  const index = result.findIndex((num) => num === min);
  result.splice(index, 1);
  return result;
  // throw "TODO: removeSmallest";
}

const numbers = [157, 262, 332, 303, 19, 101, 114, 146, 339, 182];

console.log(removeSmallest(numbers));
