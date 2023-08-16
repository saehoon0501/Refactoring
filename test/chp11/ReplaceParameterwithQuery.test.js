import { Order } from "../../src/chp11/ReplaceParameterwithQuery";

describe("Order", () => {
  it("should calculate final price for quantity <= 100", () => {
    const order = new Order(100, 10);

    expect(order.finalPrice).toEqual(950);
  });

  it("should calculate final price for quantity > 100", () => {
    const order = new Order(101, 10);
    expect(order.finalPrice).toEqual(909);
  });
});
