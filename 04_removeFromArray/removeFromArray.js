const removeFromArray = function(arr, ...elements) {
  result = [];
  itemLoop:
  for (item of arr) {
    for (element of elements) {
      if (element === item) continue itemLoop;
    }
    result.push(item);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
