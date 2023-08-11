const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

function acquireReading() {
  return reading;
}

function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

const aReading = acquireReading();

export const baseCharge =
  baseRate(aReading.month, aReading.year) * aReading.quantity;
