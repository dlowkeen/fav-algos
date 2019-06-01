const expect = require("chai").expect;
const sum = require("./index");

describe("sum", function() {
  it("should return 32", function() {
    expect(sum([1, 3, 16, 9, 1, 2])).to.equal(32);
  });

  it("should return 54", function() {
    expect(sum([1, 3, 8, 23, 9, 14, -4])).to.equal(54);
  });

  it("should return 9", function() {
    expect(sum([1, 2, -6, 5, 7])).to.equal(9);
  });
});
