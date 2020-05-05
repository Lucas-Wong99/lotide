const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed!: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed!: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.export = assertObjectsEqual;
// const ab = { a: "1", b: "2" };
// const abc = { a: "1", b: "2", c: "3" };

// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(abc, { a: "1", b: "2", c: "3" });
// assertObjectsEqual(ab, { a: "1", b: "2"});
// assertObjectsEqual(dc, { d: ["2", 3], c: "1" });
// assertObjectsEqual(cd2, { c: "1", d: ["2", 3, 4] });
