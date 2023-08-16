export function alertForMiscreant(people, alarm) {
  for (const p of people) {
    if (p === "Don") {
      setOffAlarms(alarm, p);
      return "Don";
    }
    if (p === "John") {
      setOffAlarms(alarm, p);
      return "John";
    }
  }
  return "";
}

function setOffAlarms(alarm, p) {
  alarm.setOff("Found Miscreant " + p);
}
