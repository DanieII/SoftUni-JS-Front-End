function getInfo() {
  const busId = document.querySelector("#stopId");
  const busesContainer = document.querySelector("#buses");
  const stopName = document.querySelector("#stopName");

  fetch(`http://localhost:3030/jsonstore/bus/businfo/${busId.value}`)
    .then((res) => res.json())
    .then((res) => displayInformation(res))
    .catch((err) => displayError());

  function displayInformation(response) {
    const busesInformation = Object.entries(response.buses);

    if (!(busesInformation.length > 0)) {
      displayError();
    }

    for (const [busNumber, time] of busesInformation) {
      const currentBusInfo = document.createElement("li");
      currentBusInfo.textContent = `Bus ${busNumber} arrives in ${time} minutes`;
      busesContainer.appendChild(currentBusInfo);
    }
    stopName.textContent = response.name;
  }

  function displayError() {
    stopName.textContent = "Error";
  }
}
