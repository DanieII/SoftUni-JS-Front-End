function fruit(fruitName, gramsWeight, pricePerKilogram) {
  const kilogramsToBuy = gramsWeight / 1000;
  const priceForKilograms = kilogramsToBuy * pricePerKilogram;
  console.log(
    `I need $${priceForKilograms.toFixed(2)} to buy ${kilogramsToBuy.toFixed(
      2,
    )} kilograms ${fruitName}.`,
  );
}
