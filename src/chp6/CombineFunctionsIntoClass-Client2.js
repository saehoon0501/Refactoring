const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

function acquireReading() {
  return reading;
}

function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

function taxThreshold(year) {
  return 0.1;
}

const aReading = acquireReading();

const base = baseRate(aReading.month, aReading.year) * aReading.quantity;

export const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
