// --- Directions
// Given an array of positive integers, find the prime numbers.

// --- Example
//   const input = [1, 4, 432, 3, 88389, 100000, 79, 53, 69, ...];
//   printPrimes(input);
//   output = [1,3,79,53]

function printPrimes(arr) {
  let arrMap = [];
  arr.forEach(x => {
    if (isPrime(x)) {
      arrMap.push(x);
    };
  });
  return arrMap;
}

function isPrime(num) {
  const fl = Math.floor(Math.sqrt(num));
  let yesPrime = true;
  for (let i = 2; i <= fl; i++) {
    if (num % i == 0) {
        yesPrime = false;
        break;
    }
  }
  return yesPrime;
}
  
module.exports = printPrimes;

