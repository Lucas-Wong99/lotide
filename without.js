// const without = function(source, itemsToRemove){
//   const results = [];
//   for (const element of source) {
//     let shouldRemove = false;
//     for (const item of itemsToRemove) {
//       if(element === item){
//         shouldRemove = true;
//       }
//     }
//     if(!shouldRemove){
//       results.push(element);
//     }
//   }
//   return results;
// }


// "1", 1 -> y
// "1", 2 -> y
// "1", "3" -> y
// "2", 1 -> y
// "2", 2 -> y
// "2", "3" -> y
// "3", 1 -> y
// "3", 2 -> y
// "3", "3" -> n

// function will return an array

const without = function(source, itemsToRemove) {
  const results = [];
  for (const element of source) {
    if (itemsToRemove.indexOf(element) === -1) {
      results.push(element);
    }
  }
  return results;
};



const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed!: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed!: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(without([1, 2, 3], [1]) , [2, 3]); // => true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]); // => false

