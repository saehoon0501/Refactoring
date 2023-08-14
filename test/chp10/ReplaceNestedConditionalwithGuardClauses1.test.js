import { payAmount } from "../../src/chp10/ReplaceNestedConditionalwithGuardClauses1";

describe("payAmount", () => {
  it("calculate pay amount for Separated", () => {
    expect(payAmount({ isSeparated: true, isRetired: false })).toEqual({
      amount: 0,
      reasonCode: "SEP",
    });
  });

  it("calculate pay amount for Retired", () => {
    expect(payAmount({ isSeparated: false, isRetired: true })).toEqual({
      amount: 0,
      reasonCode: "RET",
    });
  });

  it("calculate pay amount for not-retired and non-separated", () => {
    expect(payAmount({ isSeparated: false, isRetired: false })).toEqual({
      amount: 999,
      reasonCode: "UNICORN",
    });
  });
});
