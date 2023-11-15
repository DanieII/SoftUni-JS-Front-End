function radioCrystals(targetAndCrystals) {
  const [target, ...crystals] = targetAndCrystals;
  const operations = {
    Cut: (thickness) => thickness / 4,
    Lap: (thickness) => thickness - thickness * 0.2,
    Grind: (thickness) => thickness - 20,
    Etch: (thickness) => thickness - 2,
    "X-ray": (thickness) => thickness + 1,
  };

  for (let crystalThickness of crystals) {
    console.log(`Processing chunk ${crystalThickness} microns`);
    for (const operationKey in operations) {
      const operation = operations[operationKey];
      let repetitions = 0;

      if (operationKey === "X-ray") {
        crystalThickness = operation(crystalThickness);
        console.log("X-ray x1");
      } else {
        let newThickness = operation(crystalThickness);
        while (newThickness >= target - 1) {
          crystalThickness = newThickness;
          repetitions++;
          newThickness = operation(crystalThickness);
        }

        if (repetitions) {
          crystalThickness = Math.floor(crystalThickness);

          console.log(`${operationKey} x${repetitions}`);
          console.log("Transporting and washing");
        }
      }
      if (crystalThickness === target) {
        break;
      }
    }
    console.log(`Finished crystal ${target} microns`);
  }
}
