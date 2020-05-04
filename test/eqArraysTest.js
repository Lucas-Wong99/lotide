const eqArrays = require('../eqArrays');

console.log(eqArrays([], []), ' === true');
console.log(eqArrays([1], [1]), ' === true');
console.log(eqArrays([1, 2, 3], [1, 2, 3]), ' === true');
console.log(eqArrays([2, 4, 6], [2, 4 ,6]), ' === true');
console.log(eqArrays(['5', '10', '15'], ['5', '10', '15']), ' === true');
console.log(eqArrays(['5', '10', '15'], ['5', 10, '15']), ' === false');




