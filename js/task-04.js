function countTotalSalary(salaryList) {
  let sumSalary = 0;

  for (let value of Object.values(salaryList)) {
    sumSalary += value;
  }
  return sumSalary;
}

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);
