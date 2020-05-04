const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];
// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

// const emptyArray = [];
// assertArraysEqual(map(emptyArray, word => word[0]), []);

// const onlyLetters = ['t', 'r', 'w'];
// assertArraysEqual(map(onlyLetters, word => word[0]), ['t', 'r', 'w']);

// const bigWord = ['pneumonoultramicroscopicsilvolcanocoviosis'];
// assertArraysEqual(map(bigWord, word => word[0]), ['p']);
