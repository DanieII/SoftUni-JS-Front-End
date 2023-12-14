function horseRacing(info) {
  const horses = info.shift().split("|");

  let command = info.shift();
  while (command !== "Finish") {
    command = command.split(" ");
    const action = command.shift();

    if (action === "Retake") {
      const [overtakingHorse, overtakenHorse] = command;
      const overtakingHorsePosition = horses.indexOf(overtakingHorse);
      const overtakenHorsePosition = horses.indexOf(overtakenHorse);

      if (overtakingHorsePosition < overtakenHorsePosition) {
        const temp = horses[overtakingHorsePosition];
        horses[overtakingHorsePosition] = horses[overtakenHorsePosition];
        horses[overtakenHorsePosition] = temp;

        console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
      }
    } else if (action === "Trouble") {
      const [horseName] = command;
      const horsePosition = horses.indexOf(horseName);

      if (horsePosition > 0) {
        const temp = horses[horsePosition];
        horses[horsePosition] = horses[horsePosition - 1];
        horses[horsePosition - 1] = temp;

        console.log(`Trouble for ${horseName} - drops one position.`);
      }
    } else if (action === "Rage") {
      const [horseName] = command;
      const horsePosition = horses.indexOf(horseName);

      if (horsePosition === horses.length - 2) {
        horses.splice(horsePosition, 1);
        horses.push(horseName);
      } else if (horsePosition !== horses.length - 1) {
        horses.splice(horsePosition, 1);
        horses.splice(horsePosition + 2, 0, horseName);
      }

      console.log(`${horseName} rages 2 positions ahead.`);
    } else if (action === "Miracle") {
      const lastHorseName = horses[0];
      horses.splice(0, 1);
      horses.push(lastHorseName);

      console.log(`What a miracle - ${lastHorseName} becomes first.`);
    }

    command = info.shift();
  }

  console.log(horses.join("->"));
  console.log(`The winner is: ${horses[horses.length - 1]}`);
}
