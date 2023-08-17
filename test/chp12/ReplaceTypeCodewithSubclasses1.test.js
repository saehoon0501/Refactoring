import { createEmployee } from "../../src/chp11/ReplaceTypeCodewithSubclasses1";

describe("Employee", () => {
  it("create engineer", () => {
    const engineer = createEmployee("Tom", "engineer");

    expect(engineer.toString()).toEqual("Tom (engineer)");
  });

  it("create manager", () => {
    const engineer = createEmployee("Sarah", "manager");

    expect(engineer.toString()).toEqual("Sarah (manager)");
  });

  it("create salesman", () => {
    const engineer = createEmployee("David", "salesman");

    expect(engineer.toString()).toEqual("David (salesman)");
  });

  it("throw error for invalid employee code", () => {
    expect(function () {
      createEmployee("David", "invalid code");
    }).toThrow("Employee cannot be of type invalid code");
  });
});
