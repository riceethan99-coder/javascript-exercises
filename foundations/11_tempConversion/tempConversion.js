const convertToCelsius = function(fahr) {
  let celcius = (fahr - 32) * 5/9
  return Number(celcius.toFixed(1))

};

const convertToFahrenheit = function(celc) {
  let fahrenheit = (celc * 9 / 5) + 32
  return Number(fahrenheit.toFixed(1))
};


convertToCelsius(-100)
convertToFahrenheit(-10)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
