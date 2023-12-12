const phonebook = document.querySelector("#phonebook");
const loadBtn = document.querySelector("#btnLoad");
const createBtn = document.querySelector("#btnCreate");
const personElement = document.querySelector("#person");
const phoneElement = document.querySelector("#phone");

function attachEvents() {
  loadBtn.addEventListener("click", handleLoadBtnClick);
  createBtn.addEventListener("click", handleCreateBtnClick);
}

async function handleLoadBtnClick() {
  const response = await fetch("http://localhost:3030/jsonstore/phonebook");
  const result = await response.json();

  phonebook.innerHTML = "";

  for (const [personId, personInfo] of Object.entries(result)) {
    const personElement = document.createElement("li");
    personElement.textContent = `${personInfo.person}: ${personInfo.phone}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.id = personInfo._id;
    deleteBtn.addEventListener("click", handleDeleteBtnClick);
    personElement.appendChild(deleteBtn);

    phonebook.appendChild(personElement);
  }
}

function handleDeleteBtnClick(e) {
  const currentId = e.target.dataset.id;
  fetch(`http://localhost:3030/jsonstore/phonebook/${currentId}`, {
    method: "DELETE",
  });
}

function handleCreateBtnClick() {
  fetch("http://localhost:3030/jsonstore/phonebook", {
    method: "POST",
    body: JSON.stringify({
      person: personElement.value,
      phone: phoneElement.value,
    }),
  });

  personElement.value = "";
  phoneElement.value = "";
  handleLoadBtnClick();
}

attachEvents();
