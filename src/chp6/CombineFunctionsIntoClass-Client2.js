import { Reading } from "./CombineFunctionsIntoClass";

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

function acquireReading() {
  return reading;
}

const rawReading = acquireReading();
const aReading = new Reading(rawReading);

export const taxableCharge = aReading.taxableCharge;
