const tableBody = document.querySelector("#results tbody");
const submitBtn = document.querySelector("#submit");

function attachEvents() {
  window.addEventListener("load", displayStudents);
  submitBtn.addEventListener("click", handleSubmitBtnClick);
}

async function displayStudents() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/students",
  );
  const result = await response.json();
  tableBody.innerHTML = "";

  for (const studentInfo of Object.values(result)) {
    const student = document.createElement("tr");
    const firstName = document.createElement("td");
    const lastName = document.createElement("td");
    const facultyNumber = document.createElement("td");
    const grade = document.createElement("td");

    firstName.textContent = studentInfo.firstName;
    lastName.textContent = studentInfo.lastName;
    facultyNumber.textContent = studentInfo.facultyNumber;
    grade.textContent = studentInfo.grade;

    student.appendChild(firstName);
    student.appendChild(lastName);
    student.appendChild(facultyNumber);
    student.appendChild(grade);

    tableBody.appendChild(student);
  }
}

function handleSubmitBtnClick() {
  const [firstName, lastName, facultyNumber, grade] = Array.from(
    document.querySelectorAll(".inputs input"),
  ).map((el) => el.value);

  if (firstName && lastName && facultyNumber && grade) {
    fetch("http://localhost:3030/jsonstore/collections/students", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    }).then(() => displayStudents());
  }
}

attachEvents();
