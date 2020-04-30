const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
console.log(results1);

let results2 = findKey({}, x => x.stars === 1);
console.log(results2);

let results3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 0);
console.log(results3);

console.log('-----');

console.log(assertEqual(results1, "noma"));
console.log(assertEqual(results2, undefined));
console.log(assertEqual(results3, undefined));

/*
I will be returning a key of the object( a string)
start by using a for in loop to loop through the object
If(true(callback(x)))
return x;
*/