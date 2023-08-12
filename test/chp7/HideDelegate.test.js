import { Person, Department } from "../../src/chp7/HideDelegate";

describe("Person", () => {
  const aPerson = new Person("Tom", new Department("aManager", "999"));

  it("report tracking information", () => {
    expect(aPerson.name).toEqual("Tom");
    expect(aPerson.manager).toEqual("aManager");
    expect(aPerson.chargeCode).toEqual("999");
  });
});
