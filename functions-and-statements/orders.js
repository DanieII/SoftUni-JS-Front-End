function orders(product, quantity) {
  const products = {
    coffee: 1.5,
    water: 1,
    coke: 1.4,
    snacks: 2,
  };

  const productPrice = products[product];
  const totalPrice = productPrice * quantity;
  console.log(totalPrice.toFixed(2));
}
