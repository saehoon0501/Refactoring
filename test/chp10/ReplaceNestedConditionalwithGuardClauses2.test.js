import { adjustedCapital } from "../../src/chp10/ReplaceNestedConditionalwithGuardClauses2";

describe("adjustedCapital", () => {
  it("give 0 adjusted capital if capital is 0 or less than 0", () => {
    expect(adjustedCapital({ capital: 0 })).toEqual(0);
    expect(adjustedCapital({ capital: -1 })).toEqual(0);
  });
  it("give 0 adjusted capital if interestRate is 0 or less than 0", () => {
    expect(adjustedCapital({ capital: 1, interestRate: 0 })).toEqual(0);
    expect(adjustedCapital({ capital: 1, interestRate: -1 })).toEqual(0);
  });
  it("give 0 adjusted capital if duration is 0 or less than 0", () => {
    expect(
      adjustedCapital({ capital: 1, interestRate: 0, duration: 0 })
    ).toEqual(0);
    expect(
      adjustedCapital({ capital: 1, interestRate: 1, duration: -1 })
    ).toEqual(0);
  });
  it("calculate adjusted capital when capital, interestRate and duration are greater than 0", () => {
    expect(
      adjustedCapital({
        capital: 1,
        interestRate: 1,
        duration: 1,
        income: 1,
        adjustmentFactor: 1,
      })
    ).toEqual(1);
    expect(
      adjustedCapital({
        capital: 1,
        interestRate: 1,
        duration: 1,
        income: 2,
        adjustmentFactor: 2,
      })
    ).toEqual(4);
  });
});
