const repeatString = function(string, time) {
    let result = "";
    if (time < 0) {
        return "ERROR";
    } else {
        for (i = 0; i < time; i++) {
            result = result + string;
        }
        return result;
    }
};

module.exports = repeatString;