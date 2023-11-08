function stringSubstring(wordToSearchFor, text) {
  const words = text.split(" ");
  let result = `${wordToSearchFor} not found!`;

  for (const word of words) {
    if (word.toLowerCase() === wordToSearchFor.toLowerCase()) {
      result = wordToSearchFor;
      break;
    }
  }

  console.log(result);
}
