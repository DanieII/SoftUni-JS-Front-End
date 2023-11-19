function wordTracker(input) {
  const wordsToSearchFor = input.shift().split(" ");
  const words = input;
  let wordOccurences = {};

  wordsToSearchFor.forEach((wordToSearchFor) => {
    wordOccurences[wordToSearchFor] = 0;
    words.forEach((word) => {
      if (wordToSearchFor === word) {
        wordOccurences[wordToSearchFor]++;
      }
    });
  });

  wordOccurences = Object.entries(wordOccurences).sort((a, b) => b[1] - a[1]);

  for (const [word, wordCount] of wordOccurences) {
    console.log(`${word} - ${wordCount}`);
  }
}
