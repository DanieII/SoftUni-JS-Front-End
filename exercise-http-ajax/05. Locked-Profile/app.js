const mainContainer = document.querySelector("#main");

async function lockedProfile() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/advanced/profiles",
  );
  const result = await response.json();
  mainContainer.innerHTML = "";

  for (const userInfo of Object.values(result)) {
    const currentProfileElement = document.createElement("div");
    currentProfileElement.className = "profile";
    currentProfileElement.innerHTML = `
  	<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${userInfo.username}" disabled readonly />
				<div class="user1HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${userInfo.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${userInfo.age}" disabled readonly />
				</div>
				
				<button>Show more</button>
    `;
    mainContainer.appendChild(currentProfileElement);

    const showMoreBtn = currentProfileElement.querySelector("button");
    const hiddenFields =
      currentProfileElement.querySelector(".user1HiddenFields");
    hiddenFields.style.display = "none";
    showMoreBtn.addEventListener("click", handleShowMoreBtnClick);
  }
}

function handleShowMoreBtnClick(e) {
  const isChecked = e.target.parentElement.querySelector(
    "input[value='unlock']",
  ).checked;
  const hiddenFields =
    e.target.parentElement.querySelector(".user1HiddenFields");
  const isHidden = hiddenFields.style.display === "none";

  if (isChecked) {
    if (isHidden) {
      hiddenFields.style.display = "block";
      e.target.textContent = "Hide it";
    } else {
      hiddenFields.style.display = "none";
      e.target.textContent = "Show more";
    }
  }
}
