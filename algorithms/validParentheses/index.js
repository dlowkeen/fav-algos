var isValid = function (s) {
    if (s.length % 2 == 1) {
        return false;
    }

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else {
            let top = stack[stack.length - 1];
            if (top == '(') {
                if (s[i] == ')') {
                    stack.pop();
                } else {
                    stack.push(s[i]);
                }
            } else if (top == '{') {
                if (s[i] == '}') {
                    stack.pop();
                } else {
                    stack.push(s[i]);
                }
            } else if (top == '[') {
                if (s[i] == ']') {
                    stack.pop();
                } else {
                    stack.push(s[i]);
                }
            } else {
                return false;
            }
        }
    }
    return stack.length == 0 ? true : false;
};

module.exports = isValid;
