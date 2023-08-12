import { assert } from "assert";
class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
    assert(interestRate === this._type.interestRate);
  }

  get interestRate() {
    return this._interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}
