const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {

  it("returns 1 given the key of [jason] in the countOnly object ", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    let actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.equal(actual["Jason"], 1)
  });

  it("returns undefined given the key of [karima] in the countOnly object ", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    let actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.equal(actual["Karima"], undefined)
  });

  it("returns 2 given the key of [fang] in the countOnly object ", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    let actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.equal(actual["Fang"], 2)
  });
});