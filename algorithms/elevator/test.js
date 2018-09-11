const expect = require("chai").expect;
const elevator = require("./index");

describe("elevator", function () {

  it("should return 5", function () {
    const arr = ["U3", "U7", "D5", "U2", "D7", "D1", "U4"];
    const results = elevator(arr);
    expect(results).to.equal(5);
  });

});