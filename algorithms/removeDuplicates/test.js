const expect = require("chai").expect;
const removeDuplicatesNotSorted = require("./index");

describe("removeDuplicates", function () {
    it("should return 4", function () {
        const result = removeDuplicatesNotSorted([1, 1, 2, 2, 3, 3, 4, 4]);
        expect(result).to.equal(4);
    });
    it("should return 2", function () {
        const result = removeDuplicatesNotSorted([9, 0, 0, 0, 0, 0, 9, 9]);
        expect(result).to.equal(2);
    });
    it("should return 5", function () {
        const result = removeDuplicatesNotSorted([5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 5]);
        expect(result).to.equal(5);
    });
    it("should return 8", function () {
        const result = removeDuplicatesNotSorted([8, 8, 7, 7, 6, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5]);
        expect(result).to.equal(8);
    });
});
