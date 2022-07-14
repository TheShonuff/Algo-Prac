// function arrayDiff(a, b) {
//   // compare a to b
//   // if a is present in b remove from a
//   let result = [];
//   backup = [];
//   if (a.length > 0) {
//     for (let i = 0; i < a.length; i++) {
//       if (b.length !== 0) {
//         for (let j = 0; j < b.length; j++) {
//           if (a[i] !== b[j]) {
//             console.log(`a = ${a[i]}`);
//             console.log(`b = ${b[j]}`);
//             result.push(a[i]);
//             console.log(result);
//           }
//         }
//       } else {
//         return (backup = [...a]);
//       }
//     }
//   } else {
//     // return (result = [...b]);
//     return (result = []);
//   }
//   return b.length !== 0 ? result : backup;
// }





function arrayDiff(a,b) {
    const empty =[];
    let result = a.filter(x => !b.includes(x));
    return a === 0 ? empty : result;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));