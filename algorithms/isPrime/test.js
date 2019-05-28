const expect = require("chai").expect;
const printPrimes = require("./index");

describe("printPrimes", function () {

  it("should return 5", function () {
    const arr = [1, 4, 432, 3, 88389, 100000, 79, 53, 69];
    const results = printPrimes(arr);
    expect(results).to.equal([3,79,53]);
  });

  it("should return 5", function () {
    const arr = [199, 55, 173, 788, 139, 78, 988, 109, 100000, 234, 67997, 22];
    const results = printPrimes(arr);
    expect(results).to.equal([199, 173, 139, 109]);
  });

});