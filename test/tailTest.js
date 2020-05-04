const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  it("returns [3, 5, 7 ,9] for [1, 3, 5, 7 ,9]", () => {
    assert.sameOrderedMembers(tail([1, 3, 5, 7 ,9]), [3, 5, 7 ,9]);
  });

  it("returns [3, 5] for [1, 3, 5]", () => {
    assert.sameOrderedMembers(tail([1, 3, 5]), [3, 5]);
  });

  it("returns [] for [1]", () => { 
    assert.sameOrderedMembers(tail([1]), []); 
  });
});

