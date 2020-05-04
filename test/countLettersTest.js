const countLetters = require('../countLetters');


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
};

let outputLetter = (countLetters('aaaaaa aaa'));
console.log(assertEqual(outputLetter['a'], 9));