const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail([1, 3, 5, 7 ,9]);


console.log(assertEqual(result.length, 4));
console.log(assertEqual(result[2], 7));
console.log(assertEqual(result[0], 3));