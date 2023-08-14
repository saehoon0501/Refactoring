export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "unknown"
      ? new UnknownCustomer()
      : this._customer;
  }
}

export class Customer {
  constructor(name, billingPlan, paymentHistory) {
    this._name = name;
    this._billingPlan = billingPlan;
    this._paymentHistory = paymentHistory;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(arg) {
    this._billingPlan = arg;
  }

  get paymentHistory() {
    return this._paymentHistory;
  }

  get isUnknown() {
    return false;
  }
}

export class UnknownCustomer {
  get isUnknown() {
    return true;
  }
  get name() {
    return "occupant";
  }
  get billingPlan() {
    return registry.billingPlans.basic;
  }
  set billingPlan(arg) {}

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

// client 1…

export function customerName(site) {
  const aCustomer = site.customer;
  // ... lots of intervening code ...
  let customerName = aCustomer.name;
  return customerName;
}

//client 2

const registry = {
  billingPlans: {
    basic: "basic",
  },
};

export function billingPlan(site) {
  const aCustomer = site.customer;
  const plan = aCustomer.billingPlan;
  return plan;
}

//client 3
export function changeBillingPlan(site, newPlan) {
  const aCustomer = site.customer;
  aCustomer.billingPlan = newPlan;
  return aCustomer;
}

//client 4
export function weeksDelinquent(site) {
  const aCustomer = site.customer;
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
  return weeksDelinquent;
}
