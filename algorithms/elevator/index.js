// Given an array of elevator commands determine which floor the elevator ends up on.
// The elevator cannot go higher than the top floor and cannot go lower than the bottom floor.

// Bottom floor = 1,
// Top floor = 10,
// Starting floor = 2

// Input = ["U3", "U7", "D5", "U2", "D7", "D1", "U4"], 2
// Output = 5

function elevator(arr, start) {
    for (let i = 0; i < arr.length; i++) {
        let split = arr[i].split('');
        if (split[0] === "U") {
            for (let j = 0; j < split[1]; j++) {
                if (start === 10) {
                    break;
                }
                start++;
            }
        } else {
            for (let j = 0; j < split[1]; j++) {
                if (start === 1) {
                    break;
                }
                start--;
            }
        }
    }
    return start;
};

module.exports = elevator;
