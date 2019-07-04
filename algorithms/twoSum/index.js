/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Given an array of integers,
 return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:

     Given nums = [2, 7, 11, 15], target = 9,

     Because nums[0] + nums[1] = 2 + 7 = 9,
     return [0, 1].
 */

// Brute Force Approach - Time Complexity: O(N^2), Space Complexity: O(1)
// const twoSum = (nums, target) => {
//     for (let j = 0; j < nums.length; j++) {
//         for (let i = 1 + j; i < nums.length; i++) {
//             if (nums[j] + nums[i] == target) {
//                 return [j, i];
//             }
//         }
//     }
// };

// Two Pass Hash-Map - Time Complexity: O(N), Space Complexity: O(N)
// const twoSum = (nums, target) => {
//     let hashMap = {};
//     for (let i = 0; i < nums.length; i ++) {
//         hashMap[nums[i]] = i;
//     };
//     for (let j = 0; j < nums.length; j++) {
//         const complement = target - nums[j];
//         if (hashMap[complement] && hashMap[complement] !== j) {
//             return [j, hashMap[complement]];
//         }
//     }
// }

// Single Pass Hash-Map - Time Complexity: O(N), Space Complexity: O(N)
// NOT WORKING YETTTTTTT*******
const twoSum = (nums, target) => {
    let hashMap = {};
    const arr = [1, 5, 5, 3];
    hashmap = {
        0: 1,
        1: 5,
        2: 5,
        3: 3,
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        hashMap[i] = nums[i];
        if ((hashMap[complement] || hashMap[complement] == 0) && hashMap[complement] !== i) {
            console.log('hi', [i, hashMap[complement]]);
            return [hashMap[complement], i];
        }
    }
}

module.exports = twoSum;