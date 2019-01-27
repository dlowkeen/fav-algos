// Given an array of objects with properties: firstName, lastName, email, amount, and timeStamp, 
// Consolidate records with duplicate emails with the most up to date time stamp. If the most up to date
// time stamp has null properties but a previous entry's properties are not null, then keep the
// previous entry's property but update the time stamp. timeStamp and email are the only required properties.

// Example: 
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

const duplicates = (arrObj) => {
    for (let i = 0; i < arrObj.length; i++) {
        console.log('obj ' + i);
        for (let j = 1 + i; j < arrObj.length; j++) {
            if (arrObj[i].email === arrObj[j].email) {
                console.log('before updating', arrObj[i]);
                if (arrObj[i].timeStamp > arrObj[j].timeStamp) {
                    console.log('first Obj more recent');
                    arrObj[i].firstName = arrObj[i].firstName != null ? arrObj[i].firstName : arrObj[j].firstName;
                    arrObj[i].lastName = arrObj[i].lastName != null ? arrObj[i].lastName : arrObj[j].lastName;
                    arrObj[i].amount = arrObj[i].amount != null ? arrObj[i].amount : arrObj[j].amount;
                } else {
                    console.log('second Obj more recent');
                    arrObj[i].timeStamp = arrObj[j].timeStamp;
                    arrObj[i].firstName = arrObj[j].firstName != null ? arrObj[j].firstName : arrObj[i].firstName;
                    arrObj[i].lastName = arrObj[j].lastName != null ? arrObj[j].lastName : arrObj[i].lastName;
                    arrObj[i].amount = arrObj[j].amount != null ? arrObj[j].amount : arrObj[i].amount;
                }
                console.log('after updating', arrObj[i]);
                // remove the duplicate record after updating
                arrObj.splice(j, 1);
                console.log('after splice', arrObj);
            }
        }
    }
    console.log('arrObj final', arrObj);
    return arrObj;
};

duplicates(input);

module.exports = duplicates;