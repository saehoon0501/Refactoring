class Book {
  constructor() {
    this._reservations = [];
  }
  addReservation(customer) {
    zz_addRservation(customer);
  }
  zz_addRservation(customer) {
    this._reservations.push(customer);
  }
  hasReservation(customer) {
    return this._reservations.includes(customer);
  }
}

export { Book };
