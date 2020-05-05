const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#countOnly", () => {

  it("returns sci_fi when the second argument of the fucntion call is The Expanse", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    let actual = findKeyByValue(bestTVShowsByGenre, "The Expanse")
    assert.equal(actual, "sci_fi")
  });

  it("returns drama when the second argument of the function call is The Wire", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    let actual = findKeyByValue(bestTVShowsByGenre, "The Wire")
    assert.equal(actual, "drama")
  });

  it("returns undefined when second argument of the function call is 'That '70s Show", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    let actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show")
    assert.equal(actual, undefined)
  });
});