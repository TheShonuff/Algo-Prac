const people = [
  {
    firstName: "Debbie",
    lastName: "O'Brien",
  },
  {
    firstName: "Jake",
    lastName: "Dohm",
  },
];

//map method takes 3 arguments. The first on eis the current value, the second is the index and trhe third one is the original array we are iterating over.

// most of the time you only really use the first argument.

const names = people.map((person) => {
  return {
    fullName: `${person.firstName} ${person.lastName}`,
    firstName: `${person.firstName}`,
    lastName: `${person.lastName}`,
  };
});

console.log(names);

//

const sumArray = [1, 2, 3, 4, 5, 6];
const summedArray = sumArray.map((sum) => {
  return sum + 1;
});

console.log(summedArray);

const multipiedArray = sumArray.map((multi) => {
  return multi * 2;
});

console.log(`The result of the multiplied Array is ${multipiedArray}`);


// similiar to the split method except we can modify the result using .call()
const name = "Joseph";
const map = Array.prototype.map;
const newName = map.call(name, (eachLetter) => {
  return `${eachLetter}a`;
});

console.log(newName);


// Rendering lists in Javascript libraries like React to render items in a list.

const names = ["whale", "squid", "turtle", "coral", "starfish"];

const NamesList = () => {
    <div>
        <ul>{names.map{name=> <li key{name}> {name}</li>)} </>/ul>
    </div>
}