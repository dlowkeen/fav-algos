const expect = require("chai").expect;
const isValid = require("./index");

describe("isValid", function () {
    it("should return false", function () {
        const result = isValid('[)');
        expect(result).to.equal(false);
    });
    it("should return true", function () {
        const result = isValid('[]{}()[()]');
        expect(result).to.equal(true);
    });
    it("should return false", function () {
        const result = isValid('[()])');
        expect(result).to.equal(false);
    });
    it("should return true", function () {
        const result = isValid('[[[{()(){{()}}}]]]');
        expect(result).to.equal(true);
    });
});
