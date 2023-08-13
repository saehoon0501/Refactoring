export function reportYoungestAgeAndTotalSalary(people) {
  let totalSalary = ztotalSalary(people);

  let youngest = youngestAge(people);

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

function ztotalSalary(people) {
  return people.reduce((total, p) => total + p.salary, 0);
}

function youngestAge(people) {
  return Math.min(...people.map((p) => p.age));
}
