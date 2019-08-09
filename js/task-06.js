const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

function calculateTotalPrice(arr, productName) {
  for (let args of arr) {
    for (let key in args) {
      if (args.key === productName) {
        return args.price * args.quantity;
      }
    }
  }
}

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));
