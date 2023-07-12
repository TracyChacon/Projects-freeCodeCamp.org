// function steamrollArray(input) {
//   let outputArr = []
//   // if input arg is not arr then return input
//   // Base case
//   if (!Array.isArray(input)) {
//     return input
//     // if input arg is an arr then process input arr
//   } else {
//     // iterate over input arr using forEach()
//     input.forEach((arrItem) => {
//       // if arrItem element is not an arr then
//       // add it to outputArr
//       if (!Array.isArray(arrItem)) {
//         outputArr.push(arrItem)

//         // else process the arr
//       } else if (arrItem.length != 0) {
//         // test for dimensions and single element
//         if (!arrItem[0][0] && arrItem.length == 1) {
//           outputArr.push(...arrItem)
//           // handle multiple dimensions
//           // Recursive case
//         } else {
//           outputArr.push(...steamrollArray(arrItem))
//         }
//       }
//     })
//   }

//   return outputArr
// }

// // console.log(steamrollArray([ 1, [2], [ 3, [ [4] ] ] ]));
// console.log(steamrollArray([1, [], [3, [[4]]]]))

// function steamrollArray(arr) {
//     const flattenedArray = [];
//     // Loop over array contents
//     arr.forEach(arrItem => {
//       if (Array.isArray(arrItem)) {
//         // Recursively flatten entries that are arrays
//         //  and push into the flattenedArray
//         flattenedArray.push(...steamrollArray(arrItem));
//       } else {
//         // Copy contents that are not arrays
//         flattenedArray.push(arrItem);
//       }

//     })
//     return flattenedArray;

//   };
//   steamrollArray([1, [2], [3, [[4]]]]);

function steamrollArray(arr) {
  const flat = [].concat(...arr)
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat
}

steamrollArray([1, [2], [3, [[4]]]])
