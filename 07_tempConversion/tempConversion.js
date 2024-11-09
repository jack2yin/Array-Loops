const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * 5/9;
  roundedTemp = Math.round(celsius * 10) / 10;
  return roundedTemp;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * 9/5) + 32;
  roundedTemp = Math.round(fahrenheit * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
