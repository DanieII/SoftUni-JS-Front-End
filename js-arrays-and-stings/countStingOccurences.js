function countStringOccurences(sentence, stringToFind) {
  const sentenceWords = sentence.split(" ");
  let occurences = 0;

  for (const word of sentenceWords) {
    if (word === stringToFind) {
      occurences += 1;
    }
  }

  console.log(occurences);
}
