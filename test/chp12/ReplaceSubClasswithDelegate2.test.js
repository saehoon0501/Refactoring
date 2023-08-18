import {
  plumages,
  speeds,
} from "../../src/chp12/ReplaceSubClasswithDelegate2.js";

describe("plumages", () => {
  it("calculates plumages for all supported birds, gives unknown for unsupported ", () => {
    const birds = [
      {
        name: "EuropeanSwallow",
        type: "EuropeanSwallow",
        numberOfCoconuts: 1,
        voltage: 100,
        plumage: "average",
      },
      {
        name: "AfricanSwallow",
        type: "AfricanSwallow",
        numberOfCoconuts: 2,
        voltage: 200,
        plumage: "average",
      },
      {
        name: "NorwegianBlueParrot",
        type: "NorwegianBlueParrot",
        numberOfCoconuts: 3,
        voltage: 300,
        plumage: "scorched",
      },
    ];

    expect(plumages(birds)).toEqual(
      new Map([
        ["EuropeanSwallow", "average"],
        ["AfricanSwallow", "average"],
        ["NorwegianBlueParrot", "scorched"],
      ])
    );
  });
});

describe("speeds", () => {
  it("calculates airSpeedVelocity for all supported birds, gives null for unsupported ", () => {
    const birds = [
      {
        name: "EuropeanSwallow",
        type: "EuropeanSwallow",
        numberOfCoconuts: 1,
        voltage: 100,
        isNailed: false,
      },
      {
        name: "AfricanSwallow",
        type: "AfricanSwallow",
        numberOfCoconuts: 2,
        voltage: 200,
        isNailed: false,
      },
      {
        name: "NorwegianBlueParrot",
        type: "NorwegianBlueParrot",
        numberOfCoconuts: 3,
        voltage: 300,
        isNailed: false,
      },
    ];

    expect(speeds(birds)).toEqual(
      new Map([
        ["EuropeanSwallow", 35],
        ["AfricanSwallow", 36],
        ["NorwegianBlueParrot", 40],
      ])
    );
  });
});
