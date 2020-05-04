const without = function(source, itemsToRemove) {
  const results = [];
  for (const element of source) {
    if (itemsToRemove.indexOf(element) === -1) {
      results.push(element);
    }
  }
  return results;
};

module.exports = without;


// assertArraysEqual(without([1, 2, 3], [1]) , [2, 3]); // => true
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]); // => false

