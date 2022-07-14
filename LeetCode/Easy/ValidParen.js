/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function (s) {
  const stack = [];

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      console.log(stack);
      console.log(`The last item is ${stack[stack.length - 1]}`);
    } else {
      if (
        (stack[stack.length - 1] === "(" && s[i] == ")") ||
        (stack[stack.length - 1] === "{" && s[i] == "}") ||
        (stack[stack.length - 1] === "[" && s[i] == "]")
      ) {
        stack.pop();
        console.log(`After the pop the stack is ${stack}`);
      } else {
        if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
          console.log("There is a closing tag with no opening tag");
          return false;
        }
      }
    }
  }
  console.log(`The stack currently contains ${stack}`);
  if (stack.length == 0) {
    console.log("The stack is empty: True");
    return true;
  } else {
    console.log("The stack has an item: False");
    return false;
  }
};
