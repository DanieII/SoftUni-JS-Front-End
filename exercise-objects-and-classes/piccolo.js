function piccolo(input) {
  let parking = [];

  input.forEach((car) => {
    const [direction, carNumber] = car.split(", ");
    if (direction === "IN" && !parking.includes(carNumber)) {
      parking.push(carNumber);
    } else if (direction === "OUT" && parking.includes(carNumber)) {
      parking.splice(parking.indexOf(carNumber), 1);
    }
  });

  parking = parking.sort((a, b) => a.localeCompare(b));
  if (parking.length > 0) {
    parking.map((carNumber) => console.log(carNumber));
  } else {
    console.log("Parking Lot is Empty");
  }
}
