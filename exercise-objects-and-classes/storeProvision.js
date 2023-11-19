function storeProvision(stock, orders) {
  function increaseProductQuantity(products, productName, productQuantity) {
    if (!products.hasOwnProperty(productName)) {
      products[productName] = 0;
    }
    products[productName] += productQuantity;
  }

  function getProductsObjectFromArray(array) {
    const productsObject = {};

    for (let i = 0; i < array.length; i += 2) {
      const productName = array[i];
      const productQuantity = Number(array[i + 1]);
      increaseProductQuantity(productsObject, productName, productQuantity);
    }

    return productsObject;
  }

  stock = getProductsObjectFromArray(stock);
  orders = getProductsObjectFromArray(orders);

  for (const productName in orders) {
    const productQuantity = orders[productName];
    increaseProductQuantity(stock, productName, productQuantity);
  }

  for (const [productName, productQuantity] of Object.entries(stock)) {
    console.log(`${productName} -> ${productQuantity}`);
  }
}
