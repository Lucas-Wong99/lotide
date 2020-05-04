const countLetters = function(string) {
  let result = {};
  let stringNoSpaces = string.replace(/\s/g, '');
  for (const letter of stringNoSpaces) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;