const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keysArray1 = Object.keys(object1);
  const keysArray2 = Object.keys(object2);
  if (keysArray1.length !== keysArray2.length) {
    return false;
  }
  for (const key of keysArray1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const dl = { d: ["2", 3], c: "2" };

// // console.log(assertEqual(eqObjects(ab, ba), true)); // => true

// // console.log(assertEqual(eqObjects(ab, abc), false));

// // console.log(assertEqual(eqObjects(cd, dc), true)); // => true

// // console.log(assertEqual(eqObjects(cd, cd2), false)); // => false

// // console.log(assertEqual(eqObjects(dl, dc), false)); // => false

module.exports = eqObjects;