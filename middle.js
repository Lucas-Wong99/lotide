const middle = function(array) {
  let results = [];
  if (array.length <= 2) {
    return results;
  } else if (array.length % 2 === 0) {
    const middleNumber = array.length / 2;
    results.push(array[middleNumber - 1]);
    results.push(array[middleNumber]);
  } else {
    const middleNumber = array.length / 2;
    results.push(array[Math.floor(middleNumber)]);
  }
  return results;
};

module.exports = middle;