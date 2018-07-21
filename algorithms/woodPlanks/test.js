const expect = require("chai").expect;
const woodPlanks = require("./index");

describe("woodPlanks", function () {

  it("should return 'Must be a positive integer'", function () {
    let results = woodPlanks(0);
    expect(results).to.equal("Must be a positive integer");
  });

  it("should return 8 dollars", function () {
    let results = woodPlanks(4);
    expect(results).to.equal(8);
  });

  it("should return 8 dollars", function () {
    let results = woodPlanks(8);
    expect(results).to.equal(8);
  });

  it("should return 9 dollars", function () {
    let results = woodPlanks(9);
    expect(results).to.equal(9);
  });

  it("should return 9 dollars", function () {
    let results = woodPlanks(10);
    expect(results).to.equal(9);
  });

  it("should return 10 dollars", function () {
    let results = woodPlanks(11);
    expect(results).to.equal(10);
  });

  it("should return 10 dollars", function () {
    let results = woodPlanks(12);
    expect(results).to.equal(10);
  });

  it("should return 12 dollars", function () {
    let results = woodPlanks(14);
    expect(results).to.equal(12);
  });


  it("should return 12 dollars", function () {
    let results = woodPlanks(16);
    expect(results).to.equal(12);
  });

  it("should return 17 dollars", function () {
    let results = woodPlanks(17);
    expect(results).to.equal(17);
  });

  it("should return 17 dollars", function () {
    let results = woodPlanks(18);
    expect(results).to.equal(17);
  });
  it("should return 18 dollars", function () {
    let results = woodPlanks(19);
    expect(results).to.equal(18);
  });

  it("should return 18 dollars", function () {
    let results = woodPlanks(20);
    expect(results).to.equal(18);
  });

  it("should return 19 dollars", function () {
    let results = woodPlanks(21);
    expect(results).to.equal(19);
  });

  it("should return 19 dollars", function () {
    let results = woodPlanks(22);
    expect(results).to.equal(19);
  });

  it("should return 20 dollars", function () {
    let results = woodPlanks(23);
    expect(results).to.equal(20);
  });

  it("should return 20 dollars", function () {
    let results = woodPlanks(24);
    expect(results).to.equal(20);
  });

  it("should return 20 dollars", function () {
    let results = woodPlanks(25);
    expect(results).to.equal(20);
  });

  it("should return 21 dollars", function () {
    let results = woodPlanks(25);
    expect(results).to.equal(21);
  });

  it("should return 21 dollars", function () {
    let results = woodPlanks(26);
    expect(results).to.equal(21);
  });

  it("should return 22 dollars", function () {
    let results = woodPlanks(27);
    expect(results).to.equal(22);
  });

  it("should return 41 dollars", function () {
    let results = woodPlanks(50);
    expect(results).to.equal(41);
  });

});