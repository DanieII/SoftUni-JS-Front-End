function sprintReview(info) {
  const boardLength = info.shift();
  const employees = {};
  const tasks = {
    ToDo: 0,
    "In Progress": 0,
    "Code Review": 0,
    Done: 0,
  };

  for (let i = 0; i < boardLength; i++) {
    let column = info.shift();
    column = column.split(":");
    const [name, taskId, title, status, estimatedPoints] = column;
    const task = { taskId, title, status, estimatedPoints };

    if (!employees.hasOwnProperty(name)) {
      employees[name] = [];
    }

    employees[name].push(task);
  }

  for (let command of info) {
    command = command.split(":");
    const action = command.shift();

    if (action === "Add New") {
      const [name, taskId, title, status, estimatedPoints] = command;

      if (!employees.hasOwnProperty(name)) {
        console.log(`Assignee ${name} does not exist on the board!`);
      } else {
        const employee = employees[name];
        employee.push({ taskId, title, status, estimatedPoints });
      }
    } else if (action === "Change Status") {
      const [name, taskId, newStatus] = command;

      if (!employees.hasOwnProperty(name)) {
        console.log(`Assignee ${name} does not exist on the board!`);
      } else {
        const employee = employees[name];
        let isTaskFound = false;
        for (const task of employee) {
          if (task.taskId === taskId) {
            task.status = newStatus;
            isTaskFound = true;
            break;
          }
        }

        if (!isTaskFound) {
          console.log(`Task with ID ${taskId} does not exist for ${name}!`);
        }
      }
    } else if (action === "Remove Task") {
      const [name, index] = command;

      if (!employees.hasOwnProperty(name)) {
        console.log(`Assignee ${name} does not exist on the board!`);
      } else {
        const employee = employees[name];

        if (index >= employee.length || index < 0) {
          console.log(`Index is out of range!`);
        } else {
          employee.splice(index, 1);
        }
      }
    }
  }

  for (const employeeTasks of Object.values(employees)) {
    for (const task of employeeTasks) {
      tasks[task.status] += Number(task.estimatedPoints);
    }
  }

  for (let [status, points] of Object.entries(tasks)) {
    if (status === "Done") {
      status = "Done Points";
    }
    console.log(`${status}: ${points}pts`);
  }

  const points = Object.values(tasks);
  const neededPoints = points
    .slice(0, points.length - 1)
    .reduce((sum, points) => sum + points, 0);

  if (neededPoints <= tasks["Done"]) {
    console.log("Sprint was successful!");
  } else {
    console.log("Sprint was unsuccessful...");
  }
}

sprintReview([
  "4",
  "Kiril:BOP-1213:Fix Typo:Done:1",
  "Peter:BOP-1214:New Products Page:In Progress:2",
  "Mariya:BOP-1215:Setup Routing:ToDo:8",
  "Georgi:BOP-1216:Add Business Card:Code Review:3",
  "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
  "Change Status:Georgi:BOP-1216:Done",
  "Change Status:Will:BOP-1212:In Progress",
  "Remove Task:Georgi:3",
  "Change Status:Mariya:BOP-1215:Done",
]);
