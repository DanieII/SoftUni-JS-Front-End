function flightSchedule(input) {
  let [flights, changedFlights, flightStatus] = input;
  flightStatus = flightStatus.pop();
  const validFlights = [];

  for (const flight of flights) {
    let [flightNumber, ...flightDestination] = flight.split(" ");
    flightDestination = flightDestination.join(" ");
    let isChanged = false;

    for (const changedFlight of changedFlights) {
      let [changedFlightNumber, _] = changedFlight.split(" ");
      isChanged = flightNumber === changedFlightNumber;

      if (isChanged && flightStatus !== "Ready to fly") {
        validFlights.push({
          Destination: flightDestination,
          Status: "Cancelled",
        });
      }

      if (isChanged) {
        break;
      }
    }

    if (!isChanged && flightStatus === "Ready to fly") {
      validFlights.push({
        Destination: flightDestination,
        Status: "Ready to fly",
      });
    }
  }

  for (const flight of validFlights) {
    console.log(flight);
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
