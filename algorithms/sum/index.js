// Given an array of integers, return the sum.

// Input = [1, 3, 8, 23, 9, 14, -4]
// Output = 54

function sum(arr) {``
  let sum = 0;
  arr.forEach(x => sum += x);
  console.log('sum', sum);
  return sum;
}

module.exports = sum;
