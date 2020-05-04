const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
//we will be returning a string
//use a for in loop top dtermine the key value pairs
//if the the value === the iteration of the for in loop retrun the key
//if there isnt a value retrun undefined