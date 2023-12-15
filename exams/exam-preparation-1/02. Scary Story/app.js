window.addEventListener("load", solve);

function solve() {
  const [formName, formLastName, formAge, formTitle] =
    document.querySelectorAll("form input");
  const formGenre = document.querySelector("form select");
  const formStory = document.querySelector("form textarea");
  const publishBtn = document.querySelector("#form-btn");
  const previewList = document.querySelector("#preview-list");
  const mainElement = document.querySelector("#main");

  publishBtn.addEventListener("click", handlePublishBtnClick);

  function handlePublishBtnClick(e) {
    e.preventDefault();

    if (
      !formName.value ||
      !formLastName.value ||
      !formAge.value ||
      !formTitle.value ||
      !formGenre.value ||
      !formStory.value
    ) {
      return;
    }

    const storyElement = document.createElement("li");
    storyElement.className = "story-info";

    const article = document.createElement("article");

    const name = createFilledElement(
      "h4",
      `Name: ${formName.value} ${formLastName.value}`,
    );
    const age = createFilledElement("p", `Age: ${formAge.value}`);
    const title = createFilledElement("p", `Title: ${formTitle.value}`);
    const genre = createFilledElement("p", `Genre: ${formGenre.value}`);
    const story = createFilledElement("p", formStory.value);

    article.appendChild(name);
    article.appendChild(age);
    article.appendChild(title);
    article.appendChild(genre);
    article.appendChild(story);

    const saveBtn = createFilledElement("button", "Save Story", "save-btn");
    const editBtn = createFilledElement("button", "Edit Story", "edit-btn");
    const deleteBtn = createFilledElement(
      "button",
      "Delete Story",
      "delete-btn",
    );

    editBtn.addEventListener("click", handleEditBtnClick);
    saveBtn.addEventListener("click", handleSaveBtnClick);
    deleteBtn.addEventListener("click", handleDeleteBtnClick);

    storyElement.appendChild(article);
    storyElement.appendChild(saveBtn);
    storyElement.appendChild(editBtn);
    storyElement.appendChild(deleteBtn);

    previewList.appendChild(storyElement);

    formName.value = "";
    formLastName.value = "";
    formAge.value = "";
    formTitle.value = "";
    formGenre.value = "";
    formStory.value = "";

    publishBtn.disabled = true;
  }

  function handleEditBtnClick(e) {
    const storyElement = e.target.parentElement;

    storyElement.remove();

    const name = storyElement.querySelector("h4").textContent.split(": ")[1];
    const [firstName, lastName] = name.split(" ");
    let [age, title, genre, story] = storyElement.querySelectorAll("p");
    age = age.textContent.split(": ")[1];
    title = title.textContent.split(": ")[1];
    genre = genre.textContent.split(": ")[1];
    story = story.textContent;

    formName.value = firstName;
    formLastName.value = lastName;
    formAge.value = age;
    formTitle.value = title;
    formGenre.value = genre;
    formStory.value = story;

    publishBtn.disabled = false;
  }

  function handleSaveBtnClick() {
    mainElement.innerHTML = "";
    const message = document.createElement("h1");
    message.textContent = "Your scary story is saved!";
    mainElement.appendChild(message);
  }

  function handleDeleteBtnClick(e) {
    e.target.parentElement.remove();
    publishBtn.disabled = false;
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
}
