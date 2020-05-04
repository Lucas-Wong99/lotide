const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
/*
I will be returning a key of the object( a string)
start by using a for in loop to loop through the object
If(true(callback(x)))
return x;
*/