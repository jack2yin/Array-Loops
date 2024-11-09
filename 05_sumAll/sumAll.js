const sumAll = function(min, max) {

if (min < 0 || !Number.isInteger(min)) {
    return 'ERROR';
}

if (Array.isArray(max) || typeof max !== 'number') {
    return 'ERROR';
}

// swap variables without a third variable

if (min > max) {
    [min, max] = [max, min];
}

let sum = 0;
for (let i = min; i <= max; i++) {
  sum += i;
}
return sum;

};

// Do not edit below this line
module.exports = sumAll;
