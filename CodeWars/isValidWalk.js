// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;
  if (walk.length < 10 || walk.length > 10) {
    return false;
  } else {
    walk.forEach((element) => {
      switch (element) {
        case "n":
          north += 1;
          break;
        case "s":
          south += 1;
          break;
        case "e":
          east += 1;
          break;
        case "w":
          west += 1;
          break;
      }
    });
    console.log(`north: ${north}  south: ${south} east: ${east} west: ${west}`);
  }
  return north === south && west === east ? true : false
}
// 1 block is 1min
// 10 min walk
// return to location
// There should be a north for south and south for every north
// there should be a west for east and east for every west

let test = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];
console.log(isValidWalk(test));
