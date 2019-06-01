// Trapping Rain Water **********THIS IS NOT COMPLETE. PLAYING AROUND WITH THIS STILL
// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it is able to trap after raining.
// Examples:

// Input: arr[]   = {2, 0, 2}
// Output: 2
// Structure is like below
// | |
// |_|
// We can trap 2 units of water in the middle gap.

// Input: arr[]   = {3, 0, 0, 2, 0, 4}
// Output: 10
// Structure is like below
//      |
// |    |
// |  | |
// |__|_| 
// We can trap "3*2 units" of water between 3 an 2,
// "1 unit" on top of bar 2 and "3 units" between 2 
// and 4.  See below diagram also.

// Input: arr[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// Output: 6
//        | 
//    |   || |
// _|_||_||||||
// Trap "1 unit" between first 1 and 2, "4 units" between
// first 2 and 3 and "1 unit" between second last 1 and last 2 

const trapWater = (arr) => {
    // [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    // let wall1 = null;
    // let wall2 = null;
    // let minWallHeight = null;
    // let trappedWater = 0;
    // // 3, 0, 0, 2, 0, 4
    // if (arr.length < 2) {
    //     return 0;
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     if ((wall1 != null && wall2 == null && (i == arr.length - 1) && arr[i] > 0) || 
    //       (arr[i] > arr[i + 1])) {
    //         if (wall1 != null) {
    //             wall2 = i;
    //             minWallHeight = arr[i] > minWallHeight ? minWallHeight : arr[i];
    //             console.log('setting wall2', wall2);
    //         } else {
    //             wall1 = i;
    //             minWallHeight = arr[i];
    //             console.log('setting wall1', wall1);
    //         }
    //     }
    //     if (wall1 != null && wall2 != null) {
    //         console.log('evaluation', wall1, wall2)
    //         for (let j = wall1 + 1; j < wall2; j++) {
    //             trappedWater += minWallHeight - arr[j];
    //         }
    //         wall1 = null;
    //         wall2 = null;
    //         minWallHeight = null;
    //     }
    //     console.log('trappedWater', trappedWater);
    // }
    // return trappedWater;



    // // 3, 0, 0, 2, 0, 4

    // [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    let trappedWater = 0;
    let sorted = [...arr].sort();
    let tallestIndex = arr.indexOf(sorted[sorted.length - 1])
    console.log('tallestIndex', tallestIndex);
    let tallestBar = arr[tallestIndex];
    console.log('tallestBar', tallestBar);
    console.log('arr', arr);
    // loop left
    let leftWall = null;
    for (let i = 0; i < tallestIndex; i++) {
        console.log(`arr[${i}]: ${arr[i]}`);
        trappedWater += leftWall ? Math.min(leftWall, tallestBar) - arr[i] : 0;
        console.log(arr[i]);
        console.log('next', arr[i + 1]);
        if (arr[i] > arr[i + 1] && arr[i] > leftWall) {
            leftWall = arr[i];
        }
        console.log('trappedWater Left', trappedWater, leftWall);
    }
    // loop right
    let rightWall;
    console.log("ar", arr.length - 1);
    for (let j = (arr.length - 1); j > tallestIndex; j--) {
        console.log(`arr[${j}]: ${arr[j]}`);
        trappedWater += rightWall ? Math.min(rightWall, tallestBar) - arr[i] : 0;
        console.log("arr[j] > rightWall", arr[j] > rightWall);
        if (arr[j] > arr[j - 1] && arr[j] > rightWall) {
            rightWall = arr[j];
        }
        console.log('trappedWater Right', trappedWater);
    } 
    return trappedWater;
}

module.exports = trapWater;

// sort array
// find index of tallest bar
// iterate left
// iterate right
// 