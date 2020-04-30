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

// Create a function called letterPositions and immidiatley assign an empty object to a variable
// loop through the string
// if the iteration is a space skip it,
// else if the the letter is present within the object already, push the index of the character
// else initialize a new letter into the object with the value of the indes in an array

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      //skips over this iteration
      continue;
    } else if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  return result;
};

// console.log(letterPositions("lighthouse in the house"));
// console.log(letterPositions(""));
// console.log(letterPositions("       "));
// console.log(letterPositions("rrrrr sssss"));



assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);