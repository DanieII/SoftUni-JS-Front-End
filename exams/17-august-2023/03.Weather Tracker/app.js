const loadHistoryBtn = document.querySelector("#load-history");
const weatherContainer = document.querySelector("#history #list");
const addWeatherBtn = document.querySelector("#add-weather");
const editWeatherBtn = document.querySelector("#edit-weather");
const formFields = document.querySelectorAll("#form input");
const [formLocation, formTemperature, formDate] = formFields;

loadHistoryBtn.addEventListener("click", handleLoadHistoryBtnClick);
addWeatherBtn.addEventListener("click", handleAddWeatherBtnClick);
editWeatherBtn.addEventListener("click", handleEditWeatherBtnClick);

async function handleLoadHistoryBtnClick() {
  const response = await fetch("http://localhost:3030/jsonstore/tasks/");
  const result = await response.json();
  weatherContainer.innerHTML = "";

  for (const [weatherId, weatherInfo] of Object.entries(result)) {
    const weather = document.createElement("div");
    weather.className = "container";
    weather.dataset.id = weatherInfo._id;
    weather.innerHTML = `
    <h2>${weatherInfo.location}</h2>
    <h3>${weatherInfo.date}</h3>
    <h3 id="celsius">${weatherInfo.temperature}</h3>
    <div id="buttons-container">  
      <button class="change-btn">Change</button>
      <button class="delete-btn">Delete</button>
    </div>
`;
    const [changeBtn, deleteBtn] = weather.querySelectorAll("button");
    changeBtn.addEventListener("click", handleChangeBtnClick);
    deleteBtn.addEventListener("click", handleDeleteBtnClick);

    weatherContainer.appendChild(weather);
  }
}

async function handleAddWeatherBtnClick(e) {
  const [location, temperature, date] =
    e.target.parentElement.parentElement.querySelectorAll("input");
  await fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify({
      location: location.value,
      temperature: temperature.value,
      date: date.value,
    }),
  });
  formLocation.value = "";
  formTemperature.value = "";
  formDate.value = "";
  handleLoadHistoryBtnClick();
}

function handleChangeBtnClick(e) {
  const weatherElement = e.target.parentElement.parentElement;
  weatherElement.remove();

  const location = weatherElement.querySelector("h2");
  const [date, temperature] = weatherElement.querySelectorAll("h3");
  formLocation.value = location.textContent;
  formTemperature.value = temperature.textContent;
  formDate.value = date.textContent;

  addWeatherBtn.disabled = true;
  editWeatherBtn.disabled = false;
  editWeatherBtn.dataset.id = weatherElement.dataset.id;
}

async function handleEditWeatherBtnClick(e) {
  const id = e.target.dataset.id;
  const response = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      location: formLocation.value,
      temperature: formTemperature.value,
      date: formDate.value,
      _id: id,
    }),
  });

  addWeatherBtn.disabled = false;
  editWeatherBtn.disabled = true;
  handleLoadHistoryBtnClick();
}

function handleDeleteBtnClick(e) {
  const weatherElement = e.target.parentElement.parentElement;
  const id = weatherElement.dataset.id;
  weatherElement.remove();
  fetch(`http://localhost:3030/jsonstore/tasks/${id}`, { method: "DELETE" });
}
