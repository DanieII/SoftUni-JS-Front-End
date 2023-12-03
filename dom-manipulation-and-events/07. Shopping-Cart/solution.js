function solve() {
  const cartTextarea = document.querySelector("textarea");
  const addToCartButtons = document.querySelectorAll(".add-product");
  const checkoutButton = document.querySelector(".checkout");
  const cart = [];

  for (const addToCartButton of addToCartButtons) {
    addToCartButton.addEventListener("click", handleAddToCartButtonClick);
  }

  checkoutButton.addEventListener("click", handleCheckoutButtonClick);

  function handleAddToCartButtonClick(e) {
    const product = e.target.parentNode.parentNode;
    const productTitle = product.querySelector(".product-title").textContent;
    const productPrice = Number(
      product.querySelector(".product-line-price").textContent,
    );
    cart.push({ productTitle, productPrice });
    cartTextarea.value += `Added ${productTitle} for ${productPrice.toFixed(
      2,
    )} to the cart.\n`;
  }

  function handleCheckoutButtonClick() {
    for (const addToCartButton of addToCartButtons) {
      addToCartButton.removeEventListener("click", handleAddToCartButtonClick);
    }

    const purchasedProducts = [];
    let totalPrice = 0;
    for (const product of cart) {
      const { productTitle, productPrice } = product;
      if (!purchasedProducts.includes(productTitle)) {
        purchasedProducts.push(productTitle);
      }
      totalPrice += productPrice;
    }

    cartTextarea.value += `You bought ${purchasedProducts.join(
      ", ",
    )} for ${totalPrice.toFixed(2)}.`;
    checkoutButton.removeEventListener("click", handleCheckoutButtonClick);
  }
}
