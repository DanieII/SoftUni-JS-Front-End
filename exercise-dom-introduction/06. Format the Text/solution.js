function solve() {
  const inputText = document.querySelector("#input").value;
  const outputContainer = document.querySelector("#output");
  const sentences = inputText.split(".");
  sentences.pop();

  outputContainer.textContent = "";

  while (sentences.length > 0) {
    const currentSentences = sentences.splice(0, 3);

    const paragraph = document.createElement("p");
    for (const sentence of currentSentences) {
      paragraph.textContent += sentence + ".";
    }
    outputContainer.appendChild(paragraph);
  }
}
