// export class ChargeCalculator {
//   constructor(customer, usage, provider) {
//     this._customer = customer;
//     this._usage = usage;
//     this._provider = provider;
//   }

//   get charge() {
//     const baseCharge = this._customer.baseRate * this._usage;
//     return baseCharge + this._provider.connectionCharge;
//   }
// }

export function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
