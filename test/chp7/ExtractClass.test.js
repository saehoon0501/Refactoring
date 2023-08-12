import { Person } from "../../src/chp7/ExtractClass";

describe("Person", () => {
  it("returns name, area code, number and telephone number correctly", () => {
    const aPerson = new Person("Xuemin", "020", "12345678");
    expect(aPerson.name).toEqual("Xuemin");
    expect(aPerson.officeAreaCode).toEqual("020");
    expect(aPerson.officeNumber).toEqual("12345678");
    expect(aPerson.telephoneNumber).toEqual("(020) 12345678");
  });
});
