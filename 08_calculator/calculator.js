const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((t, c) => t += c, 0);
};

const multiply = function(arr) {
  return arr.reduce((t, c) => t *= c, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
	return new Array(x).fill(0).map((_, i) => i + 1).reduce((t, c) => t *= c, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
