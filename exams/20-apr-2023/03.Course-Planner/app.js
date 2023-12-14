const loadCoursesBtn = document.querySelector("#load-course");
const addCourseBtn = document.querySelector("#add-course");
const editCourseBtn = document.querySelector("#edit-course");
const coursesList = document.querySelector("#list");
const formTitle = document.querySelector("#course-name");
const formType = document.querySelector("#course-type");
const formDescription = document.querySelector("#description");
const formTeacher = document.querySelector("#teacher-name");

loadCoursesBtn.addEventListener("click", loadCourses);
addCourseBtn.addEventListener("click", handleAddCourseBtnClick);
editCourseBtn.addEventListener("click", handleEditCourseBtnClick);

async function loadCourses() {
  coursesList.innerHTML = "";

  const data = await (
    await fetch("http://localhost:3030/jsonstore/tasks/")
  ).json();

  for (const course of Object.values(data)) {
    const courseElement = document.createElement("div");
    courseElement.className = "container";
    courseElement.dataset.id = course._id;
    courseElement.innerHTML = `
    <h2>${course.title}</h2>
    <h3>${course.teacher}</h3>
    <h3>${course.type}</h3>
    <h4>${course.description}</h4>
    <button class="edit-btn">Edit Course</button>
    <button class="finish-btn">Finish Course</button>
`;

    const [editBtn, finishBtn] = courseElement.querySelectorAll("button");
    editBtn.addEventListener("click", handleEditBtnclick);
    finishBtn.addEventListener("click", handleFinishBtnClick);

    coursesList.appendChild(courseElement);
  }
}

async function handleAddCourseBtnClick(e) {
  e.preventDefault();

  await fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify({
      title: formTitle.value,
      type: formType.value,
      description: formDescription.value,
      teacher: formTeacher.value,
    }),
  });

  formTitle.value = "";
  formType.value = "";
  formDescription.value = "";
  formTeacher.value = "";

  loadCourses();
}

async function handleEditBtnclick(e) {
  const course = e.target.parentElement;
  const id = course.dataset.id;
  course.remove();
  const courseTitle = course.querySelector("h2");
  const [courseTeacher, courseType] = course.querySelectorAll("h3");
  const courseDescription = course.querySelector("h4");

  formTitle.value = courseTitle.textContent;
  formTeacher.value = courseTeacher.textContent;
  formType.value = courseType.textContent;
  formDescription.value = courseDescription.textContent;

  editCourseBtn.dataset.id = id;

  editCourseBtn.disabled = false;
  addCourseBtn.disabled = true;
}

async function handleEditCourseBtnClick(e) {
  e.preventDefault();

  const id = e.target.dataset.id;
  await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      _id: id,
      title: formTitle.value,
      type: formType.value,
      description: formDescription.value,
      teacher: formTeacher.value,
    }),
  });

  editCourseBtn.disabled = true;
  addCourseBtn.disabled = false;

  loadCourses();
}

async function handleFinishBtnClick(e) {
  const course = e.target.parentElement;
  const id = course.dataset.id;

  await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "DELETE",
  });

  loadCourses();
}
