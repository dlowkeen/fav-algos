// --- Directions
// Given an ordered array of numbers. Find the missing number. 
// The array is already sorted and will always have 1 number that is missing.
// The numbers always increment by 1.

const missingNum = (arr) => {
    let midpoint = Math.floor((arr[0] + arr[arr.length - 1]) / 2);
    if (arr.indexOf(midpoint) === -1) {
        return midpoint;
    }
    let left = arr.slice(0, arr.indexOf(midpoint) + 1);
    let right = arr.slice(arr.indexOf(midpoint), arr.length);
    let smallArr = left.length < right.length ? left : right;

    return missingNum(smallArr);
}

module.exports = missingNum;

// Solution #1: Regular For Loop - O(n)
// const missingNum = (arr) => {
//   for (var i = 0; i < arr.length - 1; i++) {
//     if (parseInt(arr[i]) !== parseInt(arr[i+1] - 1)) {
//       console.log(parseInt(arr[i+1] - 1));
//       return;
//     }
//   }
// };
