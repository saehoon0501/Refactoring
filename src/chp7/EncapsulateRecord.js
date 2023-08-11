const organization = { name: "Acme Gooseberries", country: "GB" };

function getOrganization() {
  return organization;
}

let result = "";
result = `<h1>${getOrganization().name}</h1>`;

export { getOrganization };
