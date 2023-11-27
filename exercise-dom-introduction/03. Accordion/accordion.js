function toggle() {
  const button = document.querySelector(".button");
  const accordionTextContainer = document.querySelector("#extra");

  if (button.textContent === "More") {
    button.textContent = "Less";
    accordionTextContainer.style.display = "block";
  } else {
    button.textContent = "More";
    accordionTextContainer.style.display = "none";
  }
}
