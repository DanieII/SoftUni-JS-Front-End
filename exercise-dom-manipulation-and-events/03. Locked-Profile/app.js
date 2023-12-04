function lockedProfile() {
  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", handleShowButtonClick);
  }

  function handleShowButtonClick(e) {
    const currentState = e.currentTarget.parentElement.querySelector(
      "input[value='unlock']",
    );
    const currentHiddenFields =
      e.currentTarget.parentElement.querySelector("[id*='Hidden']");

    console.log(currentState.checked);

    if (currentState.checked) {
      console.log(e.currentTarget.textContent);
      if (e.currentTarget.textContent === "Show more") {
        e.currentTarget.textContent = "Hide it";
        currentHiddenFields.style.display = "block";
      } else if (e.currentTarget.textContent === "Hide it") {
        e.currentTarget.textContent = "Show more";
        currentHiddenFields.style.display = "none";
      }
    }
  }
}
