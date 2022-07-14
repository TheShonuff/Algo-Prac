// function isPangram(string) {
//   const regex = /([a-zA-Z])/;
//   return regex.test(string);
//   //   return found;
// }
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  }


const string = "The quick brown fox jumps over the lazy dog";
const string2 = "This is not a pangram.";
console.log(isPangram(string2));
