const loadBoardBtn = document.querySelector("#load-board-btn");
const addTaskBtn = document.querySelector("#create-task-btn");
const toDoSection = document.querySelector("#todo-section .task-list");
const inProgressSection = document.querySelector(
  "#in-progress-section .task-list",
);
const codeReviewSection = document.querySelector(
  "#code-review-section .task-list",
);
const doneSection = document.querySelector("#done-section .task-list");
const formTitle = document.querySelector("#title");
const formDescription = document.querySelector("#description");

const buttonsText = {
  ToDo: "Move to In Progress",
  "In Progress": "Move to Code Review",
  "Code Review": "Move to Done",
  Done: "Close",
};
const containers = {
  ToDo: toDoSection,
  "In Progress": inProgressSection,
  "Code Review": codeReviewSection,
  Done: doneSection,
};
const containerNames = Object.keys(containers);

function attachEvents() {
  loadBoardBtn.addEventListener("click", handleLoadBoardBtnClick);
  addTaskBtn.addEventListener("click", handleAddTaskBtnClick);
}

async function handleLoadBoardBtnClick() {
  toDoSection.innerHTML = "";
  inProgressSection.innerHTML = "";
  codeReviewSection.innerHTML = "";
  doneSection.innerHTML = "";

  const data = await (
    await fetch("http://localhost:3030/jsonstore/tasks/")
  ).json();

  for (const task of Object.values(data)) {
    addTaskElement(task);
  }
}

async function handleAddTaskBtnClick(e) {
  await fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify({
      title: formTitle.value,
      description: formDescription.value,
      status: "ToDo",
    }),
  });

  handleLoadBoardBtnClick();

  formTitle.value = "";
  formDescription.value = "";
}

function addTaskElement(task) {
  const taskElement = document.createElement("li");
  taskElement.className = "task";
  taskElement.dataset.id = task._id;

  const titleElement = document.createElement("h3");
  titleElement.textContent = task.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = task.description;

  const button = document.createElement("button");
  button.textContent = buttonsText[task.status];

  taskElement.appendChild(titleElement);
  taskElement.appendChild(descriptionElement);
  taskElement.appendChild(button);

  //   taskElement.innerHTML = `
  //     <h3>${task.title}</h3>
  //     <p>${task.description}</p>
  //     <button>${buttonsText[task.status]}</button>
  // `;

  // const button = taskElement.querySelector("button");

  button.addEventListener("click", moveElement);

  if (task.status === "ToDo") {
    toDoSection.appendChild(taskElement);
  } else if (task.status === "In Progress") {
    inProgressSection.appendChild(taskElement);
  } else if (task.status === "Code Review") {
    codeReviewSection.appendChild(taskElement);
  } else if (task.status === "Done") {
    doneSection.appendChild(taskElement);
  }
}

function moveElement(e) {
  const task = e.target.parentElement;
  const id = task.dataset.id;
  const taskContainer = task.parentElement.parentElement;
  const currentContainerName = taskContainer.querySelector("h1").textContent;
  const nextContainer =
    containers[
      containerNames[containerNames.indexOf(currentContainerName) + 1]
    ];

  task.remove();

  if (!nextContainer) {
    fetch(`http://localhost:3030/jsonstore/tasks/${id}`, { method: "DELETE" });
    handleLoadBoardBtnClick();
    return;
  }

  const nextContainerName =
    nextContainer.parentElement.querySelector("h1").textContent;
  const newButtonContent = buttonsText[nextContainerName];
  task.querySelector("button").textContent = newButtonContent;
  nextContainer.appendChild(task);

  fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status: nextContainerName }),
  });
}

attachEvents();
