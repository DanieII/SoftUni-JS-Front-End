function addAndSubtract(num1, num2, num3) {
  function sum(num1, num2) {
    return num1 + num2;
  }

  function subtract(sum, num3) {
    return sum - num3;
  }

  const sumFirstTwo = sum(num1, num2);
  const result = subtract(sumFirstTwo, num3);
  console.log(result);
}
