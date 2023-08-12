import { Shipment } from "../../src/chp7/InlineClass";

describe("Shipment", () => {
  it("report tracking information", () => {
    const aShipment = new Shipment(999, "Maersk");
    expect(aShipment.trackingInfo).toEqual("Maersk: 999");

    aShipment.shippingCompany = "COSCO";
    expect(aShipment.trackingInfo).toEqual("COSCO: 999");
  });
});
