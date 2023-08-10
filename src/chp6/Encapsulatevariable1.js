let defaultOwner = { firstName: "Martin", lastName: "Fowler" };
function getDefaultOwner() {
  return Object.assign({}, defaultOwner);
}
function setDefaultOwner({ firstName, lastName }) {
  defaultOwner = { firstName, lastName };
}
export { getDefaultOwner, setDefaultOwner };
