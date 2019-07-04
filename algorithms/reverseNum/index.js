/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    let answer = '';
    const sign = Math.sign(x) ? Math.sign(x) : 1;
    let string = x.toString();
    for (let j = 0; j < string.length; j++) {
        answer = string[j] + answer;
    }
    return sign * parseInt(answer, 0);
};

reverse(123);
module.exports = reverse;