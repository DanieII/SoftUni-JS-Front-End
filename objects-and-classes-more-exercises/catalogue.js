function catalogue(input) {
  const products = {};

  for (const product of input) {
    const [name, price] = product.split(" : ");
    const initial = name[0];
    if (!products.hasOwnProperty(initial)) {
      products[initial] = [];
    }
    products[initial].push({ name, price });
  }

  const sortedProducts = Object.entries(products).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  for (let [initial, currentProducts] of sortedProducts) {
    currentProducts = currentProducts.sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    console.log(initial);
    for (const product of currentProducts) {
      console.log(`  ${product.name}: ${product.price}`);
    }
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
