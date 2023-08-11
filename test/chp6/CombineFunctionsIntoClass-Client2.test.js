import { taxableCharge } from "../../src/chp6/CombineFunctionsIntoClass-Client2";

describe("CombineFunctionsIntoClass-Client2.js", () => {
  it("taxableCharge", () => {
    expect(taxableCharge).toEqual(0.9);
  });
});
