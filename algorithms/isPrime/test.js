const expect = require("chai").expect;
const printPrimes = require("./index");

describe("printPrimes", function () {

  it("should find all prime numbers", function () {
    const arr = [1, 4, 432, 3, 88389, 100000, 79, 53, 69];
    const results = printPrimes(arr);
    expect(results[0]).to.equal(1);
    expect(results[1]).to.equal(3);
    expect(results[2]).to.equal(79);
    expect(results[3]).to.equal(53);
  });

  it("should find all prime numbers", function () {
    const arr = [199, 55, 173, 788, 139, 78, 988, 109, 100000, 234, 67997, 22];
    const results = printPrimes(arr);
    expect(results[0]).to.equal(199);
    expect(results[1]).to.equal(173);
    expect(results[2]).to.equal(139);
    expect(results[3]).to.equal(109);
  });

  it("should find all prime numbers", function () {
    const arr = [4, 432, 17, 3, 79, 53, 69];
    const results = printPrimes(arr);
    expect(results[0]).to.equal(17);
    expect(results[1]).to.equal(3);
    expect(results[2]).to.equal(79);
    expect(results[3]).to.equal(53);
  });

});