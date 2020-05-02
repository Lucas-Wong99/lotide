
const assertEqual = require('./assertEqual');

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// console.log(assertEqual(eqArrays([2, 4, 6], [2, 4 ,6]), true));
// console.log(assertEqual(eqArrays(['5', '10', '15'], ['5', '10', '15']), true));

module.exports = eqArrays;