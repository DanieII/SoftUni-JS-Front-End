const loadVacationsBtn = document.querySelector("#load-vacations");
const vacationList = document.querySelector("#list");
const addVacationBtn = document.querySelector("#add-vacation");
const editVacationBtn = document.querySelector("#edit-vacation");
const [formName, formDays, formDate] = document.querySelectorAll("#form input");

loadVacationsBtn.addEventListener("click", loadVacations);
addVacationBtn.addEventListener("click", handleAddVacationBtnClick);
editVacationBtn.addEventListener("click", handleEditVacationBtnClick);

async function loadVacations() {
  vacationList.innerHTML = "";
  const result = await (
    await fetch("http://localhost:3030/jsonstore/tasks/")
  ).json();

  for (const vacationInfo of Object.values(result)) {
    const vacation = document.createElement("div");
    vacation.className = "container";
    vacation.innerHTML = `
    <h2>${vacationInfo.name}</h2>
    <h3>${vacationInfo.date}</h3>
    <h3>${vacationInfo.days}</h3>
    <button class="change-btn">Change</button>
    <button class="done-btn">Done</button>
`;

    const [changeBtn, doneBtn] = vacation.querySelectorAll("button");
    changeBtn.addEventListener("click", handleChangeBtnClick);
    doneBtn.addEventListener("click", handleDoneBtnClick);

    vacation.dataset.id = vacationInfo._id;
    vacationList.appendChild(vacation);
  }
}

async function handleAddVacationBtnClick(e) {
  e.preventDefault();

  await fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify({
      name: formName.value,
      date: formDate.value,
      days: formDays.value,
    }),
  });

  loadVacations();
  formName.value = "";
  formDate.value = "";
  formDays.value = "";
}

function handleChangeBtnClick(e) {
  const vacation = e.target.parentElement;
  vacation.remove();

  const name = e.target.parentElement.querySelector("h2");
  const [date, days] = e.target.parentElement.querySelectorAll("h3");

  formName.value = name.textContent;
  formDays.value = days.textContent;
  formDate.value = date.textContent;
  addVacationBtn.disabled = true;
  editVacationBtn.disabled = false;

  editVacationBtn.dataset.id = vacation.dataset.id;
}

async function handleEditVacationBtnClick(e) {
  e.preventDefault();

  const id = e.target.dataset.id;

  await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      _id: id,
      name: formName.value,
      date: formDate.value,
      days: formDays.value,
    }),
  });

  loadVacations();
  editVacationBtn.disabled = true;
  addVacationBtn.disabled = false;
}

async function handleDoneBtnClick(e) {
  const id = e.target.parentElement.dataset.id;

  await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "DELETE",
  });

  loadVacations();
}
