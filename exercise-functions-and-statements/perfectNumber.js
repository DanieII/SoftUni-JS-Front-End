function perfectNumber(number) {
  let divisorsSum = 0;

  for (
    let possibleDivisor = 1;
    possibleDivisor <= number / 2;
    possibleDivisor++
  ) {
    if (number % possibleDivisor === 0) {
      divisorsSum += possibleDivisor;
    }
  }

  if (divisorsSum === number) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
