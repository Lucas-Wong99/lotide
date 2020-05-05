const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#countOnly", () => {

  it("returns [0] when accessing the l key of string 'lighthouse in the house", () => {
    let actual = letterPositions("lighthouse in the house").l;
    assert.sameOrderedMembers(actual, [0])
  });

  it("returns [1, 11] when accessing the i key of string 'lighthouse in the house", () => {
    let actual = letterPositions("lighthouse in the house").i;
    assert.sameOrderedMembers(actual, [1, 11])
  });

  it("returns [9, 16, 22] when accessing the e key of string 'lighthouse in the house", () => {
    let actual = letterPositions("lighthouse in the house").e;
    assert.sameOrderedMembers(actual, [9, 16, 22])
  });
});
