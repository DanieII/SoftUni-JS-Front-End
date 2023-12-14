window.addEventListener("load", solve);

function solve() {
  const reviewList = document.querySelector("#review-list");
  const [title, category] = document.querySelectorAll(".newPostContent input");
  const content = document.querySelector(".newPostContent textarea");
  const publishBtn = document.querySelector("#publish-btn");
  const publishedList = document.querySelector("#published-list");

  publishBtn.addEventListener("click", handlePublishBtnClick);

  function handlePublishBtnClick() {
    if (!title.value || !category.value || !content.value) {
      return;
    }

    reviewList.innerHTML = "";

    const task = document.createElement("li");
    task.className = "rpost";
    task.innerHTML = `
    <article>
      <h4>${title.value}</h4>
      <p>Category: ${category.value}</p>
      <p>Content: ${content.value}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn post">Post</button>
`;
    const [editBtn, postBtn] = task.querySelectorAll("button");
    editBtn.addEventListener("click", handleEditBtnClick);
    postBtn.addEventListener("click", handlePostBtnClick);

    reviewList.appendChild(task);
    title.value = "";
    category.value = "";
    content.value = "";
  }

  function handleEditBtnClick(e) {
    const task = e.target.parentElement;
    task.remove();
    const taskTitle = task.querySelector("h4");
    const [taskCategory, taskContent] = task.querySelectorAll("p");

    title.value = taskTitle.textContent;
    category.value = taskCategory.textContent.split(": ")[1];
    content.value = taskContent.textContent.split(": ")[1];
  }

  function handlePostBtnClick(e) {
    const task = e.target.parentElement;

    task.remove();
    for (const button of task.querySelectorAll("button")) {
      button.remove();
    }

    publishedList.appendChild(task);
  }
}
