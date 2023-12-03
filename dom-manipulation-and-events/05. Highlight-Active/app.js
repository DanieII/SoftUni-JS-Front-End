function focused() {
  const inputFields = document.querySelectorAll("input[type='text']");

  for (const inputField of inputFields) {
    inputField.addEventListener(
      "focus",
      (e) => (e.target.parentNode.className = "focused"),
    );
    inputField.addEventListener(
      "blur",
      (e) => (e.target.parentNode.className = ""),
    );
  }
}
