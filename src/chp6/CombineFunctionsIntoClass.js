class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  get baseRate() {
    if (this.year === 2017 && this.month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  taxThreshold(year) {
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - this.taxThreshold(this.year));
  }
}

export { Reading };
