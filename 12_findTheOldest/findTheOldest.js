const findTheOldest = function(arr) {
  return arr
    .reduce((t, c) => {
      let first = 0;
      let second = 0;
      if("yearOfDeath" in t) {
        first = t.yearOfDeath - t.yearOfBirth;
      } else {
        first = 2024 - t.yearOfBirth;
      }
      if("yearOfDeath" in c) {
        second = c.yearOfDeath - c.yearOfBirth;
      } else {
        second = 2024 - c.yearOfBirth;
      }
      console.log(first, second);
      return first > second ? t : c;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
