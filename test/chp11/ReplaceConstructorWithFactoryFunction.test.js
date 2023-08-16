import {
  createEmployee,
  createEngineer,
} from "../../src/chp11/ReplaceConstructorWithFactoryFunction";

describe("Employee", () => {
  it("create a Manager with the employee name ", () => {
    const candidate = createEmployee("Sarah", "M");

    expect(candidate.name).toEqual("Sarah");
    expect(candidate.type).toEqual("Manager");
  });

  it("create an Engineer with the employee name ", () => {
    const candidate = createEngineer("Chloe");

    expect(candidate.name).toEqual("Chloe");
    expect(candidate.type).toEqual("Engineer");
  });
});
