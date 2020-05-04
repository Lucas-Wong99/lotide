const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


console.log(assertEqual(eqArrays([], []), true));
console.log(assertEqual(eqArrays([1], [1]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([2, 4, 6], [2, 4 ,6]), true));
console.log(assertEqual(eqArrays(['5', '10', '15'], ['5', '10', '15']), true));
console.log(assertEqual(eqArrays(['5', '10', '15'], ['5', 10, '15']), false));




