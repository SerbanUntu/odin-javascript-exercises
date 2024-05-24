const getTheTitles = function(arr) {
  return arr.reduce((t, c) => {
    t.push(c.title);
    return t;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
