const mainContainer = document.querySelector("#main");

async function solution() {
  const result = await (
    await fetch("http://localhost:3030/jsonstore/advanced/articles/list")
  ).json();

  for (const articleInfo of Object.values(result)) {
    const currentArticle = document.createElement("div");
    currentArticle.innerHTML = `
    <div class="accordion">
      <div class="head">
        <span>${articleInfo.title}</span>
        <button class="button" id="${articleInfo._id}">More</button>
      </div>
      <div class="extra">
        <p>p>
      </div>
    </div>
`;
    const moreBtn = currentArticle.querySelector("button");
    moreBtn.addEventListener("click", handleMoreBtnClick);
    mainContainer.appendChild(currentArticle);
  }
}

async function handleMoreBtnClick(e) {
  const id = e.target.getAttribute("id");
  const contentContainer =
    e.target.parentElement.parentElement.querySelector(".extra p");
  const isHidden = e.target.textContent === "More";

  if (isHidden) {
    const result = await (
      await fetch(
        `http://localhost:3030/jsonstore/advanced/articles/details/${id}`,
      )
    ).json();

    contentContainer.parentElement.style.display = "block";
    contentContainer.textContent = result.content;
    e.target.textContent = "Less";
  } else {
    contentContainer.parentElement.style.display = "none";
    e.target.textContent = "More";
  }
}

solution();
