function validate() {
  const regex = /[a-z]+@[a-z]+\.[a-z]+/gm;
  const emailField = document.querySelector("#email");

  emailField.addEventListener("change", handleEmailFieldChange);
  function handleEmailFieldChange(e) {
    const email = e.target.value;
    const matches = email.match(regex);
    emailField.className = matches ? "" : "error";
  }
}
