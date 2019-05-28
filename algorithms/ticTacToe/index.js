// given a 3x3 tic tac toe board with various positions filled out, write an algorithm to determine
// if your next move  (given to you) will return a success or not. 

// inputs: arr = [[],[],[]]    move = (x,y)
// output: { success: true }

// example
// [['x','_','o'],
//  ['o','x','_'],
//  ['o','_','_']]
// move = (2,2) index position

const ticTacToe = (arr, x, y) => {
    let res = {
        success: false,
        msg: "space unavailable"
    };
    // first check to see if that position is open
    if (arr[x][y] === '_') {
        arr[x][y] = 'x';

        // loop through to find first instance of X. When we find it, check all around it. left, right
        // up, down, diagonals all ways. make this a separate 'looking' helper function
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i][j] === 'x') {
                    let response = lookAround(arr, i, j);
                    if (response.success = true) {
                        let slope = calculateSlope(i, j, response.indexOne, response.indexTwo)
                        let response2 = lookup(arr, response.indexOne, response.indexTwo, slope)
                        if (response2.success === true) {
                            res.success = true;
                            res.msg = 'you did it!';
                            return res;
                        } else {
                            res.msg = "Unsuccessful";
                            return res;
                        }
                    } else {
                        res.msg = 'Unsuccessful';
                        return res;
                    }
                }
            }
        }
    } else {
        return res;
    }
    return res;
}

const lookAround = (arr, i, j) => {
    let response = {
        indexOne: null,
        indexTwo: null,
        success: false,
    }
    // look below
    if (arr[i + 1] && arr[i + 1][j] === 'x') {
        console.log('below')
        response.indexOne = i + 1;
        response.indexTwo = j;
    }
    // look right
    if (arr[i] && arr[i][j + 1] === 'x') {
        console.log('right')
        response.indexOne = i;
        response.indexTwo = j + 1;
    }
    // look left
    if (arr[i] && arr[i][j - 1] === 'x') {
        console.log('left')
        response.indexOne = i;
        response.indexTwo = j - 1;
    }
    // look above
    if (arr[i - 1] && arr[i - 1][j] === 'x') {
        console.log('above')
        response.indexOne = i - 1;
        response.indexTwo = j;
    }
    // look top right
    if (arr[i - 1] && arr[i - 1][j + 1] === 'x') {
        console.log('top right')
        response.indexOne = i - 1;
        response.indexTwo = j + 1;
    }
    // look top left
    if (arr[i - 1] && arr[i - 1][j - 1] === "x") {
        console.log('top left')
        response.indexOne = i - 1;
        response.indexTwo = j - 1;
    }
    // look bottom right
    if (arr[i + 1] && arr[i + 1][j + 1] === 'x') {
        console.log('bottom right')
        response.indexOne = i + 1;
        response.indexTwo = j + 1;
    }
    // look bottom left
    if (arr[i + 1] && arr[i + 1][j - 1] === 'x') {
        console.log('bottom left')
        response.indexOne = i + 1;
        response.indexTwo = j - 1;
    }
    if (response.indexOne != null && response.indexTwo != null) {
        response.success = true;
    }
    return response;
}

const lookup = (arr, i, j, slope) => {
    let result = {
        success: false,
    }
    if (slope === 1) {
        // diagonal
        if (arr[i + slope] && arr[i + slope][j + slope] === 'x') {
            result.success = true;
            return result;
        }
    } else if (slope === 0) {
        // horizontal
        if (arr[i + slope] && arr[i + slope][j + 1] === 'x') {
            result.success = true;
            return result;
        }
    } else if (slope === Infinity) {
        // vertical
        if (arr[i + 1] && arr[i + 1][j + slope] === 'x') {
            result.success = true;
            return result;
        }
    }
    return result;
}

const calculateSlope = (x, y, x2, y2) => {
    let ySum = y - y2;
    let xSum = x - x2;
    let slope = (y - y2) / (x - x2);
    return slope;
}

let arr = [
    ["x", "_", "o"],
    ["o", "x", "_"],
    ["o", "_", "_"]
];
let x = 2;
let y = 1;
ticTacToe(arr, x, y);


module.exports = ticTacToe;