window.addEventListener("load", solve);

function solve() {
  const addBtn = document.querySelector("#add-btn");
  const clearBtn = document.querySelector(".clear");

  addBtn.addEventListener("click", handleAddBtnClick);
  clearBtn.addEventListener("click", () => window.location.reload());

  function handleAddBtnClick(e) {
    const [playerName, score, round] = document.querySelectorAll(
      ".scoring-content input",
    );
    const sureList = document.querySelector("#sure-list");

    if (playerName.value && score.value && round.value) {
      const dartItem = document.createElement("li");
      dartItem.className = "dart-item";
      dartItem.innerHTML = `
    <article>
      <p>${playerName.value}</p>
      <p>Score: ${score.value}</p>
      <p>Round: ${round.value}</p>
    </article>
    <button class="btn edit">edit</button>
    <button class="btn ok">ok</button>
`;
      const [editBtn, okBtn] = dartItem.querySelectorAll("button");
      editBtn.addEventListener("click", handleEditBtnClick);
      okBtn.addEventListener("click", handleOkBtnClick);

      sureList.appendChild(dartItem);
      playerName.value = "";
      score.value = "";
      round.value = "";
      e.target.disabled = true;
    }
  }

  function handleEditBtnClick(e) {
    const [playerName, score, round] =
      e.target.parentElement.querySelectorAll("article p");
    const [formPlayerName, formScore, formRound] = document.querySelectorAll(
      ".scoring-content input",
    );
    formPlayerName.value = playerName.textContent;
    formScore.value = score.textContent.split(" ")[1];
    formRound.value = round.textContent.split(" ")[1];
    e.target.parentElement.remove();
    addBtn.disabled = false;
  }

  function handleOkBtnClick(e) {
    const scoreboard = document.querySelector("#scoreboard-list");
    addBtn.disabled = false;
    const record = e.target.parentElement;
    record.remove();
    const buttons = record.querySelectorAll("button");
    console.log(buttons);
    for (const button of buttons) {
      button.remove();
    }
    scoreboard.appendChild(record);
  }
}
