function solve() {
  const text = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  const resultContainer = document.getElementById("result");
  let result = [];
  const words = text.split(" ");

  if (convention === "Camel Case") {
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i].toLowerCase();

      if (i > 0) {
        currentWord =
          currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
      }

      result.push(currentWord);
    }
  } else if (convention === "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i].toLowerCase();

      currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);

      result.push(currentWord);
    }
  } else {
    result = ["Error!"];
  }

  resultContainer.textContent = result.join("");
}
