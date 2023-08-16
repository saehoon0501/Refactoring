import {
  findMiscreant,
  alertForMiscreant,
} from "../../src/chp11/SeparateQueryFromModifier";

describe("findMiscreant", () => {
  it("find Don and set off alarm", () => {
    const alarm = { setOff: function (msg) {} };

    const spy = jest.spyOn(alarm, "setOff");

    expect(findMiscreant(["Tom", "Helen", "Don"], alarm)).toEqual("Don");
    alertForMiscreant(["Tom", "Helen", "Don"], alarm);
    expect(spy).toHaveBeenCalledWith("Found Miscreant Don");
  });

  it("find John and set off alarm", () => {
    const alarm = { setOff: function (msg) {} };

    const spy = jest.spyOn(alarm, "setOff");

    expect(findMiscreant(["Tom", "Helen", "John"], alarm)).toEqual("John");
    alertForMiscreant(["Tom", "Helen", "John"], alarm);
    expect(spy).toHaveBeenCalledWith("Found Miscreant John");
  });
});
