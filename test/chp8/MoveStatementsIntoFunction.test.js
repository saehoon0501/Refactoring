import {
  photoDiv,
  renderPerson,
} from "../../src/chp8/MoveStatementsIntoFunction";

const date = new Date("May 10, 2019");

const aPerson = {
  name: "Alex",
  photo: {
    title: "holiday",
    location: "Greece",
    date: date,
  },
};

describe("photoDiv", () => {
  it("render a photo div", () => {
    expect(photoDiv(aPerson.photo)).toEqual(
      "<div>\n<p>title: holiday</p>\n<p>location: Greece</p>\n<p>date: Fri May 10 2019</p>\n</div>"
    );
  });
});

describe("renderPerson", () => {
  it("has bankCharge of 4.5 when daysOverdrawn is 0", () => {
    expect(renderPerson(aPerson)).toEqual(
      "<p>Alex</p>\n\n<p>title: holiday</p>\n<p>location: Greece</p>\n<p>date: Fri May 10 2019</p>"
    );
  });
});
