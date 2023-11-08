function revealWords(words, text) {
  const wordsToReplaceWith = words.split(", ");
  const textWords = text.split(" ");

  for (const word of wordsToReplaceWith) {
    const neededMatch = "*".repeat(word.length);
    for (let i = 0; i < textWords.length; i++) {
      if (neededMatch === textWords[i]) {
        textWords[i] = word;
      }
    }
  }

  console.log(textWords.join(" "));
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages",
);
