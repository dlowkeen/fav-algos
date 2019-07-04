// BRUTE FORCE METHOD = TIME COMPLEXITY: O(N), SPACE COMPLEXITY: O(N)
var removeDuplicatesNotSorted = function (nums) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]]) {
            nums.splice(i,1);
            i--;
        } else {
            hashMap[nums[i]] = true;
        }
    }
    return nums.length;
};

// BRUTE FORCE METHOD = TIME COMPLEXITY: O(N), SPACE COMPLEXITY: O(1)
var removeDuplicatesSorted = function (nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

module.exports = removeDuplicatesNotSorted;
