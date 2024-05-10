const convertToCelsius = function(c) {
  //subtract 32 from Fahrenheit
  let diff = Math.round(c - 32);
  //multipy by 5
  let mult = diff * 5;
  //divide by 9
  let total = Math.round(mult /9);
  return total
};

const convertToFahrenheit = function(c) {
  return Math.round(c *1.8) + 32
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
