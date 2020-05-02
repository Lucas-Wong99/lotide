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

const flatten = function (array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      console.log(item);
    }
  });
};

flatten([1, 2, [3, 4], 5, [6]]);