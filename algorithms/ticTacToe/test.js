const expect = require("chai").expect;
const ticTacToe = require("./index");

describe("ticTacToe", function() {
  it("should return a success", function() {
    let arr = [['x','_','o'], ['o','x','_'], ['o','_','_']];
    let x = 2;
    let y = 2;
    let results = ticTacToe(arr, x, y);
    expect(results.success).to.equal(true);
  });

  it("should return a failure", function() {
    let arr = [["x", "_", "o"], ["o", "x", "_"], ["o", "_", "_"]];
    let x = 2;
    let y = 1;
    let results = ticTacToe(arr, x, y);
    expect(results.success).to.equal(false);
  });
});
