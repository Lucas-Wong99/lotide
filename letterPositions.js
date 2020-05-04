const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      //skips over this iteration
      continue;
    } else if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  return result;
};


module.exports = letterPositions;
// console.log(letterPositions("lighthouse in the house"));
// console.log(letterPositions(""));
// console.log(letterPositions("       "));
// console.log(letterPositions("rrrrr sssss"));

// assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
// assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
// assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);