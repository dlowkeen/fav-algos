const expect = require("chai").expect;
const twoSum = require("./index");

describe("twoSum", function () {
    it("should return [0,1]", function () {
        const arr = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(arr, target);
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(1);
    });

    it("should return [1,2]", function () {
        const arr = [1, 5, 5, 3];
        const target = 10;
        const result = twoSum(arr, target);
        expect(result[0]).to.equal(1);
        expect(result[1]).to.equal(2);
    });

    it("should return [0,3]", function () {
        const arr = [1, 7, 11, 9];
        const target = 10;
        const result = twoSum(arr, target);
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(3);
    });
});
