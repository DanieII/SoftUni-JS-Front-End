function oddOccurences(input) {
  let wordCounter = {};
  input = input.toLowerCase().split(" ");

  input.forEach((word) => {
    if (!wordCounter.hasOwnProperty(word)) {
      wordCounter[word] = 0;
    }
    wordCounter[word]++;
  });

  wordCounter = Object.entries(wordCounter).filter(
    (wordCount) => wordCount[1] % 2 !== 0,
  );

  let resultWords = [];
  wordCounter.forEach((word) => {
    resultWords.push(word[0]);
  });

  console.log(resultWords.join(" "));
}
