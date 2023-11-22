class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
  }

  get totalCost() {
    const total = this.storage.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );

    return total;
  }

  addProduct(product) {
    this.capacity -= product.quantity;
    this.storage.push(product);
  }

  getProducts() {
    let products = [];

    for (const product of this.storage) {
      products.push(JSON.stringify(product));
    }

    return products.join("\n");
  }
}
