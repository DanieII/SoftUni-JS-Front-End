function numberModification(number) {
  let digits = number
    .toString()
    .split("")
    .map((numberAsString) => Number(numberAsString));

  function checkDigits() {
    const sumOfDigits = digits.reduce((previous, current) => {
      return previous + current;
    }, 0);
    const digitsAverage = sumOfDigits / digits.length;

    return digitsAverage > 5;
  }

  let isvalid = checkDigits();

  while (!isvalid) {
    digits.push(9);
    isvalid = checkDigits();
  }

  console.log(digits.join(""));
}
