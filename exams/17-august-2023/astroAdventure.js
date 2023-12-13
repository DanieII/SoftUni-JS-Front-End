function astroAdventure(info) {
  const [numberOfAstronauts, ...rest] = info;
  const astronauts = [];

  for (let i = 1; i <= numberOfAstronauts; i++) {
    const currentAstronaut = rest.shift();
    const [name, oxygen, energy] = currentAstronaut.split(" ");
    astronauts.push({ name, oxygen: Number(oxygen), energy: Number(energy) });
  }

  const commands = rest.slice(0, rest.length - 1);

  for (const command of commands) {
    let [action, name, last] = command.split(" - ");
    last = Number(last);
    const astronaut = astronauts.filter((a) => a.name === name)[0];

    if (action === "Explore") {
      if (astronaut.energy > last) {
        astronaut.energy -= last;
        console.log(
          `${astronaut.name} has successfully explored a new area and now has ${astronaut.energy} energy!`,
        );
      } else {
        console.log(
          `${astronaut.name} does not have enough energy to explore!`,
        );
      }
    } else if (action === "Refuel") {
      let refueledAmount;
      if (astronaut.energy + last > 200) {
        refueledAmount = 200 - astronaut.energy;
        astronaut.energy = 200;
      } else {
        refueledAmount = last;
        astronaut.energy += last;
      }
      console.log(
        `${astronaut.name} refueled their energy by ${refueledAmount}!`,
      );
    } else if (action === "Breathe") {
      let recoveredAmount;
      if (astronaut.oxygen + last > 100) {
        recoveredAmount = 100 - astronaut.oxygen;
        astronaut.oxygen = 100;
      } else {
        recoveredAmount = last;
        astronaut.oxygen += last;
      }
      console.log(
        `${astronaut.name} took a breath and recovered ${recoveredAmount} oxygen!`,
      );
    }
  }

  for (const astronaut of astronauts) {
    console.log(
      `Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`,
    );
  }
}

astroAdventure([
  "4",
  "Alice 60 100",
  "Bob 40 80",
  "Charlie 70 150",
  "Dave 80 180",
  "Explore - Bob - 60",
  "Refuel - Alice - 30",
  "Breathe - Charlie - 50",
  "Refuel - Dave - 40",
  "Explore - Bob - 40",
  "Breathe - Charlie - 30",
  "Explore - Alice - 40",
  "End",
]);
