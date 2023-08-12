import { foundPerson } from "../../src/chp7/SubstituteAlgorithm";

describe("foundPerson", () => {
  it("can find candidates", () => {
    expect(foundPerson(["John"])).toEqual("John");
    expect(foundPerson(["Don", "John"])).toEqual("Don");
    expect(foundPerson(["Kent", "Don", "John"])).toEqual("Kent");
    expect(foundPerson(["Lisa", "Don", "Tom"])).toEqual("Don");
  });

  it("report no candidate is found", () => {
    expect(foundPerson(["Tom", "Chloe"])).toEqual("");
  });
});
