function deleteByEmail() {
  const email = document.querySelector("input[name='email']");
  const rows = document.querySelectorAll("tbody tr");
  const resultContainer = document.querySelector("#result");
  resultContainer.textContent = "";

  for (const row of rows) {
    const currentEmail = row.children[row.children.length - 1];
    if (email.value === currentEmail.textContent) {
      currentEmail.parentNode.remove();
      resultContainer.textContent = "Deleted.";
    }
  }

  if (resultContainer.textContent !== "Deleted.") {
    resultContainer.textContent = "Not found.";
  }
}
