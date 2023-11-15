function carWash(commands) {
  const actions = {
    soap: (value) => value + 10,
    water: (value) => value + value * 0.2,
    "vacuum cleaner": (value) => value + value * 0.25,
    mud: (value) => value - value * 0.1,
  };
  let value = 0;

  for (const command of commands) {
    value = actions[command](value);
  }

  console.log(`The car is ${value.toFixed(2)}% clean.`);
}
