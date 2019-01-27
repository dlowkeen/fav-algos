const expect = require("chai").expect;
const elevator = require("./index");

describe("elevator", function () {

  it("should return 5", function () {
    const start = 2;
    const arr = ["U3", "U7", "D5", "U2", "D7", "D1", "U4"];
    const results = elevator(arr, start);
    expect(results).to.equal(5);
  });

  it("should return 5", function () {
    const start = 4;
    const arr = ["U3", "U7", "D5", "U2", "D7", "D1", "U4"];
    const results = elevator(arr, start);
    expect(results).to.equal(5);
  });

  it("should return 9", function () {
    const start = 4;
    const arr = ["U3", "U2", "D4", "U2", "D1", "D1", "U4"];
    const results = elevator(arr, start);
    expect(results).to.equal(9);
  });

  it("should return 1", function () {
    const start = 4;
    const arr = ["U3", "U2", "D4", "U2", "D1", "D1", "D4"];
    const results = elevator(arr, start);
    expect(results).to.equal(1);
  });

});