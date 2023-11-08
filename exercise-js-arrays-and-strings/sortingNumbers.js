function sortingNumbers(numbers) {
  const numbersInAscending = numbers.sort((a, b) => a - b);
  let resultArray = [];

  while (numbersInAscending.length > 0) {
    const currentSmaller = numbersInAscending.shift();
    const currentBigger = numbersInAscending.pop();
    resultArray.push(currentSmaller);
    resultArray.push(currentBigger);
  }

  return resultArray;
}
