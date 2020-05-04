const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {

  it("returns true for ([], [])", () => {
    assert.isTrue(eqArrays([], []));
  });

  it("returns true for ([1], [1])", () => {
    assert.isTrue(eqArrays([1], [1]));
  });

  it("returns true for ([1, 2, 3], [1, 2, 3])", () => { 
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), []); 
  });

  it("returns true for (['5', '10', '15'], ['5', '10', '15'])", () => { 
    assert.isTrue(eqArrays(['5', '10', '15'], ['5', '10', '15'])); 
  });

  it("returns false for (['5', '10', '15'], ['5', 10, '15'])", () => { 
    assert.isFalse(eqArrays(['5', '10', '15'], ['5', 10, '15'])); 
  });
});
