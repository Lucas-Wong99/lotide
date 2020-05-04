const flatten = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      console.log(item);
    }
  });
};

module.exports = flatten;
// flatten([1, [[2, [3, 4]], 5], [6]]);