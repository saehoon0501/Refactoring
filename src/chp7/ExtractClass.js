class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }
  get areaCode() {
    return this._areaCode;
  }
  get number() {
    return this._number;
  }
  set areaCode(arg) {
    this._areaCode = arg;
  }
  set number(arg) {
    this._number = arg;
  }
  toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}

class Person {
  constructor(name, officeAreaCode, officeNumber) {
    this._name = name;
    this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}

export { Person };
