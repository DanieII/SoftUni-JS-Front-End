function printDNA(length) {
  const starsSequence = [2, 1, 0, 1];
  const rowLength = 6;
  const letterCount = 2;
  const letterSequence = getLetterSequenceArray("ATCGTTAGGG");

  function getLetterSequenceArray(letterSequence) {
    let letterSequenceArray = [];
    for (let i = 0; i < letterSequence.length; i += 2) {
      letterSequenceArray.push(letterSequence[i] + letterSequence[i + 1]);
    }

    return letterSequenceArray;
  }

  function getSequenceIndex(currentIndex, sequenceLength) {
    return (currentIndex - 1 + sequenceLength) % sequenceLength;
  }

  for (let i = 1; i <= length; i++) {
    const row = [];
    const currentStars =
      starsSequence[getSequenceIndex(i, starsSequence.length)];
    const currentLetters =
      letterSequence[getSequenceIndex(i, letterSequence.length)].split("");
    const [firstLetter, secondLetter] = currentLetters;
    const dashesCount = rowLength - currentStars * 2 - letterCount;

    row.push("-".repeat(dashesCount));
    row.unshift(firstLetter);
    row.push(secondLetter);
    row.unshift("*".repeat(currentStars));
    row.push("*".repeat(currentStars));

    console.log(row.join(""));
  }
}

printDNA(10);
