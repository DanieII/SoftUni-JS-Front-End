function bitcoinMining(days) {
  const bitcoinPrice = 11949.16;
  const gramOfGoldPrice = 67.51;
  let money = 0;
  let boughtBitcoinsCount = 0;
  let firstBoughtDay;

  for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
    const currentDayMinedGold = days[dayIndex];
    let currentDayGains = currentDayMinedGold * gramOfGoldPrice;
    const currentDay = dayIndex + 1;

    if (currentDay % 3 === 0) {
      currentDayGains *= 0.7;
    }

    money += currentDayGains;

    while (money >= bitcoinPrice) {
      money -= bitcoinPrice;
      boughtBitcoinsCount++;

      if (!firstBoughtDay) {
        firstBoughtDay = currentDay;
      }
    }
  }

  console.log(`Bought bitcoins: ${boughtBitcoinsCount}`);
  if (firstBoughtDay) {
    console.log(`Day of the first purchased bitcoin: ${firstBoughtDay}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
