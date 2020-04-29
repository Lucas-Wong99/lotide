const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌Assertion Failed: ${actual} !== ${expected}`;
  }
};

const countLetters = function(string) {
  let result = {};
  let stringNoSpaces = string.replace(/\s/g, '');
  for (const letter of stringNoSpaces) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    } 
  }
  return result;
};

console.log(countLetters(' lighthouse labs in the house '));
console.log(countLetters(''));
console.log(countLetters('aaaaaa aaa'));

const object = { 
  l: 2,
  i: 2,
  g: 1,
  h: 4,
  t: 2, 
  o: 2, 
  u: 2, 
  s: 3, 
  e: 3, 
  a: 1, 
  b: 1, 
  n: 1 
}

// console.log(assertEqual(countLetters('lighthouse labs in the house'), object ))