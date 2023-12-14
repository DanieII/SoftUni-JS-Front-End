function motoGpRace(info) {
  const numberOfRiders = info.shift();
  const riders = {};

  for (let i = 0; i < numberOfRiders; i++) {
    const currentRider = info.shift();
    const [name, fuel, position] = currentRider.split("|");
    riders[name] = { fuel: Number(fuel), position: Number(position) };
  }

  let currentCommand = info.shift();
  while (currentCommand !== "Finish") {
    currentCommand = currentCommand.split(" - ");
    const action = currentCommand.shift();

    if (action === "StopForFuel") {
      const [rider, minimumFuel, changedPosition] = currentCommand;
      const currentRider = riders[rider];

      if (currentRider.fuel < Number(minimumFuel)) {
        currentRider.position = Number(changedPosition);

        console.log(
          `${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`,
        );
      } else {
        console.log(`${rider} does not need to stop for fuel!`);
      }
    } else if (action === "Overtaking") {
      const [rider1, rider2] = currentCommand;
      const currentRider1 = riders[rider1];
      const currentRider2 = riders[rider2];

      if (currentRider1.position < currentRider2.position) {
        const temp = currentRider1.position;
        currentRider1.position = currentRider2.position;
        currentRider2.position = temp;

        console.log(`${rider1} overtook ${rider2}!`);
      }
    } else if (action === "EngineFail") {
      const [rider, lapsLeft] = currentCommand;

      delete riders[rider];

      console.log(
        `${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`,
      );
    }

    currentCommand = info.shift();
  }

  for (const [rider, riderInfo] of Object.entries(riders)) {
    const { fuel, position } = riderInfo;
    console.log(`${rider}
  Final position: ${position}`);
  }
}
