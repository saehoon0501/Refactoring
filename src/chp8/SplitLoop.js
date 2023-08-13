export function reportYoungestAgeAndTotalSalary(people) {
  let totalSalary = ztotalSalary(people);

  let youngest = youngestAge(people);

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

function ztotalSalary(people) {
  let result = 0;
  for (const p of people) {
    result += p.salary;
  }
  return result;
}

function youngestAge(people) {
  let result = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < result) result = p.age;
  }
  return result;
}
