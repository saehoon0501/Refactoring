function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return xxinNewEngland(stateCode);
}

function xxinNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

export { inNewEngland };
