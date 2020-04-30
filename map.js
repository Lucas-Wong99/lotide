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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed!: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed!: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item))
  }
  return results;
};



const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

const emptyArray = [];
assertArraysEqual(map(emptyArray, word => word[0]), []);

const onlyLetters = ['t', 'r', 'w'];
assertArraysEqual(map(onlyLetters, word => word[0]), ['t', 'r', 'w']);

const bigWord = ['pneumonoultramicroscopicsilvolcanocoviosis'];
assertArraysEqual(map(bigWord, word => word[0]), ['p']);
