window.addEventListener("load", solve);

function solve() {
  let taskId = 0;

  const inputId = document.querySelector("#task-id");
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const label = document.querySelector("#label");
  const points = document.querySelector("#points");
  const assignee = document.querySelector("#assignee");

  const tasks = document.querySelector("#tasks-section");
  const createBtn = document.querySelector("#create-task-btn");
  const deleteTaskBtn = document.querySelector("#delete-task-btn");
  const totalPointsElement = document.querySelector("#total-sprint-points");

  createBtn.addEventListener("click", handleCreateBtnClick);
  deleteTaskBtn.addEventListener("click", handleDeleteTaskBtnClick);

  function handleCreateBtnClick() {
    if (
      !title.value ||
      !description.value ||
      !label.value ||
      !points.value ||
      !assignee.value
    ) {
      return;
    }

    taskId++;
    const task = document.createElement("article");

    let labelText;
    let labelClass;
    if (label.value === "Feature") {
      labelText = "Feature &#8865;";
      labelClass = "feature";
    } else if (label.value === "Low Priority Bug") {
      labelText = "Low Priority Bug &#9737;";
      labelClass = "low-priority";
    } else if (label.value === "High Priority Bug") {
      labelText = "High Priority Bug &#9888;";
      labelClass = "high-priority";
    }

    task.id = `task-${taskId}`;
    task.className = "task-card";
    task.innerHTML = `
    <div id="${taskId}" class="task-card-label ${labelClass}">${labelText}</div>
    <h3 class="task-card-title">${title.value}</h3>
    <p class="task-card-description">${description.value}</p>
    <div class="task-card-points">Estimated at ${points.value} pts</div>
    <div class="task-card-assignee">Assigned to: ${assignee.value}</div>
    <div class="task-card-actions">
      <button>Delete</button>
    </div>    
`;

    const deleteBtn = task.querySelector("button");
    deleteBtn.addEventListener("click", handleDeleteBtnClick);

    setTotalPoints(Number(points.value));

    tasks.appendChild(task);
    title.value = "";
    description.value = "";
    label.value = "";
    points.value = "";
    assignee.value = "";
  }

  function handleDeleteBtnClick(e) {
    const task = e.target.parentElement.parentElement;

    let taskLabel = task.querySelector(".task-card-label").textContent;
    taskLabel = taskLabel.split(" ");
    taskLabel.splice(taskLabel.length - 1, 1);
    taskLabel = taskLabel.join(" ");

    const taskTitle = task.querySelector(".task-card-title").textContent;
    const taskDescription = task.querySelector(
      ".task-card-description",
    ).textContent;
    const taskPoints = task
      .querySelector(".task-card-points")
      .textContent.split(" ")[2];
    const taskAssignee = task
      .querySelector(".task-card-assignee")
      .textContent.split(": ")[1];

    inputId.value = task.id;
    label.value = taskLabel;
    title.value = taskTitle;
    description.value = taskDescription;
    points.value = taskPoints;
    assignee.value = taskAssignee;

    deleteTaskBtn.disabled = false;
    createBtn.disabled = true;
    label.disabled = true;
    title.disabled = true;
    description.disabled = true;
    points.disabled = true;
    assignee.disabled = true;
  }

  function handleDeleteTaskBtnClick() {
    const neededId = inputId.value;
    for (const task of tasks.querySelectorAll(".task-card")) {
      if (task.id === neededId) {
        task.remove();
        break;
      }
    }

    setTotalPoints(Number(-points.value));

    inputId.value = "";
    label.value = "";
    title.value = "";
    description.value = "";
    points.value = "";
    assignee.value = "";

    deleteTaskBtn.disabled = true;
    createBtn.disabled = false;
    label.disabled = false;
    title.disabled = false;
    description.disabled = false;
    points.disabled = false;
    assignee.disabled = false;
  }

  function getTotalPoints() {
    const pointsText = totalPointsElement.innerHTML.trim().split(" ")[2];
    return Number(pointsText.slice(0, pointsText.length - 3));
  }

  function setTotalPoints(num) {
    const oldPoints = getTotalPoints();
    const newPoints = oldPoints + num;
    totalPointsElement.textContent = `Total Points ${newPoints}pts`;
  }
}
