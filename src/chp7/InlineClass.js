// class TrackingInformation {
//   constructor(shippingCompany, trackingNumber) {
//     this._shippingCompany = shippingCompany;
//     this._trackingNumber = trackingNumber;
//   }
//   get shippingCompany() {
//     return this._shippingCompany;
//   }
//   set shippingCompany(arg) {
//     this._shippingCompany = arg;
//   }
//   get trackingNumber() {
//     return this._trackingNumber;
//   }
//   set trackingNumber(arg) {
//     this._trackingNumber = arg;
//   }
//   get display() {
//     return `${this.shippingCompany}: ${this.trackingNumber}`;
//   }
// }

class Shipment {
  constructor(trackingNumber, shippingCompany) {
    this._shippingCompany = shippingCompany;
    this._trackingNumber = trackingNumber;
  }
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}
export { Shipment };
