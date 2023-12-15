const loadAllBtn = document.querySelector("#load-button");
const addBtn = document.querySelector("#add-button");
const toDoList = document.querySelector("#todo-list");
const formTitle = document.querySelector("#title");

function attachEvents() {
  loadAllBtn.addEventListener("click", loadItems);
  addBtn.addEventListener("click", handleAddBtnClick);
}

async function loadItems(e) {
  e.preventDefault();

  toDoList.innerHTML = "";

  const data = await (
    await fetch("http://localhost:3030/jsonstore/tasks/")
  ).json();

  for (const item of Object.values(data)) {
    const itemElement = document.createElement("li");
    itemElement.dataset.id = item._id;

    const title = createFilledElement("span", item.name);
    const removeBtn = createFilledElement("button", "Remove");
    const editBtn = createFilledElement("button", "Edit");

    removeBtn.addEventListener("click", handleRemoveBtnClick);
    editBtn.addEventListener("click", handleEditBtnClick);

    itemElement.appendChild(title);
    itemElement.appendChild(removeBtn);
    itemElement.appendChild(editBtn);

    toDoList.appendChild(itemElement);
  }
}

async function handleAddBtnClick(e) {
  e.preventDefault();

  await fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify({ name: formTitle.value }),
  });

  loadItems(e);
}

async function handleRemoveBtnClick(e) {
  const item = e.target.parentElement;
  const id = item.dataset.id;

  await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "DELETE",
  });

  loadItems(e);
}

function handleEditBtnClick(e) {
  const item = e.target.parentElement;
  const titleElement = item.querySelector("span");
  const title = titleElement.textContent;
  const editBtn = item.querySelectorAll("button")[1];

  titleElement.remove();

  const inputElement = document.createElement("input");
  inputElement.value = title;
  item.prepend(inputElement);

  editBtn.removeEventListener("click", handleEditBtnClick);
  editBtn.textContent = "Submit";
  editBtn.addEventListener("click", handleSubmitBtnClick);
}

async function handleSubmitBtnClick(e) {
  const item = e.target.parentElement;
  const newTitle = item.querySelector("input").value;
  const id = item.dataset.id;

  await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ name: newTitle }),
  });

  loadItems(e);
}

function createFilledElement(type, content = "", className = "") {
  const element = document.createElement(type);

  if (content) {
    element.textContent = content;
  }

  if (className) {
    element.className = className;
  }

  return element;
}

attachEvents();
