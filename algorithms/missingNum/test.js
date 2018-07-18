const expect = require("chai").expect;
const missingNum = require("./index");

describe("missingNum", function() {
  it("should return 23", function() {
    let arr = [21, 22, 24, 25, 26, 27, 28, 29];
    let results = missingNum(arr);
    expect(results).to.equal(23);
  });

  it("should return 12", function() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15];
    let results = missingNum(arr);
    expect(results).to.equal(12);
  });

  it("should return 1", function() {
    let arr = [-2, -1, 0, 2, 3];
    let results = missingNum(arr);
    expect(results).to.equal(1);
  });

  it("should return -767", function() {
    let arr = [-768, -766, -765, -764, -763, -762];
    let results = missingNum(arr);
    expect(results).to.equal(-767);
  });
});
