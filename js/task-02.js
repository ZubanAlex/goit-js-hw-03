function countProps(obj) {
  let totalProps = 0;
  for (let prop of Object.keys(obj)) {
    totalProps += 1;
  }
  return totalProps;
}

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
