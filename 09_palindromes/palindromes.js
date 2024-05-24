const palindromes = function (str) {
  str = str.split('').filter(x => x.match(/[a-zA-Z0-9]/)).map(x => x.toLowerCase());
  return str.join('') === str.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
