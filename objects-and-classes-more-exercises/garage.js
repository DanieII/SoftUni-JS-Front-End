function garage(input) {
  const carGarage = {};

  for (const car of input) {
    const [garage, carInfo] = car.split(" - ");
    const currentCar = {};

    for (const carFeature of carInfo.split(", ")) {
      const [key, value] = carFeature.split(": ");
      currentCar[key] = value;
    }

    if (!carGarage.hasOwnProperty(garage)) {
      carGarage[garage] = [];
    }
    carGarage[garage].push(currentCar);
  }

  for (const [garageNumber, cars] of Object.entries(carGarage)) {
    console.log(`Garage № ${garageNumber}`);

    for (const car of cars) {
      let carFeatures = [];
      for (const [carFeature, value] of Object.entries(car)) {
        carFeatures.push(`${carFeature} - ${value}`);
      }
      console.log(`--- ${carFeatures.join(", ")}`);
    }
  }
}
