function getSum(a, b) {
  let sum = 0;

  //Good luck!
  if (a === b) {
    return a;
  } else if (a < b) {
    for (let i = a; i <= b; i++) sum += i;
  } else if (a > b) {
    for (let i = b; i <= a; i++) sum += i;
  }
  return sum;
}

console.log(getSum(0, -1));

// best answer
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

function find_average(array) {
  result = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      result += Number(array[i]);
      console.log(result);
    }
    return result / Number(array.length);
  }
}

console.log(find_average([1, 1, 1]));
