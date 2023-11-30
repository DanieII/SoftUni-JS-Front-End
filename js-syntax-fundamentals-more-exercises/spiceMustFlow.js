function spiceMustFlow(startingYield) {
  const dailyConsumptionByWorkers = 26;
  let currentYield = startingYield;
  let extracedSpices = 0;
  let days = 0;

  function consumeSpices() {
    if (extracedSpices >= dailyConsumptionByWorkers) {
      extracedSpices -= dailyConsumptionByWorkers;
    }
  }

  while (currentYield >= 100) {
    days += 1;
    extracedSpices += currentYield;
    consumeSpices();
    currentYield -= 10;
  }
  consumeSpices();

  console.log(days);
  console.log(extracedSpices);
}
