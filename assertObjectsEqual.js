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

const eqObjects = function(object1, object2) {
  const keysArray1 = Object.keys(object1);
  const keysArray2 = Object.keys(object2);
  if (keysArray1.length !== keysArray2.length) {
    return false;
  }
  for (const key of keysArray1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed!: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed!: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };

const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(abc, { a: "1", b: "2", c: "3" });
assertObjectsEqual(ab, { a: "1", b: "2"});
assertObjectsEqual(dc, { d: ["2", 3], c: "1" });
assertObjectsEqual(cd2, { c: "1", d: ["2", 3, 4] });

