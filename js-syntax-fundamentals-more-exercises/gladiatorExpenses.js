function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice,
) {
  let expenses = 0;
  let shieldBreaksCount = 0;

  for (let fightCount = 1; fightCount <= lostFightsCount; fightCount++) {
    const secondTime = fightCount % 2 === 0;
    const thirdTime = fightCount % 3 === 0;
    if (secondTime) {
      expenses += helmetPrice;
    }
    if (thirdTime) {
      expenses += swordPrice;
    }
    if (secondTime && thirdTime) {
      expenses += shieldPrice;
      shieldBreaksCount += 1;
      if (shieldBreaksCount % 2 == 0) {
        expenses += armorPrice;
      }
    }
  }

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
