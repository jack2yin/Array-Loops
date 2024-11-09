const removeFromArray = function(array, ...variables) {

let newArray = [];

array.forEach((item) => {
    if (!variables.includes(item)) {
        newArray.push(item);
    }
});

return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
