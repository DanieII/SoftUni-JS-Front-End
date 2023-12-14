window.addEventListener("load", solve);

function solve() {
  const [student, university, score] = document.querySelectorAll(
    ".applyContent input",
  );

  const nextBtn = document.querySelector("#next-btn");
  const previewList = document.querySelector("#preview-list");
  const candidatesList = document.querySelector("#candidates-list");
  nextBtn.addEventListener("click", handleNextBtnClick);

  function handleNextBtnClick(e) {
    e.preventDefault();

    if (!student.value || !university.value || !score.value) {
      return;
    }

    const application = document.createElement("li");
    application.className = "application";
    application.innerHTML = `
    <article>
      <h4>${student.value}</h4>
      <p>University: ${university.value}</p>
      <p>Score: ${score.value}</p>
    </article>
    <button class="action-btn edit">edit</button>
    <button class="action-btn apply">apply</button>
`;

    const [editBtn, applyBtn] = application.querySelectorAll("button");
    editBtn.addEventListener("click", handleEditBtnClick);
    applyBtn.addEventListener("click", handleApplyBtnClick);

    previewList.appendChild(application);
    e.target.disabled = true;
    student.value = "";
    university.value = "";
    score.value = "";
  }

  function handleEditBtnClick(e) {
    e.target.parentElement.remove();
    nextBtn.disabled = false;
    const currentStudent = e.target.parentElement.querySelector("h4");
    const [currentUniversity, currentScore] =
      e.target.parentElement.querySelectorAll("p");
    student.value = currentStudent.textContent;
    university.value = currentUniversity.textContent.split(" ")[1];
    score.value = currentScore.textContent.split(" ")[1];
  }

  function handleApplyBtnClick(e) {
    const application = e.target.parentElement;

    application.remove();
    for (const button of application.querySelectorAll("button")) {
      button.remove();
    }

    candidatesList.appendChild(application);
    nextBtn.disabled = false;
  }
}
