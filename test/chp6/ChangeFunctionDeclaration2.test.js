import { Book } from "../../src/chp6/ChangeFunctionDeclaration2";

describe("Book", () => {
  it("report no reservation for non reserved customers", () => {
    let book = new Book();
    let customer = { id: "1" };

    expect(book.hasReservation(customer)).toEqual(false);
  });

  it("report reservation for reserved customers", () => {
    let book = new Book();

    let aCustomer = { id: "1" };
    book.addReservation(aCustomer, false);

    let anotherCustomer = { id: "2" };
    book.addReservation(anotherCustomer, false);

    expect(book.hasReservation(aCustomer)).toEqual(true);
    expect(book.hasReservation(anotherCustomer)).toEqual(true);
  });
});
