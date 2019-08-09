function countTotalSalary(employees) {
  let sum = 0;

  for (let value of Object.values(employees)) {
    sum += value;
  }
  return sum;
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
