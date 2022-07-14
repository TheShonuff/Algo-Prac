function highAndLow(numbers) {
  const arr = numbers.split(" ");
  arr.sort((a, b) => a - b);
  console.log(arr);
}

numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

const myarray = [0, 0, 0, 1];
const binaryArrayToNumber = (arr) => {
  reversed = arr.reverse();
  let result = 0;
  console.log(result);
  for (let i = 0; i <= arr.length; i++) {
    if (reversed[i] === 1 && i === 0) {
      result += 1;
      console.log("this line ran");
    }
    if (reversed[i] === 1) {
      result += Math.pow(reversed[i], 2);
    }
  }
  console.log(result);
};

binaryArrayToNumber(myarray);

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
function highAndLow(numbers) {
  const array = numbers.split(" ");
  array.sort((a, b) => a - b);
  console. ${array[array.length - 1]} log(array);
  return `${array[array.length -1]} ${array[0]}`;
}

console.log(highAndLow(numbers));


function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max(...numbers) + ' ' + Math.min(...numbers);
}