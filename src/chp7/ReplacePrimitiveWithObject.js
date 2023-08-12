class Order {
  constructor(data) {
    this._priority = data.priority;
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = aString;
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;

export { highPriorityCount };
