import {
  getDefaultOwner,
  setDefaultOwner,
} from "../../src/chp6/Encapsulatevariable1";

describe("defaultOwner", () => {
  it("is Martin Folwer", () => {
    let spaceship = {};
    spaceship.owner = getDefaultOwner();

    expect(spaceship.owner.firstName).toEqual("Martin");
    expect(spaceship.owner.lastName).toEqual("Fowler");
  });

  it("can be set", () => {
    setDefaultOwner({ firstName: "Mike", lastName: "Jackson" });

    let newDefaultUser = getDefaultOwner();

    expect(newDefaultUser.firstName).toEqual("Mike");
    expect(newDefaultUser.lastName).toEqual("Jackson");
  });

  it("can not be changed outside the code", () => {
    let defaultUser = getDefaultOwner();
    let anotherDefaultUser = getDefaultOwner();

    anotherDefaultUser.lastName = "new last name";

    expect(getDefaultOwner().firstName).toEqual(defaultUser.firstName);
    expect(getDefaultOwner().lastName).toEqual(defaultUser.lastName);
  });
});
