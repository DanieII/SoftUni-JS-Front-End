function extractText() {
  const items = document.querySelectorAll("li");
  const textArea = document.querySelector("#result");
  const result = [];

  for (const item of items) {
    result.push(item.textContent);
  }
  textArea.value = result.join("\n");
}
