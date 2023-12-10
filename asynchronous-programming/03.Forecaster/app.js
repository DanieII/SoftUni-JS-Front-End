const locationElement = document.querySelector("#location");
const getWeatherBtn = document.querySelector("input[value='Get Weather']");
const forecastContainer = document.querySelector("#forecast");
const currentForecastsContainer = document.querySelector("#current");
const upcomingForecastContainer = document.querySelector("#upcoming");

const conditionSymbols = {
  Sunny: "&#x2600;",
  "Partly sunny": "&#x26C5;",
  Overcast: "&#x2601;",
  Rain: "&#x2614;",
  Degrees: "&#176;",
};

function attachEvents() {
  getWeatherBtn.addEventListener("click", handleGetWeatherClick);
}

function handleGetWeatherClick() {
  fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
    .then((res) => res.json())
    .then((res) => getLocationInfo(res))
    .then((info) => {
      forecastContainer.style.display = "block";

      displayCurrentConditions(info);
      displayUpcomingConditions(info);
    })
    .catch((err) => handleError());
}

function getLocationInfo(allLocations) {
  const neededLocation = locationElement.value;
  let locationCode;
  const locationInformation = {};

  for (const location of allLocations) {
    if (location.name === neededLocation) {
      locationCode = location.code;
      break;
    }
  }

  const currentPromise = fetch(
    `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`,
  )
    .then((res) => res.json())
    .then((res) => {
      locationInformation.name = res.name;
      locationInformation.currentForecast = { ...res.forecast };
    });

  const upcomingPromise = fetch(
    `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`,
  )
    .then((res) => res.json())
    .then((res) => {
      locationInformation.forecast = res.forecast;
    });

  return Promise.all([currentPromise, upcomingPromise]).then(
    (res) => locationInformation,
  );
}

function handleError() {
  forecastContainer.textContent = "Error";
}

function displayCurrentConditions(info) {
  const forecast = document.createElement("div");
  forecast.className = "forecasts";

  const conditionSymbol = createSymbolContainer(info.currentForecast);
  conditionSymbol.classList.add("condition");

  const conditionContainer = document.createElement("span");
  conditionContainer.className = "condition";

  const nameContainer = document.createElement("span");
  nameContainer.textContent = info.name;
  nameContainer.className = "forecast-data";

  const currentConditionContainer = createConditionContainer(
    info.currentForecast,
  );

  const degreesContainer = createDegreesContainer(info.currentForecast);

  conditionContainer.appendChild(nameContainer);
  conditionContainer.appendChild(degreesContainer);
  conditionContainer.appendChild(currentConditionContainer);

  forecast.appendChild(conditionSymbol);
  forecast.appendChild(conditionContainer);
  currentForecastsContainer.appendChild(forecast);
}

function displayUpcomingConditions(info) {
  const forecastInfoContainer = document.createElement("div");
  forecastInfoContainer.className = "forecast-info";

  for (const forecast of info.forecast) {
    const upcomingContainer = document.createElement("span");
    upcomingContainer.className = "upcoming";

    const symbolContainer = createSymbolContainer(forecast);
    const degreesContainer = createDegreesContainer(forecast);
    const conditionContainer = createConditionContainer(forecast);

    upcomingContainer.appendChild(symbolContainer);
    upcomingContainer.appendChild(degreesContainer);
    upcomingContainer.appendChild(conditionContainer);

    forecastInfoContainer.appendChild(upcomingContainer);
  }

  upcomingForecastContainer.appendChild(forecastInfoContainer);
}

function createSymbolContainer(info) {
  const conditionSymbol = document.createElement("span");
  conditionSymbol.className = "symbol";
  conditionSymbol.innerHTML = conditionSymbols[info.condition];

  return conditionSymbol;
}

function createDegreesContainer(info) {
  const degreesContainer = document.createElement("span");
  degreesContainer.innerHTML = `${info.low}&deg;/${info.high}&deg;`;
  degreesContainer.className = "forecast-data";
  return degreesContainer;
}

function createConditionContainer(info) {
  const currentConditionContainer = document.createElement("span");
  currentConditionContainer.textContent = info.condition;
  currentConditionContainer.className = "forecast-data";

  return currentConditionContainer;
}

attachEvents();
