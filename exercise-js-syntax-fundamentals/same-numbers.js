function sameNumbers(number) {
  const numAsString = number.toString();
  let sum = 0;
  let lastDigit;
  let isValid = true;

  for (let i = 0; i < numAsString.length; i++) {
    const currentDigit = Number(numAsString[i]);
    sum += currentDigit;

    if (lastDigit && currentDigit !== lastDigit) {
      isValid = false;
    }
    lastDigit = currentDigit;
  }

  console.log(isValid);
  console.log(sum);
}
