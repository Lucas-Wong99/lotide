const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let results = [];
  if (array.length <= 2) {
    return results;
  } else if (array.length % 2 === 0) {
    const middleNumber = array.length / 2;
    results.push(array[middleNumber - 1]);
    results.push(array[middleNumber]);
  } else {
    const middleNumber = array.length / 2;
    results.push(array[Math.floor(middleNumber)]);
  }
  return results;
};


assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);