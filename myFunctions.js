var _ = require('underscore');
//it takes an array
var arrayAverage = (arr) => {
    return _.reduce(arr, (num1, num2) => {
        return num1 + num2;
    }, 0) / (arr.length === 0 ? 1 : arr.length);
    //summing all values in the array that is not 0
}

module.exports = {arrayAverage};
