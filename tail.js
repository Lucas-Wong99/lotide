const tail = function(array) {
  return array.slice(1);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌Assertion Failed: ${actual} !== ${expected}`;
  }
};

const result = tail([1, 3, 5, 7 ,9]);
console.log(assertEqual(result.length, 4));
console.log(assertEqual(result[2], 7));
console.log(assertEqual(result[0], 4));


const numbers = tail([2]);
console.log(assertEqual(numbers.length, 3));