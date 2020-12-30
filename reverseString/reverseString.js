const reverseString = function(string) {
    let splitedString = string.split("");
    let newString = [];
    for (i = string.length - 1; i >= 0; i--) {
        newString.push(splitedString[i]);
    }
    return newString.join("");
};

module.exports = reverseString;