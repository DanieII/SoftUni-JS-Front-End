function evenAndOddSubstraction(array) {
  const evenNumbers = array.filter((number) => number % 2 == 0);
  const oddNumbers = array.filter((number) => number % 2 != 0);
  const evenNumbersSum = evenNumbers.reduce((sum, current) => {
    return (sum += current);
  }, 0);
  const oddNumbersSum = oddNumbers.reduce((sum, current) => {
    return (sum += current);
  }, 0);

  console.log(evenNumbersSum - oddNumbersSum);
}
