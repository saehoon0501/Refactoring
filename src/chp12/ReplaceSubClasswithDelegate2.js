class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
  }
  get plumage() {
    return this._plumage || "average";
  }
  get airSpeedVelocity() {
    return null;
  }
  get name() {
    return this._name;
  }
}

class EuropeanSwallow extends Bird {
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallow extends Bird {
  constructor(data) {
    super(data);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get plumage() {
    return this.voltage > 100 ? "scorched" : "beautiful";
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

function createBird(bird) {
  switch (bird.type) {
    case "EuropeanSwallow":
      return new EuropeanSwallow(bird);
    case "AfricanSwallow":
      return new AfricanSwallow(bird);
    case "NorwegianBlueParrot":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

export function plumages(birds) {
  return new Map(
    birds.map((b) => createBird(b)).map((b) => [b.name, b.plumage])
  );
}
export function speeds(birds) {
  return new Map(
    birds.map((b) => createBird(b)).map((b) => [b.name, b.airSpeedVelocity])
  );
}
