let defaultOwner = { firstName: "Martin", lastName: "Fowler" };
function getDefaultOwner() {
  return defaultOwner;
}
function setDefaultOwner({ firstName, lastName }) {
  defaultOwner = { firstName, lastName };
}
export { getDefaultOwner, setDefaultOwner };
