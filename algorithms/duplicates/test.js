const expect = require("chai").expect;
const duplicates = require("./index");
let input = [{
    firstName: "Bob",
    lastName: "Jones",
    email: "bjones@gmail.com",
    amount: 20000,
    timeStamp: new Date('2019-01-02'),
},{
    firstName: "Sally",
    lastName: null,
    email: "srose@hotmail.com",
    amount: 80000,
    timeStamp: new Date('2019-01-16'),
},{
    firstName: null,
    lastName: null,
    email: "bjones@gmail.com",
    amount: 30000,
    timeStamp: new Date('2019-01-25'),
},{
    firstName: "Tamara",
    lastName: null,
    email: "tamara@gmail.com",
    amount: 15000,
    timeStamp: new Date('2018-12-13'),
},{
    firstName: "Sally",
    lastName: "Rose",
    email: "srose@hotmail.com",
    amount: 50000,
    timeStamp: new Date('2018-11-22'),
}];

let output = [{
    firstName: "Bob",
    lastName: "Jones",
    email: "bjones@gmail.com",
    amount: 30000,
    timeStamp: new Date('2019-01-25'),
},{
    firstName: "Sally",
    lastName: "Rose",
    email: "srose@hotmail.com",
    amount: 80000,
    timeStamp: new Date('2019-01-16'),
},{
    firstName: "Tamara",
    lastName: null,
    email: "tamara@gmail.com",
    amount: 15000,
    timeStamp: new Date('2018-12-13'),
}]

describe("duplicates", function() {
  it("should return an updated array of objects", function() {
    let results = duplicates(input);
    expect(results).to.deep.equal(output);
  });
});
