function printOwing(invoice, console, Clock) {
  printBanner(console);
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice, Clock);
  printDetails(invoice, outstanding, console);
}

function printBanner(console) {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function printDetails(invoice, outstanding, console) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice, Clock) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

export { printOwing };
