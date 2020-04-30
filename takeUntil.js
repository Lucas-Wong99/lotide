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

const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);


console.log('---');

const data3 = ["You're", "barn", "is", "big", ",", "My", "been", "is", "honey"];
const results3 = takeUntil(data3, x => x === undefined);
console.log(results3);
assertArraysEqual(results3, ["You're", "barn", "is", "big", ",", "My", "been", "is", "honey"]);



/*
create a variable that has an empty array as a value
usse a for of loop to loop through the given array
use a conditional if !callback, push the item into the array.
else ,break the loop
*/