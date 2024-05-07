const sumAll = function(a, b) {
  return typeof a === "number" && typeof b === "number" && a >= 0 && b >= 0 ? (a + b) * (Math.abs(b - a) + 1) / 2 : "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
