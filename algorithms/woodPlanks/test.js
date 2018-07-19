const expect = require("chai").expect;
const woodPlanks = require("./index");

describe("woodPlanks", function() {

  it("should return 'Must be a positive integer'", function() {
    let results = woodPlanks(0);
    expect(results).to.equal("Must be a positive integer");
  });

  it("should return 8 dollars", function() {
    let results = woodPlanks(4);
    expect(results).to.equal(8);
  });

  it("should return 8 dollars", function() {
    let results = woodPlanks(8);
    expect(results).to.equal(8);
  });

  it("should return 9 dollars", function() {
    let results = woodPlanks(9);
    expect(results).to.equal(9);
  });

  it("should return 9 dollars", function() {
    let results = woodPlanks(10);
    expect(results).to.equal(9);
  });

  it("should return 10 dollars", function() {
    let results = woodPlanks(11);
    expect(results).to.equal(10);
  });

  it("should return 10 dollars", function() {
    let results = woodPlanks(12);
    expect(results).to.equal(10);
  });

  it("should return 12 dollars", function() {
    let results = woodPlanks(14);
    expect(results).to.equal(12);
  });


  it("should return 12 dollars", function() {
    let results = woodPlanks(16);
    expect(results).to.equal(12);
  });

  it("should return 20 dollars", function() {
    let results = woodPlanks(17);
    expect(results).to.equal(20);
  });

});
