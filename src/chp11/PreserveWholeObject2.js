export function temperatureAlerts(aRoom, aPlan) {
  const alerts = [];
  const tempRange = aRoom.daysTempRange;
  const isWithinRange = aPlan.withinRange(tempRange);
  if (!isWithinRange) {
    alerts.push("room temperature went outside range");
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    return (
      low >= this._temperatureRange.low && high <= this._temperatureRange.high
    );
  }
}
