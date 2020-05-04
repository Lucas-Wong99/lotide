const tail = require('../tail');

const result = tail([1, 3, 5, 7 ,9]);


console.log(result.length, " tail --> 4",);
console.log(result[2], " tail --> 7",);
console.log(result[0], "tail --> 3",);