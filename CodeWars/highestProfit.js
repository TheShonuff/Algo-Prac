// function minMax(arr) {
//   arr.sort((a, b) => a - b);
//   return [arr[0], arr[arr.length - 1]];
// }

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

array = [2334454, 5];

console.log(minMax(array));
