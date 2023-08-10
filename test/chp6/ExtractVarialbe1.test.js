import { price } from "../../src/chp6/ExtractVariable1";

describe("Extract Variable 1", () => {
  it("should price order which quantity is under 50", () => {
    const anOrder = {
      quantity: 49,
      itemPrice: 1,
    };

    expect(price(anOrder)).toEqual(53.9);
  });

  it("should price order which quantity is above 50", () => {
    const anOrder = {
      quantity: 51,
      itemPrice: 1,
    };

    expect(price(anOrder)).toEqual(56.1);
  });
});
