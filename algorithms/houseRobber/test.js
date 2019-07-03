const expect = require("chai").expect;
const rob = require("./index");

describe("rob", function () {

    it("should return 12", function () {
        const arr = [2, 7, 9, 3, 1];
        const results = rob(arr);
        expect(results).to.equal(12);
    });

    it("should return 4", function () {
        const arr = [1, 2, 3, 1];
        const results = rob(arr);
        expect(results).to.equal(4);
    });

    it("should return 4", function () {
        const arr = [12, 3, 2, 6, 1];
        const results = rob(arr);
        expect(results).to.equal(18);
    });
});
