const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


describe("#eqObjects", () => {

  it("returns true given ab and ba", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab , ba));
  });

  it("returns true for cd and dc", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects([1], [1]));
  });

  it("returns false for a and an empty object", () => { 
    assert.isFalse(eqObjects({}, {a: '2'}), []); 
  });

  it("returns false for ba and abc", () => { 
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ba, abc)); 
  });

  it("returns false for c2d and dl", () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const dl = { d: ["2", 3], c: "2" }; 
    assert.isFalse(eqObjects(dl, cd2)); 
  });
});
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const dl = { d: ["2", 3], c: "2" };

