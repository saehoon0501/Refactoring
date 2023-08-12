import { Order } from "../../src/chp7/ReplaceTempWithQuery";

describe("Order", () => {
  it("calculates price when total cost is lower than 1000", () => {
    const anOrder = new Order(2, { price: 500 });
    expect(anOrder.price).toEqual(980);
  });

  it("calculates price when total cost is more than 1000", () => {
    const anOrder = new Order(2, { price: 501 });
    expect(anOrder.price).toEqual(951.9);
  });
});
