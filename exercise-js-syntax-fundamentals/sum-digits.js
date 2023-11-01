function sumDigits(digits) {
  const digitsAsString = digits.toString();
  let sumOfDigits = 0;

  for (let i = 0; i < digitsAsString.length; i++) {
    const currentDigit = digitsAsString[i];
    sumOfDigits += Number(currentDigit);
  }

  console.log(sumOfDigits);
}
