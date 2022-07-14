//sumn of range

//#1 Define a range function

function range(x, y, step = 1) {
  const result = [];
  if (x < y) {
    for (let i = x; i <= y; i += step) {
      result.push(i);
    }
  } else if (x > y) {
    for (let j = x; j >= y; j -= step) {
      result.push(j);
    }
  }
  console.log(result);
  return result;
}
// range(4, 2);
//working returns [4,3,2]

//correct range function has Teranry test for step
function Correctrange(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

// define a function that returns the sum of the returned array

function arraySum(arr) {
  result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  console.log(result);
  return result;
}
// testArray = [1, 2, 3];
// arraySum(testArray);
//working returns 6

arraySum(range(5, 2));

//Reversing an Array. Create New Array that has the same elements in the inverse order
const array =["A", "B", "C"];
function reverseArray(array){
  newArray = []
  for (let i= array.length; i >=0; i--){
    newArray.push(array[i]);
  }
  console.log(newArray)
}

let arrayValue = [1, 2, 3, 4, 5];
// Modify the current array with and reverse the elements
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
reverseArray(arrayValue);


//Array to list
function arrayToList(array){
  let list = null;
  for(let i =array.length -1; i>=0; i--){
    list ={value:array[i], rest:list}
  }
  console.log(list);
}
arrayToList([10,20]);


function removeChar(str){
 newstring = str.slice(1,str.length-1);
 return newstring;
}

removeChar("eloquent");

function grow(x){
  let result = 1;
  for(let i=0; i <x.length; i++){
    console.log(x[i]);
    result = result * parseInt(x[i], 10);
  }
  console.log(result);
  return result;

}
grow([1,2,3]);