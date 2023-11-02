function censoredWords(sentence, wordToCensor) {
  const censored = "*".repeat(wordToCensor.length);
  while (sentence.includes(wordToCensor)) {
    sentence = sentence.replace(wordToCensor, censored);
  }

  console.log(sentence);
}
