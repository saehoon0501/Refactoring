import { circumference } from "../../src/chp6/ChangeFunctionDeclaration1";

describe("circumference", () => {
  it("should calculate circumference given a radius", () => {
    expect(circumference(100)).toEqual(628.3185307179587);
  });
});
