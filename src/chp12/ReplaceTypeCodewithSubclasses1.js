export class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = Employee.createEmployeeType(type);
  }

  get type() {
    return this._type;
  }
  set type(arg) {
    this._type = new EmployeeType(arg);
  }
  static createEmployeeType(aString) {
    switch (aString) {
      case "engineer":
        return new Engineer();
      case "manager":
        return new Manager();
      case "salesman":
        return new Salesperson();
      default:
        throw new Error(`${aString} cannot be of type invalid code`);
    }
  }
  get typeString() {
    return this._type.toString();
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesman"].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }

  toString() {
    return `${this._name} (${this._type})`;
  }
}

export function createEmployee(name, type) {
  return new Employee(name, type);
}

class EmployeeType {}

class Engineer extends EmployeeType {
  toString() {
    return "engineer";
  }
}
class Manager extends EmployeeType {
  toString() {
    return "manager";
  }
}
class Salesperson extends EmployeeType {
  toString() {
    return "salesman";
  }
}
