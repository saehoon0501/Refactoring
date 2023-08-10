const assert = require("assert");

class Book {
  constructor() {
    this._reservations = [];
  }
  addReservation(customer, isPrirority) {
    assert(isPrirority === true || isPrirority === false);
    this._reservations.push(customer);
  }
  hasReservation(customer) {
    return this._reservations.includes(customer);
  }
}

export { Book };
