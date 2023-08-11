import { getOrganization } from "../../src/chp7/EncapsulateRecord";

describe("organization", () => {
  it("should give right name", () => {
    expect(getOrganization().name).toEqual("Acme Gooseberries");
  });

  it("should set name", () => {
    let organization = getOrganization();
    organization.name = "new name";
    expect(organization.name).toEqual("new name");
  });
});
