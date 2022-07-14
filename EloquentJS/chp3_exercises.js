// Regular Functoin to find smallest number with If Statement
function smallestNum(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

// Function to find smallest Number with Ternary Operator
function smallestNum2(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

console.log(smallestNum2(54, 39));

// Function to test if Even with If statment
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Functio to test if Even with Ternary
function isEven2(num) {
  return num % 2 === 0 ? true : false;
}

console.log(isEven2(-2));

//Bean Counting with For loop that returns total Capital Letter Count
function countBs(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      counter++;
    } else {
      continue;
    }
  }
  return counter;
}

//Bean Counting that returns the upper case count and test case
function countChar(str, char) {
  let counter = 0;
  console.log(char);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] === char) {
      counter++;
    } else {
      continue;
    }
  }
  return counter;
}


console.log(countChar("BeAnCoCnter", "C"));
