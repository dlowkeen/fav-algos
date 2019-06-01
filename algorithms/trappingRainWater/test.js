const expect = require("chai").expect;
const trapWater = require("./index");

describe("trapWater", function() {
//   it("should return 6", () => {
//     const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
//     let result = trapWater(arr);
//     expect(result).to.equal(6);
//   });

  it("should return 3", () => {
    const arr = [3, 0, 0, 0, 1];
    let result = trapWater(arr);
    expect(result).to.equal(3);
  });

//   it("should return 2", () => {
//     const arr = [2, 0, 2];
//     let result = trapWater(arr);
//     expect(result).to.equal(2);
//   });

//   it("should return 10", () => {
//     const arr = [3, 0, 0, 2, 0, 4];
//     let result = trapWater(arr);
//     expect(result).to.equal(10);
//   });

//   it("should return 0", () => {
//     const arr = [0, 1, 2, 3, 2];
//     let result = trapWater(arr);
//     expect(result).to.equal(0);
//   });

//   it("should return 1", () => {
//     const arr = [1, 2, 1, 3, 2];
//     let result = trapWater(arr);
//     expect(result).to.equal(1);
//   });
});
