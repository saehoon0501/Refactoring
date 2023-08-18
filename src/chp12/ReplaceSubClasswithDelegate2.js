class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }
  get plumage() {
    return this._speciesDelegate.plumage;
  }
  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }
  get name() {
    return this._name;
  }

  selectSpeciesDelegate(data) {
    switch (data.type) {
      case "EuropeanSwallow":
        return new EuropeanSwallowDelegate(data, this);
      case "AfricanSwallow":
        return new AfricanSwallowDelegate(data, this);
      case "NorwegianBlueParrot":
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return new SpeciesDelegate(data, this);
    }
  }
}

class SpeciesDelegate {
  constructor(data, bird) {
    this._bird = bird;
  }
  get plumage() {
    return this._bird._plumage || "average";
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallowDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get plumage() {
    return this._voltage > 100
      ? "scorched"
      : this._bird._plumage || "beautiful";
  }
  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get plumage() {
    return this._speciesDelegate.plumage;
  }
  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }
}

export function plumages(birds) {
  return new Map(birds.map((b) => new Bird(b)).map((b) => [b.name, b.plumage]));
}
export function speeds(birds) {
  return new Map(
    birds.map((b) => new Bird(b)).map((b) => [b.name, b.airSpeedVelocity])
  );
}