import { inNewEngland } from "../../src/chp6/ChangeFunctionDeclaration3";

describe("inNewEngland", () => {
  it("should find no New England Customers when there are no customers", () => {
    const noCustomers = [];

    const newEnglandCustomers = noCustomers.filter((c) =>
      inNewEngland(c.address.state)
    );

    expect(newEnglandCustomers).toEqual([]);
  });

  it("should find a single New England Customer", () => {
    const aNewEnglandCustomer = {
      address: {
        state: "CT",
      },
    };

    const someCustomers = [aNewEnglandCustomer];

    const newEnglandCustomers = someCustomers.filter((c) =>
      inNewEngland(c.address.state)
    );

    expect(newEnglandCustomers).toEqual(someCustomers);
  });

  it("should find a multiple New England Customer", () => {
    const aNewEnglandCustomer = {
      address: {
        state: "CT",
      },
    };

    const anotherNewEnglandCustomer = {
      address: {
        state: "RI",
      },
    };

    const aNonNewEnglandCustomer = {
      address: {
        state: "NON-ENGLAND",
      },
    };

    const someCustomers = [
      aNewEnglandCustomer,
      aNonNewEnglandCustomer,
      anotherNewEnglandCustomer,
    ];

    const newEnglandCustomers = someCustomers.filter((c) =>
      inNewEngland(c.address.state)
    );

    expect(newEnglandCustomers).toEqual([
      aNewEnglandCustomer,
      anotherNewEnglandCustomer,
    ]);
  });
});
