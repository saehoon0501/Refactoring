import { ascentVelocity } from "../../src/chp11/ReturnModifiedValue";

describe("ascentVelocity", () => {
  it("should calculate ascent velocity", () => {
    expect(ascentVelocity([{ elevation: 10 }, { elevation: 20 }], 100)).toEqual(
      0.1
    );
  });
});
